import { Common, Utils } from './jumio.common';
import { Frame } from '@nativescript/core/ui/frame';
declare class WeakRef<T> {
    constructor(obj: T);
    get(): T;
    clear(): void;
}

export class Jumio extends Common {
    public cancelWithError = (_error: NetverifyError) => console.log('cancelWithError triggered');
    public finishInitWithError;
    public finishedScan: (documentData: NetverifyDocumentDataExtended, scanReference: string) => void;
    netverifyViewController: NetverifyViewController;

    private delegate;
    private config: NetverifyConfiguration;

    constructor({ merchantApiToken, merchantApiSecret, datacentre, customerId, cancelWithError = null, finishInitWithError = null, finishedScan = null }) {
        super(merchantApiToken, merchantApiSecret, datacentre);

        this.start({ merchantApiToken, merchantApiSecret, customerId, cancelWithError, finishInitWithError, finishedScan });
    }

    public start({ merchantApiToken, merchantApiSecret, customerId, cancelWithError = null, finishInitWithError = null, finishedScan = null }) {
        this.cancelWithError = cancelWithError;
        this.finishInitWithError = finishInitWithError;
        this.finishedScan = finishedScan;

        let config = this.config;
        config = NetverifyConfiguration.new();
        config.enableVerification = true;
        config.apiToken = merchantApiToken;
        config.apiSecret = merchantApiSecret;
        config.dataCenter = JumioDataCenter.EU;

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

    netverifyViewControllerDidCancelWithErrorScanReference(netverifyViewController: NetverifyViewController, error: NetverifyError, scanReference: string): void {
        if (error) {
            Utils.error(error.code, error.message);
        }

        if (this._owner.get().cancelWithError) {
            this._owner.get().cancelWithError(error);
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

    netverifyViewControllerDidFinishWithDocumentDataScanReference(netverifyViewController: NetverifyViewController, documentData: NetverifyDocumentData, scanReference: string): void {
        Utils.log("Good with scan reference: %@", scanReference);

        const gender = documentData.gender;
        let genderStr = '';

        switch (gender) {
            case NetverifyGender.F:
                genderStr = "Female";
                break;
            case NetverifyGender.M:
                genderStr = "Male";
                break;
            case NetverifyGender.X:
                genderStr = "Unspecified";
                break;
            case NetverifyGender.Unknown:
            default:
                genderStr = "Unknown";
                break;
        }

        const selectedDocumentType = documentData.selectedDocumentType;
        let documentTypeStr = '';

        switch (selectedDocumentType) {
            case NetverifyDocumentType.DriverLicense:
                documentTypeStr = "DL";
                break;
            case NetverifyDocumentType.IdentityCard:
                documentTypeStr = "ID";
                break;
            case NetverifyDocumentType.Passport:
                documentTypeStr = "PP";
                break;
            case NetverifyDocumentType.Visa:
                documentTypeStr = "Visa";
                break;
            default:
                break;
        }

        this._callback(netverifyViewController, {
            ...documentData,
            genderStr,
            documentTypeStr,
        } as NetverifyDocumentDataExtended, scanReference);

        this._vc.dismissViewControllerAnimatedCompletion(true, null);
        this._owner.get().netverifyViewController.destroy();
    }
}