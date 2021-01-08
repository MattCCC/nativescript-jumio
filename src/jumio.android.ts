import { Common, Utils } from './jumio.common';
/*
type PlatformNotSupportedException = any;
type NullPointerException = any;

@Interfaces([com.jumio.nv.NetverifySDK])
class NetverifySDK extends java.lang.Object {
    constructor() {
        super();
        this.initializeNetverifySDK();
    }

    private initializeNetverifySDK() {
        let netverifySDK;

        try {
            // You can get the current SDK version using the method below.
            //			NetverifySDK.getSDKVersion();

            // Call the method isSupportedPlatform to check if the device is supported.
            if (!NetverifySDK.isSupportedPlatform(getActivity()))
                Utils.error("Device not supported");

            // Applications implementing the SDK shall not run on rooted devices. Use either the below
            // method or a self-devised check to prevent usage of SDK scanning functionality on rooted
            // devices.
            if (NetverifySDK.isRooted(getActivity()))
                Utils.error("Device is rooted");

            // To create an instance of the SDK, perform the following call as soon as your activity is initialized.
            // Make sure that your merchant API token and API secret are correct and specify an instance
            // of your activity. If your merchant account is created in the EU data center, use
            // JumioDataCenter.EU instead.
            netverifySDK = NetverifySDK.create(getActivity(), apiToken, apiSecret, dataCenter);

            // Use the following method to create an instance of the SDK, using offline fastfill scanning.
            //			try {
            //				netverifySDK = NetverifySDK.create(getActivity(), "YOUROFFLINETOKEN", "YOURPREFERREDCOUNTRY");
            //			} catch (SDKExpiredException e) {
            //				e.printStackTrace();
            //				Toast.makeText(getActivity().getApplicationContext(), "The offline SDK is expired", Toast.LENGTH_LONG).show();
            //				return;
            //			}

            // Enable ID verification to receive a verification status and verified data positions (see Callback chapter).
            // Note: Not possible for accounts configured as Fastfill only.
            netverifySDK.setEnableVerification(switchVerification.isChecked());

            // You can specify issuing country (ISO 3166-1 alpha-3 country code) and/or ID types and/or document variant to skip
            // their selection during the scanning process.
            // Use the following method to convert ISO 3166-1 alpha-2 into alpha-3 country code.
            //			String alpha3 = IsoCountryConverter.convertToAlpha3("AT");
            //			netverifySDK.setPreselectedCountry("AUT");
            //			ArrayList<NVDocumentType> documentTypes = new ArrayList<>();
            //			documentTypes.add(NVDocumentType.PASSPORT);
            //			netverifySDK.setPreselectedDocumentTypes(documentTypes);
            //			netverifySDK.setPreselectedDocumentVariant(NVDocumentVariant.PLASTIC);

            // The customer internal reference allows you to identify the scan (max. 100 characters).
            // Note: Must not contain sensitive data like PII (Personally Identifiable Information) or account login.
            //			netverifySDK.setCustomerInternalReference("YOURSCANREFERENCE");

            // Use the following property to identify the scan in your reports (max. 100 characters).
            //			netverifySDK.setReportingCriteria("YOURREPORTINGCRITERIA");

            // You can also set a user reference (max. 100 characters).
            // Note: The user reference should not contain sensitive data like PII (Personally Identifiable Information) or account login.
            //			netverifySDK.setUserReference("USERREFERENCE");

            // Callback URL for the confirmation after the verification is completed. This setting overrides your Jumio merchant settings.
            //			netverifySDK.setCallbackUrl("YOURCALLBACKURL");

            // You can disable Identity Verification during the ID verification for a specific transaction.
            netverifySDK.setEnableIdentityVerification(switchIdentitiyVerification.isChecked());

            // Use the following method to disable eMRTD scanning.
            //			netverifySDK.setEnableEMRTD(false);

            // Use the following method to set the default camera position.
            //			netverifySDK.setCameraPosition(JumioCameraPosition.FRONT);

            // Use the following method to only support IDs where data can be extracted on mobile only.
            //			netverifySDK.setDataExtractionOnMobileOnly(true);

            // Use the following method to explicitly send debug-info to Jumio. (default: false)
            // Only set this property to true if you are asked by our Jumio support personnel.
            //			netverifySDK.sendDebugInfoToJumio(true);

            // Use the following method to override the SDK theme that is defined in the Manifest with a custom Theme at runtime
            //			netverifySDK.setCustomTheme(R.style.YOURCUSTOMTHEMEID);

            // Set watchlist screening on transaction level. Enable to override the default search, or disable watchlist screening for this transaction.
            //			netverifySDK.setWatchlistScreening(NVWatchlistScreening.ENABLED);

            // Search profile for watchlist screening.
            //			netverifySDK.setWatchlistSearchProfile("YOURPROFILENAME");

            // Use the following method to initialize the SDK before displaying it
            //			netverifySDK.initiate(new NetverifyInitiateCallback() {
            //				@Override
            //				public void onNetverifyInitiateSuccess() {
            //				}
            //				@Override
            //				public void onNetverifyInitiateError(String errorCode, String errorMessage, boolean retryPossible) {
            //				}
            //			});

        } catch (e: PlatformNotSupportedException | NullPointerException) {
            Utils.error("Error in initializeNetverifySDK: ", e);
            if (getActivity() != null) {
                Toast.makeText(getActivity().getApplicationContext(), e.getMessage(), Toast.LENGTH_LONG).show();
            }

            netverifySDK = null;
        }
    }
}
*/
export class Jumio extends Common {
    constructor(merchantApiToken: string, merchantApiSecret: string, datacentre: string) {
        super(merchantApiToken, merchantApiSecret, datacentre);

        setTimeout(() => {
            // Utils.log('Jumio obj', Object.keys(com.jumio));
        }, 200);
    }
}
