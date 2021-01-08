
declare class Zoom extends NSObject {

	static alloc(): Zoom; // inherited from NSObject

	static new(): Zoom; // inherited from NSObject

	static readonly sdk: ZoomSDKProtocol;
}

declare const enum ZoomAuditTrailType {

	Disabled = 0,

	FullResolution = 1,

	Height640 = 2
}

declare var ZoomAuthenticationVersionNumber: number;

declare var ZoomAuthenticationVersionString: interop.Reference<number>;

declare const enum ZoomBlurEffectStyle {

	Off = 0,

	StyleRegular = 1,

	StyleLight = 2,

	StyleExtraLight = 3,

	StyleDark = 4,

	StyleProminent = 5
}

declare const enum ZoomCameraPermissionStatus {

	NotDetermined = 0,

	Denied = 1,

	Restricted = 2,

	Authorized = 3
}

declare class ZoomCancelButtonCustomization extends NSObject {

	static alloc(): ZoomCancelButtonCustomization; // inherited from NSObject

	static new(): ZoomCancelButtonCustomization; // inherited from NSObject

	customImage: UIImage;

	customImageLowLight: UIImage;

	location: ZoomCancelButtonLocation;
}

declare const enum ZoomCancelButtonLocation {

	TopLeft = 0,

	TopRight = 1,

	Disabled = 2
}

declare class ZoomCustomization extends NSObject {

	static alloc(): ZoomCustomization; // inherited from NSObject

	static new(): ZoomCustomization; // inherited from NSObject

	static overrideResultScreenSuccessMessage(): string;

	static setOverrideResultScreenSuccessMessage(value: string): void;

	cancelButtonCustomization: ZoomCancelButtonCustomization;

	exitAnimationSuccess: ZoomExitAnimationStyle;

	exitAnimationUnsuccess: ZoomExitAnimationStyle;

	featureFlagsMap: NSDictionary<any, any>;

	feedbackCustomization: ZoomFeedbackCustomization;

	frameCustomization: ZoomFrameCustomization;

	guidanceCustomization: ZoomGuidanceCustomization;

	idScanCustomization: ZoomIDScanCustomization;

	mainInterfaceEntryTransitionTime: number;

	ovalCustomization: ZoomOvalCustomization;

	overlayCustomization: ZoomOverlayCustomization;

	resultScreenCustomization: ZoomResultScreenCustomization;

	constructor(o: { featureFlagsMap: NSDictionary<any, any>; });

	initWithFeatureFlagsMap(featureFlagsMap: NSDictionary<any, any>): this;
}

interface ZoomDeleteUserCallback extends NSObjectProtocol {

	onDeleteUsertResult(isDeleted: boolean): void;
}
declare var ZoomDeleteUserCallback: {

	prototype: ZoomDeleteUserCallback;
};

interface ZoomEnrollmentStatusCallback extends NSObjectProtocol {

	onCheckEnrollmentResult(isEnrolled: boolean): void;
}
declare var ZoomEnrollmentStatusCallback: {

	prototype: ZoomEnrollmentStatusCallback;
};

declare const enum ZoomExitAnimationStyle {

	None = 0,

	RippleOut = 1,

	RippleOutSlow = 2
}

interface ZoomFaceBiometricMetrics extends NSObjectProtocol {

	auditTrail: NSArray<UIImage>;

	auditTrailHistory: NSArray<NSArray<UIImage>>;

	faceMap: NSData;

	faceMapBase64: string;

	timeBasedSessionImages: NSArray<any>;

	zoomFacemap: NSData;
}
declare var ZoomFaceBiometricMetrics: {

	prototype: ZoomFaceBiometricMetrics;
};

interface ZoomFaceMapProcessorDelegate extends NSObjectProtocol {

	processZoomSessionResultWhileZoomWaitsZoomFaceMapResultCallback(zoomSessionResult: ZoomSessionResult, zoomFaceMapResultCallback: ZoomFaceMapResultCallback): void;
}
declare var ZoomFaceMapProcessorDelegate: {

	prototype: ZoomFaceMapProcessorDelegate;
};

interface ZoomFaceMapResultCallback extends NSObjectProtocol {

	onFaceMapResultCancel(): void;

	onFaceMapResultRetry(): void;

	onFaceMapResultSucceed(): void;

	onFaceMapUploadProgress(uploadedPercent: number): void;
}
declare var ZoomFaceMapResultCallback: {

	prototype: ZoomFaceMapResultCallback;
};

declare class ZoomFeedbackCustomization extends NSObject {

	static alloc(): ZoomFeedbackCustomization; // inherited from NSObject

	static new(): ZoomFeedbackCustomization; // inherited from NSObject

	backgroundColor: CAGradientLayer;

	cornerRadius: number;

	enablePulsatingText: boolean;

	size: CGSize;

	textColor: UIColor;

	textFont: UIFont;

	textSpacing: number;

	topMargin: number;
}

declare class ZoomFrameCustomization extends NSObject {

	static alloc(): ZoomFrameCustomization; // inherited from NSObject

	static new(): ZoomFrameCustomization; // inherited from NSObject

	backgroundColor: UIColor;

	blurEffectStyle: ZoomBlurEffectStyle;

	borderColor: UIColor;

	borderWidth: number;

	cornerRadius: number;

	fullScreenBehavior: ZoomFullScreenBehavior;

	sizeRatio: number;

	topMargin: number;
}

declare const enum ZoomFullScreenBehavior {

	Automatic = 0,

	Manual = 1
}

declare class ZoomGuidanceCustomization extends NSObject {

	static alloc(): ZoomGuidanceCustomization; // inherited from NSObject

	static new(): ZoomGuidanceCustomization; // inherited from NSObject

	backgroundColors: NSArray<UIColor>;

	blurEffectStyle: ZoomBlurEffectStyle;

	buttonBackgroundHighlightColor: UIColor;

	buttonBackgroundNormalColor: UIColor;

	buttonBorderColor: UIColor;

	buttonBorderWidth: number;

	buttonCornerRadius: number;

	buttonFont: UIFont;

	buttonTextHighlightColor: UIColor;

	buttonTextNormalColor: UIColor;

	foregroundColor: UIColor;

	headerFont: UIFont;

	imageCustomization: ZoomGuidanceImagesCustomization;

	readyScreenOvalFillColor: UIColor;

	readyScreenTextBackgroundColor: UIColor;

	readyScreenTextBackgroundCornerRadius: number;

	showIntroScreenBrandingImage: boolean;

	subtextFont: UIFont;
}

declare class ZoomGuidanceImagesCustomization extends NSObject {

	static alloc(): ZoomGuidanceImagesCustomization; // inherited from NSObject

	static new(): ZoomGuidanceImagesCustomization; // inherited from NSObject

	badAngleImage: UIImage;

	badLightingImage: UIImage;

	cameraPermissionsScreenImage: UIImage;

	goodAngleImage: UIImage;

	goodLightingImage: UIImage;

	idealZoomImage: UIImage;

	introScreenBrandingImage: UIImage;

	lockoutScreenLockedImage: UIImage;

	lockoutScreenUnlockedImage: UIImage;

	skipGuidanceButtonImage: UIImage;

	constructor(o: { goodLightingImage: UIImage; goodAngleImage: UIImage; badLightingImage: UIImage; badAngleImage: UIImage; idealZoomImage: UIImage; cameraPermissionsScreenImage: UIImage; lockoutScreenLockedImage: UIImage; lockoutScreenUnlockedImage: UIImage; errorScreenImage: UIImage; skipGuidanceButtonImage: UIImage; introScreenBrandingImage: UIImage; });

	initWithGoodLightingImageGoodAngleImageBadLightingImageBadAngleImageIdealZoomImageCameraPermissionsScreenImageLockoutScreenLockedImageLockoutScreenUnlockedImageErrorScreenImageSkipGuidanceButtonImageIntroScreenBrandingImage(goodLightingImage: UIImage, goodAngleImage: UIImage, badLightingImage: UIImage, badAngleImage: UIImage, idealZoomImage: UIImage, cameraPermissionsScreenImage: UIImage, lockoutScreenLockedImage: UIImage, lockoutScreenUnlockedImage: UIImage, errorScreenImage: UIImage, skipGuidanceButtonImage: UIImage, introScreenBrandingImage: UIImage): this;
}

declare class ZoomIDScanCustomization extends NSObject {

	static alloc(): ZoomIDScanCustomization; // inherited from NSObject

	static new(): ZoomIDScanCustomization; // inherited from NSObject

	activeTorchButtonImage: UIImage;

	buttonBackgroundHighlightColor: UIColor;

	buttonBackgroundNormalColor: UIColor;

	buttonBorderColor: UIColor;

	buttonBorderWidth: number;

	buttonCornerRadius: number;

	buttonFont: UIFont;

	buttonTextHighlightColor: UIColor;

	buttonTextNormalColor: UIColor;

	captureScreenForegroundColor: UIColor;

	captureScreenIDCardFrameImage: UIImage;

	captureScreenPassportFrameImage: UIImage;

	captureScreenTextBackgroundBorderColor: UIColor;

	captureScreenTextBackgroundBorderWidth: number;

	captureScreenTextBackgroundColor: UIColor;

	captureScreenTextBackgroundCornerRadius: number;

	headerFont: UIFont;

	inactiveTorchButtonImage: UIImage;

	reviewScreenBackgroundColors: NSArray<UIColor>;

	reviewScreenBlurEffectStyle: ZoomBlurEffectStyle;

	reviewScreenDocumentPreviewCornerRadius: number;

	reviewScreenForegroundColor: UIColor;

	reviewScreenTextBackgroundBorderColor: UIColor;

	reviewScreenTextBackgroundBorderWidth: number;

	reviewScreenTextBackgroundColor: UIColor;

	reviewScreenTextBackgroundCornerRadius: number;

	selectionScreenBackgroundColors: NSArray<UIColor>;

	selectionScreenBlurEffectStyle: ZoomBlurEffectStyle;

	selectionScreenBrandingImage: UIImage;

	selectionScreenForegroundColor: UIColor;

	showSelectionScreenBrandingImage: boolean;

	subtextFont: UIFont;
}

interface ZoomIDScanMetrics extends NSObjectProtocol {

	backImages: NSArray<UIImage>;

	frontImages: NSArray<UIImage>;

	idScan: NSData;

	idScanBase64: string;

	sessionId: string;
}
declare var ZoomIDScanMetrics: {

	prototype: ZoomIDScanMetrics;
};

interface ZoomIDScanProcessorDelegate extends NSObjectProtocol {

	processZoomIDScanResultWhileZoomWaitsZoomIDScanResultCallback(zoomIDScanResult: ZoomIDScanResult, zoomIDScanResultCallback: ZoomIDScanResultCallback): void;
}
declare var ZoomIDScanProcessorDelegate: {

	prototype: ZoomIDScanProcessorDelegate;
};

interface ZoomIDScanResult extends NSObjectProtocol {

	idScanMetrics: ZoomIDScanMetrics;

	idType: ZoomIDType;

	status: ZoomIDScanStatus;
}
declare var ZoomIDScanResult: {

	prototype: ZoomIDScanResult;
};

interface ZoomIDScanResultCallback extends NSObjectProtocol {

	onIDScanResultCancel(): void;

	onIDScanResultRetry(retryMode: ZoomIDScanRetryMode): void;

	onIDScanResultSucceed(): void;

	onIDScanUploadProgress(uploadedPercent: number): void;
}
declare var ZoomIDScanResultCallback: {

	prototype: ZoomIDScanResultCallback;
};

declare const enum ZoomIDScanRetryMode {

	Front = 0,

	Back = 1,

	FrontAndBack = 2
}

declare const enum ZoomIDScanStatus {

	Success = 0,

	Unsuccess = 1,

	UserCancelled = 2,

	TimedOut = 3,

	ContextSwitch = 4,

	CameraError = 5,

	NetworkError = 6
}

declare const enum ZoomIDType {

	IDCard = 0,

	Passport = 1,

	NotSelected = 2
}

declare class ZoomManagedSession extends NSObject implements ZoomSessionDelegate {

	static alloc(): ZoomManagedSession; // inherited from NSObject

	static checkEnrollmentStatusDeviceLicenseKeyIdentifierZoomServerBaseURLIdentifierEnrollmentStatusCallback(delegate: NSURLSessionDelegate, deviceLicenseKeyIdentifier: string, zoomServerBaseURL: string, identifier: string, enrollmentStatusCallback: ZoomEnrollmentStatusCallback): void;

	static deleteExistingUserDeviceLicenseKeyIdentifierZoomServerBaseURLIdentifierDeleteUserCallback(delegate: NSURLSessionDelegate, deviceLicenseKeyIdentifier: string, zoomServerBaseURL: string, identifier: string, deleteUserCallback: ZoomDeleteUserCallback): void;

	static new(): ZoomManagedSession; // inherited from NSObject

	readonly delegate: ZoomManagedSessionDelegate;

	readonly latestFaceTecAPIResponseString: string;

	readonly latestZoomIDScanResult: ZoomIDScanResult;

	readonly latestZoomManagedSessionStatusSubCode: ZoomManagedSessionStatusSubCode;

	readonly latestZoomSessionResult: ZoomSessionResult;

	readonly licenseKey: string;

	readonly mode: ZoomManagedSessionMode;

	readonly zoomServerBaseURL: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { delegate: ZoomManagedSessionDelegate; fromVC: UIViewController; licenseKey: string; zoomServerBaseURL: string; mode: ZoomManagedSessionMode; });

	constructor(o: { delegate: ZoomManagedSessionDelegate; fromVC: UIViewController; licenseKey: string; zoomServerBaseURL: string; mode: ZoomManagedSessionMode; enrollmentIdentifier: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDelegateFromVCLicenseKeyZoomServerBaseURLMode(delegate: ZoomManagedSessionDelegate, fromVC: UIViewController, licenseKey: string, zoomServerBaseURL: string, mode: ZoomManagedSessionMode): this;

	initWithDelegateFromVCLicenseKeyZoomServerBaseURLModeEnrollmentIdentifier(delegate: ZoomManagedSessionDelegate, fromVC: UIViewController, licenseKey: string, zoomServerBaseURL: string, mode: ZoomManagedSessionMode, enrollmentIdentifier: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	onBeforeZoomDismissWithResult(result: ZoomSessionResult): boolean;

	onBeforeZoomDismissWithStatus(status: ZoomSessionStatus): boolean;

	onZoomSessionComplete(): void;

	onZoomSessionCompleteWithResult(result: ZoomSessionResult): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface ZoomManagedSessionDelegate extends NSObjectProtocol {

	onZoomManagedSessionCompleteWithStatus(zoomManagedSessionStatus: ZoomManagedSessionStatus): void;
}
declare var ZoomManagedSessionDelegate: {

	prototype: ZoomManagedSessionDelegate;
};

declare const enum ZoomManagedSessionMode {

	Liveness = 0,

	Enroll = 1,

	Authenticate = 2,

	IdentityCheck = 3
}

declare const enum ZoomManagedSessionStatus {

	Success = 0,

	UnsuccessCheckSubcode = 1
}

declare const enum ZoomManagedSessionStatusSubCode {

	NeverStarted = 0,

	InternalUnsuccess = 1,

	InvalidManagedSessionParameters = 2,

	PortraitModeRequired = 3,

	LockedOut = 4,

	CameraError = 5,

	ContextSwitch = 6,

	UserCancelled = 7,

	Timeout = 8,

	NetworkError = 9,

	MissingGuidanceImages = 10,

	CompletedSuccessfully = 11,

	CheckLatestFaceTecAPIResponseString = 12
}

declare class ZoomOvalCustomization extends NSObject {

	static alloc(): ZoomOvalCustomization; // inherited from NSObject

	static new(): ZoomOvalCustomization; // inherited from NSObject

	progressColor1: UIColor;

	progressColor2: UIColor;

	progressRadialOffset: number;

	progressStrokeWidth: number;

	strokeColor: UIColor;

	strokeWidth: number;
}

declare class ZoomOverlayCustomization extends NSObject {

	static alloc(): ZoomOverlayCustomization; // inherited from NSObject

	static new(): ZoomOverlayCustomization; // inherited from NSObject

	backgroundColor: UIColor;

	blurEffectStyle: ZoomBlurEffectStyle;

	brandingImage: UIImage;
}

declare class ZoomResultScreenCustomization extends NSObject {

	static alloc(): ZoomResultScreenCustomization; // inherited from NSObject

	static new(): ZoomResultScreenCustomization; // inherited from NSObject

	activityIndicatorColor: UIColor;

	backgroundColors: NSArray<UIColor>;

	blurEffectStyle: ZoomBlurEffectStyle;

	foregroundColor: UIColor;

	messageFont: UIFont;

	resultAnimationBackgroundColor: UIColor;

	resultAnimationForegroundColor: UIColor;

	uploadProgressFillColor: UIColor;

	uploadProgressTrackColor: UIColor;
}

interface ZoomSDKProtocol {

	activeTimeoutInSeconds: number;

	auditTrailType: ZoomAuditTrailType;

	cameraPermissionStatus: ZoomCameraPermissionStatus;

	enableTimeBasedSessionImages: boolean;

	version: string;

	configureLocalizationWithTableBundle(table: string, bundle: NSBundle): void;

	createSessionVCWithDelegate(delegate: ZoomSessionDelegate): UIViewController;

	createSessionVCWithDelegateFaceMapProcessorDelegate(delegate: ZoomSessionDelegate, faceMapProcessorDelegate: ZoomFaceMapProcessorDelegate): UIViewController;

	createSessionVCWithDelegateFaceMapProcessorDelegateZoomIDScanProcessorDelegate(delegate: ZoomSessionDelegate, faceMapProcessorDelegate: ZoomFaceMapProcessorDelegate, zoomIDScanProcessorDelegate: ZoomIDScanProcessorDelegate): UIViewController;

	createVerificationVCWithDelegate(delegate: ZoomVerificationDelegate): UIViewController;

	createZoomAPIUserAgentString(sessionId: string): string;

	descriptionForManagedSessionStatus(status: ZoomManagedSessionStatus): string;

	descriptionForManagedSessionStatusSubCode(statusSubcode: ZoomManagedSessionStatusSubCode): string;

	descriptionForSDKStatus(status: ZoomSDKStatus): string;

	descriptionForSessionStatus(status: ZoomSessionStatus): string;

	descriptionForVerificationStatus(status: ZoomVerificationStatus): string;

	getLockoutEndTime(): Date;

	getStatus(): ZoomSDKStatus;

	initializeCompletion(licenseKeyIdentifier: string, completion: (p1: boolean) => void): void;

	initializePreloadZoomSDKCompletion(licenseKeyIdentifier: string, preloadZoomSDK: boolean, completion: (p1: boolean) => void): void;

	initializeWithLicenseLicenseKeyIdentifierCompletion(licenseText: string, licenseKeyIdentifier: string, completion: (p1: boolean) => void): void;

	initializeWithLicenseLicenseKeyIdentifierPreloadZoomSDKCompletion(licenseText: string, licenseKeyIdentifier: string, preloadZoomSDK: boolean, completion: (p1: boolean) => void): void;

	isLicenseValid(): boolean;

	isLockedOut(): boolean;

	preload(): void;

	setCustomization(customization: ZoomCustomization): void;

	setFaceMapEncryptionKeyWithPublicKey(publicKey: string): boolean;

	setLanguage(language: string): void;

	unload(): void;
}
declare var ZoomSDKProtocol: {

	prototype: ZoomSDKProtocol;
};

declare const enum ZoomSDKStatus {

	NeverInitialized = 0,

	Initialized = 1,

	NetworkIssues = 2,

	InvalidDeviceLicenseKeyIdentifier = 3,

	VersionDeprecated = 4,

	OfflineSessionsExceeded = 5,

	UnknownError = 6,

	DeviceLockedOut = 7,

	DeviceInLandscapeMode = 8,

	DeviceInReversePortraitMode = 9,

	LicenseExpiredOrInvalid = 10,

	EncryptionKeyInvalid = 11
}

interface ZoomSessionDelegate extends NSObjectProtocol {

	onBeforeZoomDismissWithResult?(result: ZoomSessionResult): boolean;

	onBeforeZoomDismissWithStatus?(status: ZoomSessionStatus): boolean;

	onZoomSessionComplete?(): void;

	onZoomSessionCompleteWithResult?(result: ZoomSessionResult): void;
}
declare var ZoomSessionDelegate: {

	prototype: ZoomSessionDelegate;
};

interface ZoomSessionResult extends NSObjectProtocol {

	countOfZoomSessionsPerformed: number;

	faceMetrics: ZoomFaceBiometricMetrics;

	sessionId: string;

	status: ZoomSessionStatus;
}
declare var ZoomSessionResult: {

	prototype: ZoomSessionResult;
};

declare const enum ZoomSessionStatus {

	SessionCompletedSuccessfully = 0,

	SessionUnsuccessful = 1,

	UserCancelled = 2,

	NonProductionModeLicenseInvalid = 3,

	CameraPermissionDenied = 4,

	ContextSwitch = 5,

	LandscapeModeNotAllowed = 6,

	ReversePortraitNotAllowed = 7,

	Timeout = 8,

	LowMemory = 9,

	NonProductionModeNetworkRequired = 10,

	GracePeriodExceeded = 11,

	EncryptionKeyInvalid = 12,

	MissingGuidanceImages = 13,

	CameraInitializationIssue = 14,

	LockedOut = 15,

	UnknownInternalError = 16
}

interface ZoomVerificationDelegate extends NSObjectProtocol {

	onBeforeZoomDismissWithStatus?(status: ZoomVerificationStatus): boolean;

	onZoomVerificationResultWithResult(result: ZoomVerificationResult): void;
}
declare var ZoomVerificationDelegate: {

	prototype: ZoomVerificationDelegate;
};

interface ZoomVerificationResult extends NSObjectProtocol {

	countOfZoomSessionsPerformed: number;

	faceMetrics: ZoomFaceBiometricMetrics;

	sessionId: string;

	status: ZoomVerificationStatus;
}
declare var ZoomVerificationResult: {

	prototype: ZoomVerificationResult;
};

declare const enum ZoomVerificationStatus {

	UserProcessedSuccessfully = 0,

	UserNotProcessed = 1,

	FailedBecauseUserCancelled = 2,

	FailedBecauseAppTokenNotValid = 3,

	FailedBecauseCameraPermissionDenied = 4,

	FailedBecauseOfOSContextSwitch = 5,

	FailedBecauseOfLandscapeMode = 6,

	FailedBecauseOfReversePortraitMode = 7,

	FailedBecauseOfTimeout = 8,

	FailedBecauseOfLowMemory = 9,

	FailedBecauseNoConnectionInDevMode = 10,

	FailedBecauseOfflineSessionsExceeded = 11,

	FailedBecauseEncryptionKeyInvalid = 12,

	FailedBecauseMissingGuidanceImages = 13,

	LockedOut = 14,

	UnknownError = 15
}
