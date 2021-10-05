import { Common, Utils, InitArgs, OnResultCallbacks } from './jumio.common';
import { Frame } from '@nativescript/core/ui/frame';

declare class WeakRef<T> {
    constructor(obj: T);
    get(): T;
    clear(): void;
}

export class Jumio extends Common {
    public finishInitWithError;
    public finishedScan: OnResultCallbacks<NetverifyError, NetverifyDocumentDataExtended>['finishedScan'];
    public cancelWithError: OnResultCallbacks<NetverifyError, NetverifyDocumentDataExtended>['cancelWithError'];
    public netverifyViewController: NetverifyViewController;

    private delegate;
    private config: NetverifyConfiguration;

    constructor({ merchantApiToken, merchantApiSecret, datacenter }) {
        super(merchantApiToken, merchantApiSecret, datacenter);
    }

    public init({
        customerId,
        callbackUrl = null,
        preSelectedData = null,
        cancelWithError = null,
        finishInitWithError = null,
        finishedScan = null
    }: InitArgs<NetverifyError, NetverifyDocumentDataExtended>) {
        this.cancelWithError = cancelWithError;
        this.finishInitWithError = finishInitWithError;
        this.finishedScan = finishedScan;

        let config = this.config;
        config = NetverifyConfiguration.new();
        config.enableVerification = true;
        config.apiToken = this.merchantApiToken;
        config.apiSecret = this.merchantApiSecret;
        config.dataCenter = this.mapDataCenter(this.datacenter);

        if (callbackUrl) {
            config.callbackUrl = callbackUrl;
        }

        if (preSelectedData) {
            const { country, documentType } = preSelectedData;
            config.preselectedCountry = ISOCountryConverter.convertToAlpha3(country);
            config.preselectedDocumentTypes = this.mapDocumentType(documentType);
            config.preselectedDocumentVariant = NetverifyDocumentVariant.Plastic;
        }

        this.delegate = NsjumiopluginDelegateImpl.createWithOwnerResultCallback(
            new WeakRef(this),
            this.rootVC(),
            (netverifyViewController: NetverifyViewController, documentData: NetverifyDocumentDataExtended, scanReference: string) => {
                this.finishedScan(documentData, scanReference);
            });

        config.delegate = this.delegate;
        config.customerInternalReference = customerId;

        try {
            this.netverifyViewController = NetverifyViewController.alloc().initWithConfiguration(config);

            this.rootVC().presentViewControllerAnimatedCompletion(
                this.netverifyViewController,
                false,
                () => {
                    // this._raiseShownModallyEvent(parent, context, closeCallback);
                    Utils.log('presentViewControllerAnimatedCompletion done');
                });
        } catch (e) {
            Utils.error('EXCEPTION', e);
            throw new Error(e);
        }
    }

    rootVC() {
        const appWindow = UIApplication.sharedApplication.keyWindow;

        if (appWindow.rootViewController) {
            return appWindow.rootViewController;
        }

        Utils.error('rootViewController not found');

        let topMostFrame = Frame.topmost();
        if (topMostFrame) {
            let viewController: UIViewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;

            if (viewController) {
                while (viewController.parentViewController) {
                    // find top-most view controler
                    viewController = viewController.parentViewController;
                }

                while (viewController.presentedViewController) {
                    // find last presented modal
                    viewController = viewController.presentedViewController;
                }

                return viewController;
            }
        }

        Utils.error('ViewController not found');

        return null;
    }

    private mapDocumentType(documentType: string): NetverifyDocumentType {
        switch (documentType.toUpperCase()) {
            case 'IDENTITY_CARD':
                return NetverifyDocumentType.IdentityCard;
            case 'PASSPORT':
                return NetverifyDocumentType.Passport;
            case 'DRIVER_LICENSE':
                return NetverifyDocumentType.DriverLicense;
            case 'VISA':
                return NetverifyDocumentType.Visa;
            default:
                return NetverifyDocumentType.IdentityCard;
        }
    }

    private mapDataCenter(datacenter: string): JumioDataCenter {
        switch(datacenter.toUpperCase()) {
            case 'EU':
                return JumioDataCenter.EU;
            case 'US':
                return JumioDataCenter.US;
            case 'SG':
                return JumioDataCenter.SG;
            default:
                return JumioDataCenter.EU;
        }
    }

}
@NativeClass()
@ObjCClass(NetverifyViewControllerDelegate)
class NsjumiopluginDelegateImpl extends NSObject implements NetverifyViewControllerDelegate {

    private _owner: WeakRef<Jumio>;
    private _callback: NetverifyScanFinishedCallback;
    _vc: UIViewController;

    static new(): NsjumiopluginDelegateImpl {
        return <NsjumiopluginDelegateImpl>super.new();
    }

    public static createWithOwnerResultCallback(owner: WeakRef<Jumio>, vc: UIViewController, callback: NetverifyScanFinishedCallback): NsjumiopluginDelegateImpl {
        const delegate = NsjumiopluginDelegateImpl.new();
        delegate._owner = owner;
        delegate._callback = callback;
        delegate._vc = vc;

        return delegate;
    }

    netverifyViewControllerDidCancelWithErrorScanReferenceAccountId(netverifyViewController: NetverifyViewController, error: NetverifyError, scanReference: string, accountId: string): void {
        if (error) {
            Utils.error(error.code, error.message);
        }

        if (this._owner.get().cancelWithError) {
            this._owner.get().cancelWithError(error, scanReference);
        }

        this._vc.dismissViewControllerAnimatedCompletion(true, null);
        this._owner.get().netverifyViewController.destroy();
    }

    netverifyViewControllerDidFinishInitializingWithError?(netverifyViewController: NetverifyViewController, error: NetverifyError): void {
        if (error) {
            Utils.error(error.code, error.message);
        }

        if (this._owner.get().finishInitWithError) {
            this._owner.get().finishInitWithError(error);
        }

        if (error) {
            this._vc.dismissViewControllerAnimatedCompletion(true, null);
            this._owner.get().netverifyViewController.destroy();
        }
    }

    netverifyViewControllerDidFinishWithDocumentDataScanReferenceAccountIdAuthenticationResult(netverifyViewController: NetverifyViewController, documentData: NetverifyDocumentData, scanReference: string, accountId: string, authenticationResult: boolean): void {
        Utils.log("Good with scan reference: %@", scanReference);

        const {
            gender,
            selectedCountry,
            issuingCountry
        } = documentData;

        const genderStr = this.getGender(gender);

        this._callback(netverifyViewController, {
            ...documentData,
            issuingCountry: ISOCountryConverter.convertToAlpha2(issuingCountry),
            selectedCountry: ISOCountryConverter.convertToAlpha2(selectedCountry),
            genderStr,
        } as NetverifyDocumentDataExtended, scanReference);

        this._vc.dismissViewControllerAnimatedCompletion(true, null);
        this._owner.get().netverifyViewController.destroy();
    }

    private getGender(gender: NetverifyGender) {
        switch (gender) {
            case NetverifyGender.F:
                return "Female";
            case NetverifyGender.M:
                return "Male";
            case NetverifyGender.X:
                return "Unspecified";
            case NetverifyGender.Unknown:
            default:
                return "Unknown";
      }
    }
}