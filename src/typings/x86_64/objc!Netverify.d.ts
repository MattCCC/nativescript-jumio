
declare class ISOCountryConverter extends NSObject {

	static alloc(): ISOCountryConverter; // inherited from NSObject

	static convertToAlpha2(alpha3: string): string;

	static convertToAlpha3(alpha2: string): string;

	static new(): ISOCountryConverter; // inherited from NSObject
}

declare class NVScanController extends NSObject {

	static alloc(): NVScanController; // inherited from NSObject

	static new(): NVScanController; // inherited from NSObject
}

declare class NetverifyBaseView extends JumioBaseView {

	static alloc(): NetverifyBaseView; // inherited from NSObject

	static appearance(): NetverifyBaseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NetverifyBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NetverifyBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyBaseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NetverifyBaseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyBaseView; // inherited from UIAppearance

	static jumioAppearance(): NetverifyBaseView; // inherited from JumioAppearance

	static new(): NetverifyBaseView; // inherited from NSObject
}

declare class NetverifyConfiguration extends NSObject implements NSCopying {

	static alloc(): NetverifyConfiguration; // inherited from NSObject

	static new(): NetverifyConfiguration; // inherited from NSObject

	apiSecret: string;

	apiToken: string;

	authorizationToken: string;

	callbackUrl: string;

	cameraPosition: JumioCameraPosition;

	customUIDelegate: NetverifyUIControllerDelegate;

	customerInternalReference: string;

	dataCenter: JumioDataCenter;

	dataExtractionOnMobileOnly: boolean;

	delegate: NetverifyViewControllerDelegate;

	enableIdentityVerification: boolean;

	enableNFCScanning: boolean;

	enableVerification: boolean;

	offlineToken: string;

	preselectedCountry: string;

	preselectedDocumentTypes: NetverifyDocumentType;

	preselectedDocumentVariant: NetverifyDocumentVariant;

	reportingCriteria: string;

	sendDebugInfoToJumio: boolean;

	statusBarStyle: UIStatusBarStyle;

	userReference: string;

	watchlistScreening: NetverifyWatchlistScreening;

	watchlistSearchProfile: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class NetverifyConfirmationImageView extends UIView {

	static alloc(): NetverifyConfirmationImageView; // inherited from NSObject

	static appearance(): NetverifyConfirmationImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NetverifyConfirmationImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NetverifyConfirmationImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyConfirmationImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NetverifyConfirmationImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyConfirmationImageView; // inherited from UIAppearance

	static new(): NetverifyConfirmationImageView; // inherited from NSObject

	readonly imageSize: CGSize;
}

declare const enum NetverifyConfirmationType {

	Generic = 0,

	CheckDocumentSide = 1,

	Analyzing = 2,

	AnalyzingResponsePass = 3,

	AnalyzingResponseReject = 4
}

declare class NetverifyCountry extends NSObject {

	static alloc(): NetverifyCountry; // inherited from NSObject

	static new(): NetverifyCountry; // inherited from NSObject

	readonly code: string;

	readonly documents: NSArray<NetverifyDocument>;

	readonly name: string;
}

declare class NetverifyCustomScanViewController extends UIViewController {

	static alloc(): NetverifyCustomScanViewController; // inherited from NSObject

	static new(): NetverifyCustomScanViewController; // inherited from NSObject

	brandingLogoTopMargin: number;

	customOverlayLayer: UIView;

	customScanViewControllerDelegate: NetverifyCustomScanViewControllerDelegate;

	verticalRoiOffset: number;

	canSwitchCamera(): boolean;

	canToggleFlash(): boolean;

	currentCameraPosition(): JumioCameraPosition;

	currentScanMode(): NetverifyScanMode;

	currentStep(): number;

	hasFlash(): boolean;

	hasMultipleCameras(): boolean;

	isFallbackAvailable(): boolean;

	isFlashOn(): boolean;

	isImagePicker(): boolean;

	localizedLongHelpText(): string;

	localizedShortHelpText(): string;

	overlayFrame(): CGRect;

	pauseScan(): void;

	retryScan(): void;

	switchCamera(): void;

	switchToFallback(): void;

	takeImage(): void;

	toggleFlash(): void;

	totalSteps(): number;
}

interface NetverifyCustomScanViewControllerDelegate extends NSObjectProtocol {

	netverifyCustomScanViewControllerShouldDisplayBlurHint?(customScanView: NetverifyCustomScanViewController, message: string): void;

	netverifyCustomScanViewControllerShouldDisplayConfirmationWithImageViewTypeTextConfirmationRetake(customScanView: NetverifyCustomScanViewController, view: NetverifyConfirmationImageView, type: NetverifyConfirmationType, text: string, confirmation: () => void, retake: () => void): void;

	netverifyCustomScanViewControllerShouldDisplayHelpWithTextAnimationViewForReason(customScanView: NetverifyCustomScanViewController, message: string, animationView: UIView, retryReason: JumioZoomRetryReason): void;

	netverifyCustomScanViewControllerShouldDisplayLegalAdviceCompletion(customScanView: NetverifyCustomScanViewController, message: string, completion: () => void): void;

	netverifyCustomScanViewControllerShouldDisplayNoUSAddressFoundHintConfirmation(customScanView: NetverifyCustomScanViewController, message: string, confirmation: () => void): void;

	netverifyCustomScanViewControllerStartedBiometricAnalysis(customScanView: NetverifyCustomScanViewController): void;
}
declare var NetverifyCustomScanViewControllerDelegate: {

	prototype: NetverifyCustomScanViewControllerDelegate;
};

declare class NetverifyDocument extends NSObject {

	static alloc(): NetverifyDocument; // inherited from NSObject

	static new(): NetverifyDocument; // inherited from NSObject

	readonly countryCode: string;

	selectedVariant: NetverifyDocumentVariant;

	readonly type: NetverifyDocumentType;

	hasMultipleVariants(): boolean;

	supportsPaperVariant(): boolean;

	supportsPlasticVariant(): boolean;
}

declare class NetverifyDocumentData extends NSObject {

	static alloc(): NetverifyDocumentData; // inherited from NSObject

	static new(): NetverifyDocumentData; // inherited from NSObject

	addressLine: string;

	backImage: UIImage;

	city: string;

	dob: Date;

	expiryDate: Date;

	extractionMethod: NetverifyExtractionMethod;

	faceImage: UIImage;

	firstName: string;

	frontImage: UIImage;

	gender: NetverifyGender;

	idNumber: string;

	issuingCountry: string;

	issuingDate: Date;

	lastName: string;

	mrzData: NetverifyMrzData;

	optionalData1: string;

	optionalData2: string;

	originatingCountry: string;

	personalNumber: string;

	placeOfBirth: string;

	postCode: string;

	rawBarcodeFirstName: string;

	selectedCountry: string;

	selectedDocumentType: NetverifyDocumentType;

	subdivision: string;
}

declare class NetverifyDocumentSelectionButton extends UIButton implements JumioAppearance {

	static alloc(): NetverifyDocumentSelectionButton; // inherited from NSObject

	static appearance(): NetverifyDocumentSelectionButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NetverifyDocumentSelectionButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NetverifyDocumentSelectionButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyDocumentSelectionButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NetverifyDocumentSelectionButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyDocumentSelectionButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): NetverifyDocumentSelectionButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): NetverifyDocumentSelectionButton; // inherited from UIButton

	static jumioAppearance(): NetverifyDocumentSelectionButton;

	static new(): NetverifyDocumentSelectionButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): NetverifyDocumentSelectionButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): NetverifyDocumentSelectionButton; // inherited from UIButton

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	backgroundColorForState(state: UIControlState): UIColor;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	iconColorForState(state: UIControlState): UIColor;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBackgroundColorForState(backgroundColor: UIColor, state: UIControlState): void;

	setIconColorForState(iconColor: UIColor, state: UIControlState): void;
}

declare class NetverifyDocumentSelectionHeaderView extends UIView implements JumioAppearance {

	static alloc(): NetverifyDocumentSelectionHeaderView; // inherited from NSObject

	static appearance(): NetverifyDocumentSelectionHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NetverifyDocumentSelectionHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NetverifyDocumentSelectionHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyDocumentSelectionHeaderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NetverifyDocumentSelectionHeaderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyDocumentSelectionHeaderView; // inherited from UIAppearance

	static jumioAppearance(): NetverifyDocumentSelectionHeaderView;

	static new(): NetverifyDocumentSelectionHeaderView; // inherited from NSObject

	iconColor: UIColor;

	titleColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum NetverifyDocumentType {

	All = 0,

	Passport = 1,

	DriverLicense = 2,

	IdentityCard = 4,

	Visa = 8
}

declare const enum NetverifyDocumentVariant {

	Unknown = 0,

	Paper = 1,

	Plastic = 2
}

declare class NetverifyError extends NSObject {

	static alloc(): NetverifyError; // inherited from NSObject

	static new(): NetverifyError; // inherited from NSObject

	readonly code: string;

	readonly message: string;
}

declare const enum NetverifyExtractionMethod {

	MRZ = 0,

	OCR = 1,

	Barcode = 2,

	BarcodeOCR = 3,

	None = 4
}

declare const enum NetverifyFaceErrorReason {

	None = 0,

	Generic = 1,

	BadAngle = 2,

	BadLightning = 3,

	UserCancel = 4
}

declare class NetverifyFallbackButton extends UIButton implements JumioAppearance {

	static alloc(): NetverifyFallbackButton; // inherited from NSObject

	static appearance(): NetverifyFallbackButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NetverifyFallbackButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NetverifyFallbackButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyFallbackButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NetverifyFallbackButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyFallbackButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): NetverifyFallbackButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): NetverifyFallbackButton; // inherited from UIButton

	static jumioAppearance(): NetverifyFallbackButton;

	static new(): NetverifyFallbackButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): NetverifyFallbackButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): NetverifyFallbackButton; // inherited from UIButton

	borderColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	backgroundColorForState(state: UIControlState): UIColor;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBackgroundColorForState(backgroundColor: UIColor, state: UIControlState): void;
}

declare const enum NetverifyGender {

	Unknown = 0,

	M = 1,

	F = 2,

	X = 3
}

declare const enum NetverifyMRZFormat {

	Unknown = 0,

	MRP = 1,

	MRVA = 2,

	MRVB = 3,

	TD1 = 4,

	TD2 = 5,

	CNIS = 6
}

declare class NetverifyMrzData extends NSObject {

	static alloc(): NetverifyMrzData; // inherited from NSObject

	static new(): NetverifyMrzData; // inherited from NSObject

	format: NetverifyMRZFormat;

	line1: string;

	line2: string;

	line3: string;

	compositeValid(): boolean;

	dobValid(): boolean;

	expiryDateValid(): boolean;

	idNumberValid(): boolean;

	personalNumberValid(): boolean;
}

declare class NetverifyNegativeButton extends JumioNegativeButton {

	static alloc(): NetverifyNegativeButton; // inherited from NSObject

	static appearance(): NetverifyNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NetverifyNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NetverifyNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyNegativeButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NetverifyNegativeButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyNegativeButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): NetverifyNegativeButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): NetverifyNegativeButton; // inherited from UIButton

	static jumioAppearance(): NetverifyNegativeButton; // inherited from JumioAppearance

	static new(): NetverifyNegativeButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): NetverifyNegativeButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): NetverifyNegativeButton; // inherited from UIButton
}

declare class NetverifyPositiveButton extends JumioPositiveButton {

	static alloc(): NetverifyPositiveButton; // inherited from NSObject

	static appearance(): NetverifyPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NetverifyPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NetverifyPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyPositiveButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NetverifyPositiveButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyPositiveButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): NetverifyPositiveButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): NetverifyPositiveButton; // inherited from UIButton

	static jumioAppearance(): NetverifyPositiveButton; // inherited from JumioAppearance

	static new(): NetverifyPositiveButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): NetverifyPositiveButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): NetverifyPositiveButton; // inherited from UIButton
}

declare const enum NetverifyScanMode {

	ModeUndefined = 0,

	ModeMRZ = 1,

	ModeNFC = 2,

	ModeBarcode = 3,

	ModeOCR = 4,

	ModeOCR_Template = 5,

	Mode3DLiveness = 6,

	ModeFaceCapture = 7,

	ModeManual = 8
}

declare class NetverifyScanOverlayView extends JumioScanOverlayView implements JumioAppearance {

	static alloc(): NetverifyScanOverlayView; // inherited from NSObject

	static appearance(): NetverifyScanOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NetverifyScanOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NetverifyScanOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyScanOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NetverifyScanOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NetverifyScanOverlayView; // inherited from UIAppearance

	static jumioAppearance(): NetverifyScanOverlayView;

	static new(): NetverifyScanOverlayView; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum NetverifyScanSide {

	Front = 0,

	Back = 1,

	Face = 2
}

declare class NetverifyUIController extends NSObject {

	static alloc(): NetverifyUIController; // inherited from NSObject

	static new(): NetverifyUIController; // inherited from NSObject

	static sdkVersion(): string;

	constructor(o: { configuration: NetverifyConfiguration; });

	cancel(): void;

	debugID(): NSUUID;

	destroy(): void;

	initWithConfiguration(configuration: NetverifyConfiguration): this;

	retryAfterError(): void;

	setupWithDocument(document: NetverifyDocument): void;

	userConsentGiven(isAccepted: boolean): void;
}

interface NetverifyUIControllerDelegate extends NSObjectProtocol {

	netverifyUIControllerDidCancelWithErrorScanReference(netverifyUIController: NetverifyUIController, error: NetverifyError, scanReference: string): void;

	netverifyUIControllerDidCaptureAllParts(netverifyUIController: NetverifyUIController): void;

	netverifyUIControllerDidDetermineAvailableCountriesSuggestedCountry(netverifyUIController: NetverifyUIController, countries: NSArray<any> | any[], country: NetverifyCountry): void;

	netverifyUIControllerDidDetermineErrorRetryPossible(netverifyUIController: NetverifyUIController, error: NetverifyError, retryPossible: boolean): void;

	netverifyUIControllerDidDetermineNextScanViewControllerIsFallback(netverifyUIController: NetverifyUIController, scanViewController: NetverifyCustomScanViewController, isFallback: boolean): void;

	netverifyUIControllerDidFinishInitializingWithError(netverifyUIController: NetverifyUIController, error: NetverifyError): void;

	netverifyUIControllerDidFinishWithDocumentDataScanReference(netverifyUIController: NetverifyUIController, documentData: NetverifyDocumentData, scanReference: string): void;

	netverifyUIControllerShouldRequireUserConsentWithURL(netverifyUIController: NetverifyUIController, url: NSURL): void;
}
declare var NetverifyUIControllerDelegate: {

	prototype: NetverifyUIControllerDelegate;
};

declare class NetverifyViewController extends JMNavigationController {

	static alloc(): NetverifyViewController; // inherited from NSObject

	static new(): NetverifyViewController; // inherited from NSObject

	static sdkVersion(): string;

	constructor(o: { configuration: NetverifyConfiguration; });

	debugID(): NSUUID;

	destroy(): void;

	initWithConfiguration(configuration: NetverifyConfiguration): this;
}

interface NetverifyViewControllerDelegate extends NSObjectProtocol {

	netverifyViewControllerDidCancelWithErrorScanReference(netverifyViewController: NetverifyViewController, error: NetverifyError, scanReference: string): void;

	netverifyViewControllerDidFinishInitializingWithError?(netverifyViewController: NetverifyViewController, error: NetverifyError): void;

	netverifyViewControllerDidFinishWithDocumentDataScanReference(netverifyViewController: NetverifyViewController, documentData: NetverifyDocumentData, scanReference: string): void;
}
declare var NetverifyViewControllerDelegate: {

	prototype: NetverifyViewControllerDelegate;
};

declare const enum NetverifyWatchlistScreening {

	Default = 0,

	Enabled = 1,

	Disabled = 2
}
