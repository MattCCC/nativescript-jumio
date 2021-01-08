
declare class BAMCheckoutBaseView extends JumioBaseView {

	static alloc(): BAMCheckoutBaseView; // inherited from NSObject

	static appearance(): BAMCheckoutBaseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BAMCheckoutBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BAMCheckoutBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BAMCheckoutBaseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BAMCheckoutBaseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BAMCheckoutBaseView; // inherited from UIAppearance

	static jumioAppearance(): BAMCheckoutBaseView; // inherited from JumioAppearance

	static new(): BAMCheckoutBaseView; // inherited from NSObject
}

declare class BAMCheckoutCardInformation extends NSObject {

	static alloc(): BAMCheckoutCardInformation; // inherited from NSObject

	static new(): BAMCheckoutCardInformation; // inherited from NSObject

	cardAccountNumber: NSMutableString;

	cardAccountNumberValid: boolean;

	cardCVV: NSMutableString;

	cardExpiryDate: NSMutableString;

	cardExpiryMonth: NSMutableString;

	cardExpiryYear: NSMutableString;

	cardHolderName: NSMutableString;

	cardNumber: NSMutableString;

	cardNumberGrouped: NSMutableString;

	cardNumberMasked: NSMutableString;

	cardSortCode: NSMutableString;

	cardSortCodeValid: boolean;

	cardType: BAMCheckoutCreditCardType;

	clear(): void;

	getCustomField(fieldId: string): string;
}

declare class BAMCheckoutConfiguration extends NSObject {

	static alloc(): BAMCheckoutConfiguration; // inherited from NSObject

	static new(): BAMCheckoutConfiguration; // inherited from NSObject

	apiSecret: string;

	apiToken: string;

	cameraPosition: JumioCameraPosition;

	cardHolderNameEditable: boolean;

	cardHolderNameRequired: boolean;

	cardNumberMaskingEnabled: boolean;

	customOverlay: BAMCheckoutCustomScanOverlayViewController;

	cvvRequired: boolean;

	dataCenter: JumioDataCenter;

	delegate: BAMCheckoutViewControllerDelegate;

	enableFlashOnScanStart: boolean;

	expiryEditable: boolean;

	expiryRequired: boolean;

	offlineToken: string;

	reportingCriteria: string;

	sortCodeAndAccountNumberRequired: boolean;

	soundEffect: string;

	statusBarStyle: UIStatusBarStyle;

	supportedCreditCardTypes: number;

	vibrationEffectEnabled: boolean;

	addCustomFieldTitleKeyboardTypeRegularExpression(fieldId: string, title: string, keyboardType: UIKeyboardType, regex: string): void;

	addCustomFieldTitleValuesRequiredResetValueText(fieldId: string, title: string, values: NSArray<any> | any[], required: boolean, resetValueText: string): void;
}

declare const enum BAMCheckoutCreditCardType {

	All = 0,

	Visa = 1,

	MasterCard = 2,

	AmericanExpress = 4,

	Diners = 8,

	Discover = 16,

	JCB = 32,

	ChinaUnionPay = 64
}

declare class BAMCheckoutCustomScanOverlayViewController extends UIViewController {

	static alloc(): BAMCheckoutCustomScanOverlayViewController; // inherited from NSObject

	static new(): BAMCheckoutCustomScanOverlayViewController; // inherited from NSObject

	delegate: BAMCheckoutCustomScanOverlayViewControllerDelegate;

	verticalCardFrameOffset: number;

	cardFrame(): CGRect;

	currentCameraPosition(): JumioCameraPosition;

	hasFlash(): boolean;

	hasMultipleCameras(): boolean;

	isFlashOn(): boolean;

	retryScan(): void;

	stopScan(): void;

	switchCamera(): void;

	toggleFlash(): void;
}

interface BAMCheckoutCustomScanOverlayViewControllerDelegate extends NSObjectProtocol {

	bamCheckoutStoppedWithErrorRetryPossible(error: NSError, retryPossible: boolean): void;
}
declare var BAMCheckoutCustomScanOverlayViewControllerDelegate: {

	prototype: BAMCheckoutCustomScanOverlayViewControllerDelegate;
};

declare class BAMCheckoutNegativeButton extends UIButton implements JumioAppearance {

	static alloc(): BAMCheckoutNegativeButton; // inherited from NSObject

	static appearance(): BAMCheckoutNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BAMCheckoutNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BAMCheckoutNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BAMCheckoutNegativeButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BAMCheckoutNegativeButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BAMCheckoutNegativeButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): BAMCheckoutNegativeButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): BAMCheckoutNegativeButton; // inherited from UIButton

	static jumioAppearance(): BAMCheckoutNegativeButton;

	static new(): BAMCheckoutNegativeButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): BAMCheckoutNegativeButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): BAMCheckoutNegativeButton; // inherited from UIButton

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

declare class BAMCheckoutPositiveButton extends UIButton implements JumioAppearance {

	static alloc(): BAMCheckoutPositiveButton; // inherited from NSObject

	static appearance(): BAMCheckoutPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BAMCheckoutPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BAMCheckoutPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BAMCheckoutPositiveButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BAMCheckoutPositiveButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BAMCheckoutPositiveButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): BAMCheckoutPositiveButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): BAMCheckoutPositiveButton; // inherited from UIButton

	static jumioAppearance(): BAMCheckoutPositiveButton;

	static new(): BAMCheckoutPositiveButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): BAMCheckoutPositiveButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): BAMCheckoutPositiveButton; // inherited from UIButton

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

declare class BAMCheckoutScanOverlay extends UIView implements JumioAppearance {

	static alloc(): BAMCheckoutScanOverlay; // inherited from NSObject

	static appearance(): BAMCheckoutScanOverlay; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BAMCheckoutScanOverlay; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BAMCheckoutScanOverlay; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BAMCheckoutScanOverlay; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BAMCheckoutScanOverlay; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BAMCheckoutScanOverlay; // inherited from UIAppearance

	static jumioAppearance(): BAMCheckoutScanOverlay;

	static new(): BAMCheckoutScanOverlay; // inherited from NSObject

	borderColor: UIColor;

	textColor: UIColor;

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

declare class BAMCheckoutViewController extends JMNavigationController {

	static alloc(): BAMCheckoutViewController; // inherited from NSObject

	static new(): BAMCheckoutViewController; // inherited from NSObject

	static sdkVersion(): string;

	constructor(o: { configuration: BAMCheckoutConfiguration; });

	initWithConfiguration(configuration: BAMCheckoutConfiguration): this;
}

interface BAMCheckoutViewControllerDelegate extends NSObjectProtocol {

	bamCheckoutViewControllerDidCancelWithErrorScanReference(controller: BAMCheckoutViewController, error: NSError, scanReference: string): void;

	bamCheckoutViewControllerDidFinishScanWithCardInformationScanReference(controller: BAMCheckoutViewController, cardInformation: BAMCheckoutCardInformation, scanReference: string): void;

	bamCheckoutViewControllerDidStartScanAttemptWithScanReference?(controller: BAMCheckoutViewController, scanReference: string): void;
}
declare var BAMCheckoutViewControllerDelegate: {

	prototype: BAMCheckoutViewControllerDelegate;
};
