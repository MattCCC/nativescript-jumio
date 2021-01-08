
declare class DocumentVerificationBaseView extends JumioBaseView {

	static alloc(): DocumentVerificationBaseView; // inherited from NSObject

	static appearance(): DocumentVerificationBaseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DocumentVerificationBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DocumentVerificationBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DocumentVerificationBaseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DocumentVerificationBaseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DocumentVerificationBaseView; // inherited from UIAppearance

	static jumioAppearance(): DocumentVerificationBaseView; // inherited from JumioAppearance

	static new(): DocumentVerificationBaseView; // inherited from NSObject
}

declare class DocumentVerificationConfiguration extends NSObject implements NSCopying {

	static alloc(): DocumentVerificationConfiguration; // inherited from NSObject

	static new(): DocumentVerificationConfiguration; // inherited from NSObject

	apiSecret: string;

	apiToken: string;

	callbackUrl: string;

	cameraPosition: JumioCameraPosition;

	country: string;

	customDocumentCode: string;

	customerInternalReference: string;

	dataCenter: JumioDataCenter;

	delegate: DocumentVerificationViewControllerDelegate;

	documentName: string;

	enableExtraction: boolean;

	reportingCriteria: string;

	statusBarStyle: UIStatusBarStyle;

	type: string;

	userReference: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class DocumentVerificationError extends NSObject {

	static alloc(): DocumentVerificationError; // inherited from NSObject

	static new(): DocumentVerificationError; // inherited from NSObject

	readonly code: string;

	readonly message: string;
}

declare class DocumentVerificationNegativeButton extends JumioNegativeButton {

	static alloc(): DocumentVerificationNegativeButton; // inherited from NSObject

	static appearance(): DocumentVerificationNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DocumentVerificationNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DocumentVerificationNegativeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DocumentVerificationNegativeButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DocumentVerificationNegativeButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DocumentVerificationNegativeButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): DocumentVerificationNegativeButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): DocumentVerificationNegativeButton; // inherited from UIButton

	static jumioAppearance(): DocumentVerificationNegativeButton; // inherited from JumioAppearance

	static new(): DocumentVerificationNegativeButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): DocumentVerificationNegativeButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): DocumentVerificationNegativeButton; // inherited from UIButton
}

declare class DocumentVerificationPositiveButton extends JumioPositiveButton {

	static alloc(): DocumentVerificationPositiveButton; // inherited from NSObject

	static appearance(): DocumentVerificationPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DocumentVerificationPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DocumentVerificationPositiveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DocumentVerificationPositiveButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DocumentVerificationPositiveButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DocumentVerificationPositiveButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): DocumentVerificationPositiveButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): DocumentVerificationPositiveButton; // inherited from UIButton

	static jumioAppearance(): DocumentVerificationPositiveButton; // inherited from JumioAppearance

	static new(): DocumentVerificationPositiveButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): DocumentVerificationPositiveButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): DocumentVerificationPositiveButton; // inherited from UIButton
}

declare var DocumentVerificationVersionNumber: number;

declare var DocumentVerificationVersionString: interop.Reference<number>;

declare class DocumentVerificationViewController extends JMNavigationController {

	static alloc(): DocumentVerificationViewController; // inherited from NSObject

	static new(): DocumentVerificationViewController; // inherited from NSObject

	static sdkVersion(): string;

	constructor(o: { configuration: DocumentVerificationConfiguration; });

	initWithConfiguration(configuration: DocumentVerificationConfiguration): this;
}

interface DocumentVerificationViewControllerDelegate extends NSObjectProtocol {

	documentVerificationViewControllerDidFinishWithError(documentVerificationViewController: DocumentVerificationViewController, error: DocumentVerificationError): void;

	documentVerificationViewControllerDidFinishWithScanReference(documentVerificationViewController: DocumentVerificationViewController, scanReference: string): void;
}
declare var DocumentVerificationViewControllerDelegate: {

	prototype: DocumentVerificationViewControllerDelegate;
};
