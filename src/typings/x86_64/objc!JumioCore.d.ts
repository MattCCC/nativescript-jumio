
declare class JMNavigationController extends UINavigationController {

	static alloc(): JMNavigationController; // inherited from NSObject

	static new(): JMNavigationController; // inherited from NSObject
}

declare class JMSDK extends NSObject {

	static alloc(): JMSDK; // inherited from NSObject

	static clientAppVersionStringFull(): string;

	static isBAMCheckoutAvailable(): boolean;

	static isJumioCoreAvailable(): boolean;

	static isJumioNFCAvailable(): boolean;

	static isMicroBlinkAvailable(): boolean;

	static isNetverifyAvailable(): boolean;

	static isNetverifyBarcodeFrameworkAvailable(): boolean;

	static isNetverifyFaceFrameworkAvailable(): boolean;

	static isZoomAvailable(): boolean;

	static new(): JMSDK; // inherited from NSObject

	bundle: NSBundle;

	readonly plistDictionary: NSDictionary<any, any>;

	bundleValueForKey(key: string): string;

	sdkVersionString(): string;

	sdkVersionStringFull(): string;

	shortVersionString(): string;

	versionString(): string;
}

interface JumioAppearance extends NSObjectProtocol {
}
declare var JumioAppearance: {

	prototype: JumioAppearance;

	jumioAppearance(): JumioAppearance;
};

declare class JumioBaseView extends UIView implements JumioAppearance {

	static alloc(): JumioBaseView; // inherited from NSObject

	static appearance(): JumioBaseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JumioBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JumioBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioBaseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JumioBaseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioBaseView; // inherited from UIAppearance

	static jumioAppearance(): JumioBaseView;

	static new(): JumioBaseView; // inherited from NSObject

	customBoldFontName: string;

	customItalicFontName: string;

	customLightFontName: string;

	customMediumFontName: string;

	customRegularFontName: string;

	disableBlur: number;

	enableDarkMode: number;

	foregroundColor: UIColor;

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

declare const enum JumioCameraPosition {

	Back = 0,

	Front = 1
}

declare var JumioCoreVersionNumber: number;

declare var JumioCoreVersionString: interop.Reference<number>;

declare const enum JumioDataCenter {

	US = 0,

	EU = 1,

	SG = 2
}

declare class JumioDeviceInfo extends NSObject {

	static alloc(): JumioDeviceInfo; // inherited from NSObject

	static isJailbrokenDevice(): boolean;

	static new(): JumioDeviceInfo; // inherited from NSObject
}

declare class JumioNavigationBarTitleImageView extends UIImageView implements JumioAppearance {

	static alloc(): JumioNavigationBarTitleImageView; // inherited from NSObject

	static appearance(): JumioNavigationBarTitleImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JumioNavigationBarTitleImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JumioNavigationBarTitleImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioNavigationBarTitleImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JumioNavigationBarTitleImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioNavigationBarTitleImageView; // inherited from UIAppearance

	static jumioAppearance(): JumioNavigationBarTitleImageView;

	static new(): JumioNavigationBarTitleImageView; // inherited from NSObject

	titleImage: UIImage;

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

declare class JumioNegativeButton extends UIButton implements JumioAppearance {

	static alloc(): JumioNegativeButton; // inherited from NSObject

	static appearance(): JumioNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JumioNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JumioNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioNegativeButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JumioNegativeButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioNegativeButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): JumioNegativeButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): JumioNegativeButton; // inherited from UIButton

	static jumioAppearance(): JumioNegativeButton;

	static new(): JumioNegativeButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): JumioNegativeButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): JumioNegativeButton; // inherited from UIButton

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

declare class JumioPositiveButton extends UIButton implements JumioAppearance {

	static alloc(): JumioPositiveButton; // inherited from NSObject

	static appearance(): JumioPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JumioPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JumioPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioPositiveButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JumioPositiveButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioPositiveButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): JumioPositiveButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): JumioPositiveButton; // inherited from UIButton

	static jumioAppearance(): JumioPositiveButton;

	static new(): JumioPositiveButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): JumioPositiveButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): JumioPositiveButton; // inherited from UIButton

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

declare class JumioScanOverlayView extends UIView implements JumioAppearance {

	static alloc(): JumioScanOverlayView; // inherited from NSObject

	static appearance(): JumioScanOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): JumioScanOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): JumioScanOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioScanOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): JumioScanOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): JumioScanOverlayView; // inherited from UIAppearance

	static jumioAppearance(): JumioScanOverlayView;

	static new(): JumioScanOverlayView; // inherited from NSObject

	colorOverlayFill: UIColor;

	colorOverlayInvalid: UIColor;

	colorOverlayStandard: UIColor;

	colorOverlayValid: UIColor;

	faceFeedbackBackgroundColor: UIColor;

	faceFeedbackTextColor: UIColor;

	faceOvalColor: UIColor;

	faceProgressColor: UIColor;

	scanBackgroundColor: UIColor;

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

declare const enum JumioZoomRetryReason {

	Generic = 0,

	BadLighting = 1,

	FaceAngle = 2,

	BadLightingFailureToAcquire = 3,

	NotAvailable = 4,

	DeviceInLandscape = 5
}

declare var kJMSDKBundleShortVersionKey: string;

declare var kJMSDKBundleVersionKey: string;
