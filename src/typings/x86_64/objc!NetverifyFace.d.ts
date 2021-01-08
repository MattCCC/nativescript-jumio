
declare class AuthenticationConfiguration extends NSObject implements NSCopying {

	static alloc(): AuthenticationConfiguration; // inherited from NSObject

	static new(): AuthenticationConfiguration; // inherited from NSObject

	apiSecret: string;

	apiToken: string;

	authenticationScanViewControllerDelegate: AuthenticationScanViewControllerDelegate;

	authenticationTransactionReference: string;

	authorizationToken: string;

	callbackUrl: string;

	dataCenter: JumioDataCenter;

	delegate: AuthenticationControllerDelegate;

	enrollmentTransactionReference: string;

	statusBarStyle: UIStatusBarStyle;

	userReference: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class AuthenticationController extends NSObject {

	static alloc(): AuthenticationController; // inherited from NSObject

	static new(): AuthenticationController; // inherited from NSObject

	static sdkVersion(): string;

	constructor(o: { configuration: AuthenticationConfiguration; });

	destroy(): void;

	initWithConfiguration(configuration: AuthenticationConfiguration): this;
}

interface AuthenticationControllerDelegate extends NSObjectProtocol {

	authenticationControllerDidFinishInitializingScanViewController(authenticationController: AuthenticationController, scanViewController: AuthenticationScanViewController): void;

	authenticationControllerDidFinishWithAuthenticationResultTransactionReference(authenticationController: AuthenticationController, authenticationResult: AuthenticationResult, transactionReference: string): void;

	authenticationControllerDidFinishWithErrorTransactionReference(authenticationController: AuthenticationController, error: AuthenticationError, transactionReference: string): void;
}
declare var AuthenticationControllerDelegate: {

	prototype: AuthenticationControllerDelegate;
};

declare class AuthenticationError extends NSObject {

	static alloc(): AuthenticationError; // inherited from NSObject

	static new(): AuthenticationError; // inherited from NSObject

	readonly code: string;

	readonly message: string;
}

declare const enum AuthenticationResult {

	Success = 1,

	Failed = 2
}

declare class AuthenticationScanViewController extends UIViewController {

	static alloc(): AuthenticationScanViewController; // inherited from NSObject

	static new(): AuthenticationScanViewController; // inherited from NSObject

	customOverlayLayer: UIView;

	cancel(): void;

	retryAfterError(): void;

	retryScan(): void;

	userConsentGiven(isAccepted: boolean): void;
}

interface AuthenticationScanViewControllerDelegate extends NSObjectProtocol {

	authenticationScanViewControllerDidDetermineRecoverableError(authenticationScanViewController: AuthenticationScanViewController, error: AuthenticationError): void;

	authenticationScanViewControllerDidStartBiometricAnalysis(authenticationScanViewController: AuthenticationScanViewController): void;

	authenticationScanViewControllerShouldDisplayHelpWithTextAnimationViewForReason(authenticationScanViewController: AuthenticationScanViewController, message: string, animationView: UIView, retryReason: JumioZoomRetryReason): void;

	authenticationScanViewControllerShouldRequireUserConsentWithURL(authenticationScanViewController: AuthenticationScanViewController, url: NSURL): void;
}
declare var AuthenticationScanViewControllerDelegate: {

	prototype: AuthenticationScanViewControllerDelegate;
};

declare var NetverifyLivenessVersionNumber: number;

declare var NetverifyLivenessVersionString: interop.Reference<number>;
