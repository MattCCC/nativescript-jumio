
declare function CGControlPointsForArcBetweenPointsWithRadius(startPoint: CGPoint, endPoint: CGPoint, radius: number, rightHandRule: boolean, controlPoint1: interop.Pointer | interop.Reference<CGPoint>, controlPoint2: interop.Pointer | interop.Reference<CGPoint>): void;

declare function CGDeltaMake(deltaX: number, deltaY: number): CGPoint;

interface CGLine {
	point1: CGPoint;
	point2: CGPoint;
}
declare var CGLine: interop.StructType<CGLine>;

declare function CGLineDelta(line: CGLine): CGPoint;

declare function CGLineDirection(line: CGLine): number;

declare function CGLineEqualToLine(line1: CGLine, line2: CGLine): boolean;

declare function CGLineIntersectsRectAtPoint(rect: CGRect, line: CGLine): CGPoint;

declare function CGLineLength(line: CGLine): number;

declare function CGLineMake(point1: CGPoint, point2: CGPoint): CGLine;

declare function CGLineMidPoint(line: CGLine): CGPoint;

declare function CGLineScale(line: CGLine, scale: number): CGLine;

declare function CGLineScaleOnMidPoint(line: CGLine, scale: number): CGLine;

declare function CGLineTranslate(line: CGLine, delta: CGPoint): CGLine;

declare function CGLinesAngle(line1: CGLine, line2: CGLine): number;

declare function CGLinesAreParallel(line1: CGLine, line2: CGLine): boolean;

declare function CGLinesIntersectAtPoint(line1: CGLine, line2: CGLine): CGPoint;

declare function CGPointAlongLine(line: CGLine, distance: number): CGPoint;

declare function CGPointDistance(p1: CGPoint, p2: CGPoint): number;

declare function CGPointRotatedAroundPoint(point: CGPoint, pivot: CGPoint, degrees: number): CGPoint;

declare function CGPointWithDelta(point: CGPoint, delta: CGPoint): CGPoint;

declare function CGRectBottomLeftPoint(rect: CGRect): CGPoint;

declare function CGRectBottomRightPoint(rect: CGRect): CGPoint;

declare function CGRectCenterPoint(rect: CGRect): CGPoint;

declare function CGRectClosestTwoCornerPoints(rect: CGRect, point: CGPoint, point1: interop.Pointer | interop.Reference<CGPoint>, point2: interop.Pointer | interop.Reference<CGPoint>): void;

declare function CGRectInsetEdge(rect: CGRect, edge: CGRectEdge, amount: number): CGRect;

declare function CGRectResize(rect: CGRect, newSize: CGSize): CGRect;

declare function CGRectStackedWithinRectFromEdge(rect: CGRect, size: CGSize, count: number, edge: CGRectEdge, reverse: boolean): CGRect;

declare function CGRectTopLeftPoint(rect: CGRect): CGPoint;

declare function CGRectTopRightPoint(rect: CGRect): CGPoint;

declare class MBBarcodeOverlaySettings extends MBSettings {

	static alloc(): MBBarcodeOverlaySettings; // inherited from NSObject

	static new(): MBBarcodeOverlaySettings; // inherited from NSObject

	displayBarcodeDots: boolean;

	viewfinderMoveable: boolean;
}

declare class MBBarcodeOverlayViewController extends MBModernBaseOverlayViewController {

	static alloc(): MBBarcodeOverlayViewController; // inherited from NSObject

	static new(): MBBarcodeOverlayViewController; // inherited from NSObject

	readonly delegate: MBBarcodeOverlayViewControllerDelegate;

	hudMask: UIInterfaceOrientationMask;

	readonly settings: MBBarcodeOverlaySettings;

	constructor(o: { settings: MBBarcodeOverlaySettings; andDelegate: MBBarcodeOverlayViewControllerDelegate; });

	initWithSettingsAndDelegate(settings: MBBarcodeOverlaySettings, delegate: MBBarcodeOverlayViewControllerDelegate): this;
}

interface MBBarcodeOverlayViewControllerDelegate extends NSObjectProtocol {

	barcodeOverlayViewControllerDidFinishScanningState(barcodeOverlayViewController: MBBarcodeOverlayViewController, state: MBRecognizerResultState): void;

	barcodeOverlayViewControllerDidTapClose(barcodeOverlayViewController: MBBarcodeOverlayViewController): void;
}
declare var MBBarcodeOverlayViewControllerDelegate: {

	prototype: MBBarcodeOverlayViewControllerDelegate;
};

declare class MBBarcodeRecognizer extends MBRecognizer implements NSCopying {

	static alloc(): MBBarcodeRecognizer; // inherited from NSObject

	static new(): MBBarcodeRecognizer; // inherited from NSObject

	allowNullQuietZone: boolean;

	autoScaleDetection: boolean;

	readCode39AsExtendedData: boolean;

	readonly result: MBBarcodeRecognizerResult;

	scanAztec: boolean;

	scanCode128: boolean;

	scanCode39: boolean;

	scanDataMatrix: boolean;

	scanEAN13: boolean;

	scanEAN8: boolean;

	scanITF: boolean;

	scanInverse: boolean;

	scanPdf417: boolean;

	scanQR: boolean;

	scanUPCA: boolean;

	scanUPCE: boolean;

	scanUncertain: boolean;

	useSlowerThoroughScan: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MBBarcodeRecognizerResult extends MBRecognizerResult implements NSCopying {

	static alloc(): MBBarcodeRecognizerResult; // inherited from NSObject

	static new(): MBBarcodeRecognizerResult; // inherited from NSObject

	static toTypeName(type: MBBarcodeType): string;

	readonly barcodeType: MBBarcodeType;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	data(): NSData;

	isUncertain(): boolean;

	stringData(): string;
}

declare const enum MBBarcodeType {

	None = 0,

	TypeQR = 1,

	TypeDataMatrix = 2,

	TypeUPCE = 3,

	TypeUPCA = 4,

	TypeEAN8 = 5,

	TypeEAN13 = 6,

	TypeCode128 = 7,

	TypeCode39 = 8,

	TypeITF = 9,

	TypeAztec = 10,

	TypePdf417 = 11
}

declare class MBBaseBarcodeOverlayViewController extends MBBaseOverlayViewController {

	static alloc(): MBBaseBarcodeOverlayViewController; // inherited from NSObject

	static new(): MBBaseBarcodeOverlayViewController; // inherited from NSObject

	buttonsMargin: number;
}

declare class MBBaseOverlayViewController extends MBOverlayViewController {

	static alloc(): MBBaseOverlayViewController; // inherited from NSObject

	static new(): MBBaseOverlayViewController; // inherited from NSObject

	overlaySubviewsDelegate: PPOverlaySubviewDelegate;

	registerOverlaySubview(subview: UIView): void;

	unregisterOverlaySubview(subview: UIView): void;
}

declare class MBBasePhotoPayOverlayViewController extends MBBaseOverlayViewController {

	static alloc(): MBBasePhotoPayOverlayViewController; // inherited from NSObject

	static new(): MBBasePhotoPayOverlayViewController; // inherited from NSObject

	buttonsMargin: number;

	hudMask: UIInterfaceOrientationMask;

	shouldDisplayHelpButton: boolean;
}

declare class MBCameraSettings extends NSObject implements NSCopying {

	static alloc(): MBCameraSettings; // inherited from NSObject

	static new(): MBCameraSettings; // inherited from NSObject

	autofocusInterval: number;

	cameraAutofocusRestriction: PPCameraAutofocusRestriction;

	cameraMirroredHorizontally: boolean;

	cameraMirroredVertically: boolean;

	cameraPreset: PPCameraPreset;

	cameraType: PPCameraType;

	focusPoint: CGPoint;

	videoGravity: string;

	calcAutofocusRangeRestriction(): AVCaptureAutoFocusRangeRestriction;

	calcSessionPreset(): string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface MBDebugRecognizerRunnerDelegate extends NSObjectProtocol {

	recognizerRunnerDidOutputDebugMetadataMetadata(recognizerRunner: MBRecognizerRunner, metadata: MBMetadata): void;
}
declare var MBDebugRecognizerRunnerDelegate: {

	prototype: MBDebugRecognizerRunnerDelegate;
};

interface MBDebugRecognizerRunnerViewDelegate extends NSObjectProtocol {

	recognizerRunnerViewControllerDidOutputDebugMetadataMetadata(recognizerRunnerViewController: UIViewController, metadata: MBMetadata): void;
}
declare var MBDebugRecognizerRunnerViewDelegate: {

	prototype: MBDebugRecognizerRunnerViewDelegate;
};

interface MBDetectionRecognizerRunnerDelegate extends NSObjectProtocol {

	recognizerRunnerDidFinishDetectionWithDisplayablePoints(recognizerRunner: MBRecognizerRunner, displayablePoints: MBDisplayablePointsDetection): void;

	recognizerRunnerDidFinishDetectionWithDisplayableQuad(recognizerRunner: MBRecognizerRunner, displayableQuad: MBDisplayableQuadDetection): void;
}
declare var MBDetectionRecognizerRunnerDelegate: {

	prototype: MBDetectionRecognizerRunnerDelegate;
};

interface MBDetectionRecognizerRunnerViewDelegate extends NSObjectProtocol {

	recognizerRunnerViewControllerDidFinishDetectionWithDisplayablePoints(recognizerRunnerViewController: UIViewController, displayablePoints: MBDisplayablePointsDetection): void;

	recognizerRunnerViewControllerDidFinishDetectionWithDisplayableQuad(recognizerRunnerViewController: UIViewController, displayableQuad: MBDisplayableQuadDetection): void;
}
declare var MBDetectionRecognizerRunnerViewDelegate: {

	prototype: MBDetectionRecognizerRunnerViewDelegate;
};

declare const enum MBDetectionStatus {

	Success = 1,

	Fail = 2,

	CameraTooHigh = 4,

	CameraAtAngle = 8,

	CameraRotated = 16,

	QRSuccess = 64,

	Pdf417Success = 128,

	FallbackSuccess = 256,

	PartialForm = 512,

	CameraTooNear = 1024
}

declare class MBDisplayableDetection extends MBDisplayableObject {

	static alloc(): MBDisplayableDetection; // inherited from NSObject

	static new(): MBDisplayableDetection; // inherited from NSObject

	readonly detectionStatus: MBDetectionStatus;

	constructor(o: { detectionStatus: MBDetectionStatus; });

	initWithDetectionStatus(status: MBDetectionStatus): this;
}

declare class MBDisplayableObject extends NSObject {

	static alloc(): MBDisplayableObject; // inherited from NSObject

	static new(): MBDisplayableObject; // inherited from NSObject

	transform: CGAffineTransform;
}

declare class MBDisplayablePointsDetection extends MBDisplayableDetection {

	static alloc(): MBDisplayablePointsDetection; // inherited from NSObject

	static new(): MBDisplayablePointsDetection; // inherited from NSObject

	points: NSArray<any>;
}

declare class MBDisplayableQuadDetection extends MBDisplayableDetection {

	static alloc(): MBDisplayableQuadDetection; // inherited from NSObject

	static new(): MBDisplayableQuadDetection; // inherited from NSObject

	detectionLocation: MBQuadrangle;
}

declare class MBDotsOverlaySubview extends PPOverlaySubview {

	static alloc(): MBDotsOverlaySubview; // inherited from NSObject

	static appearance(): MBDotsOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBDotsOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBDotsOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBDotsOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBDotsOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBDotsOverlaySubview; // inherited from UIAppearance

	static new(): MBDotsOverlaySubview; // inherited from NSObject

	animationDuration: number;

	dotsColor: UIColor;

	dotsLayer: CAShapeLayer;

	dotsRadius: number;

	dotsStrokeWidth: number;
}

declare class MBFrameGrabberRecognizer extends MBRecognizer implements NSCopying {

	static alloc(): MBFrameGrabberRecognizer; // inherited from NSObject

	static new(): MBFrameGrabberRecognizer; // inherited from NSObject

	grabFocusedFrames: boolean;

	grabUnfocusedFrames: boolean;

	constructor(o: { frameGrabberDelegate: MBFrameGrabberRecognizerDelegate; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithFrameGrabberDelegate(frameGrabberDelegate: MBFrameGrabberRecognizerDelegate): this;
}

interface MBFrameGrabberRecognizerDelegate extends NSObjectProtocol {

	onFrameAvailableIsFocusedFrameQuality(cameraFrame: MBImage, focused: boolean, frameQuality: number): void;
}
declare var MBFrameGrabberRecognizerDelegate: {

	prototype: MBFrameGrabberRecognizerDelegate;
};

declare const enum MBFrameQualityEstimationMode {

	Default = 0,

	On = 1,

	Off = 2
}

declare class MBGlareStatusOverlaySubview extends PPOverlaySubview {

	static alloc(): MBGlareStatusOverlaySubview; // inherited from NSObject

	static appearance(): MBGlareStatusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBGlareStatusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBGlareStatusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBGlareStatusOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBGlareStatusOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBGlareStatusOverlaySubview; // inherited from UIAppearance

	static new(): MBGlareStatusOverlaySubview; // inherited from NSObject

	label: UILabel;
}

declare class MBIdDocumentOverlaySubview extends PPOverlaySubview {

	static alloc(): MBIdDocumentOverlaySubview; // inherited from NSObject

	static appearance(): MBIdDocumentOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBIdDocumentOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBIdDocumentOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBIdDocumentOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBIdDocumentOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBIdDocumentOverlaySubview; // inherited from UIAppearance

	static new(): MBIdDocumentOverlaySubview; // inherited from NSObject

	tooltipLabel: UILabel;

	viewfinderView: UIView;

	viewfinderWidthToHeightRatio: number;
}

declare var MBIllegalModificationException: string;

declare class MBImage extends NSObject {

	static alloc(): MBImage; // inherited from NSObject

	static imageWithCmSampleBuffer(buffer: any): MBImage;

	static imageWithUIImage(image: UIImage): MBImage;

	static new(): MBImage; // inherited from NSObject

	cameraFrame: boolean;

	estimateFrameQuality: boolean;

	readonly image: UIImage;

	mirroredHorizontally: boolean;

	mirroredVertically: boolean;

	orientation: MBProcessingOrientation;

	roi: CGRect;
}

declare var MBInvalidBundleException: string;

declare var MBInvalidLicenseKeyException: string;

declare var MBInvalidLicenseResourceException: string;

declare var MBInvalidLicenseeKeyException: string;

declare class MBMetadata extends NSObject {

	static alloc(): MBMetadata; // inherited from NSObject

	static new(): MBMetadata; // inherited from NSObject

	readonly name: string;

	constructor(o: { name: string; });

	initWithName(name: string): this;
}

declare class MBMetadataSettings extends NSObject implements NSCopying {

	static alloc(): MBMetadataSettings; // inherited from NSObject

	static new(): MBMetadataSettings; // inherited from NSObject

	currentFrame: boolean;

	debugMetadata: PPDebugMetadata;

	dewarpedImage: boolean;

	successfulFrame: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MBMicroblinkSDK extends NSObject {

	static alloc(): MBMicroblinkSDK; // inherited from NSObject

	static buildVersionString(): string;

	static new(): MBMicroblinkSDK; // inherited from NSObject

	static sharedInstance(): MBMicroblinkSDK;

	setLicenseBuffer(licenseBuffer: NSData): void;

	setLicenseBufferAndLicensee(licenseBuffer: NSData, licensee: string): void;

	setLicenseKey(base64LicenseKey: string): void;

	setLicenseKeyAndLicensee(base64LicenseKey: string, licensee: string): void;

	setLicenseResourceWithExtensionInSubdirectoryForBundle(fileName: string, extension: string, subdirectory: string, bundle: NSBundle): void;

	setLicenseResourceWithExtensionInSubdirectoryForBundleAndLicensee(fileName: string, extension: string, subdirectory: string, bundle: NSBundle, licensee: string): void;
}

declare var MBMissingSettingsException: string;

declare class MBModernBaseOverlayViewController extends MBBaseOverlayViewController {

	static alloc(): MBModernBaseOverlayViewController; // inherited from NSObject

	static new(): MBModernBaseOverlayViewController; // inherited from NSObject

	cancelButton: UIButton;

	torchButton: UIButton;
}

declare class MBModernViewfinderOverlaySubview extends PPOverlaySubview {

	static alloc(): MBModernViewfinderOverlaySubview; // inherited from NSObject

	static appearance(): MBModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBModernViewfinderOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBModernViewfinderOverlaySubview; // inherited from UIAppearance

	static new(): MBModernViewfinderOverlaySubview; // inherited from NSObject

	landscapeMargins: UIEdgeInsets;

	moveable: boolean;

	portraitMargins: UIEdgeInsets;
}

interface MBOverlayContainerViewController extends MBRecognizerRunnerViewController {

	isCameraAuthorized(): boolean;

	isStatusBarPresented(): boolean;

	isTorchOn(): boolean;

	overlayViewControllerShouldDisplayTorch(overlayViewController: MBOverlayViewController): boolean;

	overlayViewControllerWillCloseCamera(overlayViewController: MBOverlayViewController): void;

	overlayViewControllerWillSetTorch(overlayViewController: MBOverlayViewController, isTorchOn: boolean): boolean;

	shouldDisplayHelpButton(): boolean;
}
declare var MBOverlayContainerViewController: {

	prototype: MBOverlayContainerViewController;
};

declare class MBOverlayViewController extends UIViewController {

	static alloc(): MBOverlayViewController; // inherited from NSObject

	static new(): MBOverlayViewController; // inherited from NSObject

	containerViewController: UIViewController;

	overlayViewControllerInterfaceDelegate: MBOverlayViewControllerInterface;

	recognizerRunnerViewController: UIViewController;

	scanningRegion: CGRect;

	showCloseButton: boolean;

	showStatusBar: boolean;

	showTorchButton: boolean;
}

interface MBOverlayViewControllerInterface extends NSObjectProtocol {

	getSettings(): MBSettings;
}
declare var MBOverlayViewControllerInterface: {

	prototype: MBOverlayViewControllerInterface;
};

declare class MBPdf417Recognizer extends MBRecognizer implements NSCopying {

	static alloc(): MBPdf417Recognizer; // inherited from NSObject

	static new(): MBPdf417Recognizer; // inherited from NSObject

	allowNullQuietZone: boolean;

	readonly result: MBPdf417RecognizerResult;

	scanInverse: boolean;

	scanUncertain: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MBPdf417RecognizerResult extends MBRecognizerResult implements NSCopying {

	static alloc(): MBPdf417RecognizerResult; // inherited from NSObject

	static new(): MBPdf417RecognizerResult; // inherited from NSObject

	readonly barcodeType: MBBarcodeType;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	data(): NSData;

	isUncertain(): boolean;

	stringData(): string;
}

interface MBPermissionDeniedDelegate extends NSObjectProtocol {

	userDidTapCancel(viewController: MBPermissionDeniedViewController): void;
}
declare var MBPermissionDeniedDelegate: {

	prototype: MBPermissionDeniedDelegate;
};

declare class MBPermissionDeniedViewController extends UIViewController {

	static alloc(): MBPermissionDeniedViewController; // inherited from NSObject

	static new(): MBPermissionDeniedViewController; // inherited from NSObject

	delegate: MBPermissionDeniedDelegate;

	hideCancelButton: boolean;
}

declare class MBPhotopayOverlayViewController extends MBModernBaseOverlayViewController {

	static alloc(): MBPhotopayOverlayViewController; // inherited from NSObject

	static new(): MBPhotopayOverlayViewController; // inherited from NSObject

	hudMask: UIInterfaceOrientationMask;
}

declare const enum MBProcessingOrientation {

	Up = 0,

	Right = 1,

	Down = 2,

	Left = 3
}

declare class MBQuadrangle extends NSObject {

	static alloc(): MBQuadrangle; // inherited from NSObject

	static new(): MBQuadrangle; // inherited from NSObject

	lowerLeft: CGPoint;

	lowerRight: CGPoint;

	upperLeft: CGPoint;

	upperRight: CGPoint;

	constructor(o: { upperLeft: CGPoint; upperRight: CGPoint; lowerLeft: CGPoint; lowerRight: CGPoint; });

	center(): CGPoint;

	initWithUpperLeftUpperRightLowerLeftLowerRight(upperLeft: CGPoint, upperRight: CGPoint, lowerLeft: CGPoint, lowerRight: CGPoint): this;

	quadrangleWithTransformation(transform: CGAffineTransform): this;

	toPointsArray(): NSArray<any>;
}

declare const enum MBRecognitionMode {

	Default = 0,

	Test = 1,

	DetectionTest = 2
}

declare class MBRecognizer extends NSObject {

	static alloc(): MBRecognizer; // inherited from NSObject

	static new(): MBRecognizer; // inherited from NSObject

	enabled: boolean;

	getOptimalHudOrientation(): UIInterfaceOrientationMask;
}

declare class MBRecognizerCollection extends NSObject implements NSCopying {

	static alloc(): MBRecognizerCollection; // inherited from NSObject

	static new(): MBRecognizerCollection; // inherited from NSObject

	allowMultipleResults: boolean;

	allowResultForEveryImage: boolean;

	frameQualityEstimationMode: MBFrameQualityEstimationMode;

	partialRecognitionTimeout: number;

	recognitionMode: MBRecognitionMode;

	recognizerList: NSArray<MBRecognizer>;

	constructor(o: { recognizers: NSArray<MBRecognizer> | MBRecognizer[]; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithRecognizers(recognizers: NSArray<MBRecognizer> | MBRecognizer[]): this;
}

declare class MBRecognizerResult extends NSObject {

	static alloc(): MBRecognizerResult; // inherited from NSObject

	static new(): MBRecognizerResult; // inherited from NSObject

	readonly resultState: MBRecognizerResultState;
}

declare const enum MBRecognizerResultState {

	Empty = 0,

	Uncertain = 1,

	Valid = 2
}

declare class MBRecognizerRunner extends NSObject {

	static alloc(): MBRecognizerRunner; // inherited from NSObject

	static new(): MBRecognizerRunner; // inherited from NSObject

	metadataDelegates: MBRecognizerRunnerMetadataDelegates;

	scanningRecognizerRunnerDelegate: MBScanningRecognizerRunnerDelegate;

	constructor(o: { settings: MBSettings; });

	applySettings(newSettings: MBSettings): void;

	getSettings(): MBSettings;

	initWithSettings(settings: MBSettings): this;

	processImage(image: MBImage): void;

	resetState(): void;
}

declare class MBRecognizerRunnerMetadataDelegates extends NSObject {

	static alloc(): MBRecognizerRunnerMetadataDelegates; // inherited from NSObject

	static new(): MBRecognizerRunnerMetadataDelegates; // inherited from NSObject

	debugRecognizerRunnerDelegate: MBDebugRecognizerRunnerDelegate;

	detectionRecognizerRunnerDelegate: MBDetectionRecognizerRunnerDelegate;
}

interface MBRecognizerRunnerViewController extends NSObjectProtocol {

	autorotate: boolean;

	metadataDelegates: MBRecognizerRunnerViewMetadataDelegates;

	recognizerRunnerViewControllerDelegate: MBOverlayViewController;

	scanningRecognizerRunnerViewDelegate: MBOverlayViewController;

	scanningRegion: CGRect;

	settings: MBSettings;

	supportedOrientations: UIInterfaceOrientationMask;

	applySettings(newSettings: MBSettings): void;

	isCameraPaused(): boolean;

	isScanningPaused(): boolean;

	pauseCamera(): boolean;

	pauseScanning(): boolean;

	playScanSuccesSound(): void;

	resetState(): void;

	resumeCamera(): boolean;

	resumeScanningAndResetState(resetState: boolean): boolean;

	willSetTorchOn(torchOn: boolean): void;
}
declare var MBRecognizerRunnerViewController: {

	prototype: MBRecognizerRunnerViewController;
};

interface MBRecognizerRunnerViewControllerDelegate extends NSObjectProtocol {

	recognizerRunnerViewControlleDidResumeScanning(recognizerRunnerViewController: UIViewController): void;

	recognizerRunnerViewControlleDidStopScanning(recognizerRunnerViewController: UIViewController): void;

	recognizerRunnerViewControllerDidClose(recognizerRunnerViewController: UIViewController): void;

	recognizerRunnerViewControllerDidFindError(recognizerRunnerViewController: UIViewController, error: NSError): void;

	recognizerRunnerViewControllerUnauthorizedCamera(recognizerRunnerViewController: UIViewController): void;

	recognizerRunnerViewControllerWillPresentHelp(recognizerRunnerViewController: UIViewController): void;
}
declare var MBRecognizerRunnerViewControllerDelegate: {

	prototype: MBRecognizerRunnerViewControllerDelegate;
};

declare class MBRecognizerRunnerViewMetadataDelegates extends NSObject {

	static alloc(): MBRecognizerRunnerViewMetadataDelegates; // inherited from NSObject

	static new(): MBRecognizerRunnerViewMetadataDelegates; // inherited from NSObject

	debugRecognizerRunnerViewDelegate: MBOverlayViewController;

	detectionRecognizerRunnerViewDelegate: MBOverlayViewController;
}

interface MBScanningRecognizerRunnerDelegate extends NSObjectProtocol {

	recognizerRunnerDidFinishState(recognizerRunner: MBRecognizerRunner, state: MBRecognizerResultState): void;
}
declare var MBScanningRecognizerRunnerDelegate: {

	prototype: MBScanningRecognizerRunnerDelegate;
};

interface MBScanningRecognizerRunnerViewDelegate extends NSObjectProtocol {

	recognizerRunnerViewControllerDidFinishScanningState(recognizerRunnerViewController: UIViewController, state: MBRecognizerResultState): void;
}
declare var MBScanningRecognizerRunnerViewDelegate: {

	prototype: MBScanningRecognizerRunnerViewDelegate;
};

declare class MBSettings extends NSObject implements NSCopying {

	static alloc(): MBSettings; // inherited from NSObject

	static new(): MBSettings; // inherited from NSObject

	cameraSettings: MBCameraSettings;

	metadataSettings: MBMetadataSettings;

	readonly resourcesBundle: NSBundle;

	uiSettings: MBUiSettings;

	constructor(o: { resourceBundle: NSBundle; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithResourceBundle(bundle: NSBundle): this;
}

declare class MBSimNumberRecognizer extends MBRecognizer implements NSCopying {

	static alloc(): MBSimNumberRecognizer; // inherited from NSObject

	static new(): MBSimNumberRecognizer; // inherited from NSObject

	readonly result: MBSimNumberRecognizerResult;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MBSimNumberRecognizerResult extends MBRecognizerResult implements NSCopying {

	static alloc(): MBSimNumberRecognizerResult; // inherited from NSObject

	static new(): MBSimNumberRecognizerResult; // inherited from NSObject

	readonly simNumber: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MBSuccessFrameGrabberRecognizer extends MBRecognizer implements NSCopying {

	static alloc(): MBSuccessFrameGrabberRecognizer; // inherited from NSObject

	static new(): MBSuccessFrameGrabberRecognizer; // inherited from NSObject

	readonly result: MBSuccessFrameGrabberRecognizerResult;

	constructor(o: { recognizer: MBRecognizer; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithRecognizer(recognizer: MBRecognizer): this;
}

declare class MBSuccessFrameGrabberRecognizerResult extends MBRecognizerResult implements NSCopying {

	static alloc(): MBSuccessFrameGrabberRecognizerResult; // inherited from NSObject

	static new(): MBSuccessFrameGrabberRecognizerResult; // inherited from NSObject

	readonly successFrame: MBImage;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MBTapToFocusOverlaySubview extends PPOverlaySubview {

	static alloc(): MBTapToFocusOverlaySubview; // inherited from NSObject

	static appearance(): MBTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBTapToFocusOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBTapToFocusOverlaySubview; // inherited from UIAppearance

	static new(): MBTapToFocusOverlaySubview; // inherited from NSObject
}

declare class MBUiSettings extends NSObject implements NSCopying {

	static alloc(): MBUiSettings; // inherited from NSObject

	static new(): MBUiSettings; // inherited from NSObject

	autorotateOverlay: boolean;

	cameraPausedView: UIView;

	displayDebugInfo: boolean;

	helpDisplayMode: PPHelpDisplayMode;

	language: string;

	recognizerCollection: MBRecognizerCollection;

	showCloseButton: boolean;

	showLicenseKeyTimeLimitedWarning: boolean;

	showOcrResults: boolean;

	showStatusBar: boolean;

	showTorchButton: boolean;

	soundFilePath: string;

	constructor(o: { soundFilePath: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithSoundFilePath(soundFilePath: string): this;
}

declare const enum MBUsdlKeys {

	DocumentType = 0,

	StandardVersionNumber = 1,

	CustomerFamilyName = 2,

	CustomerFirstName = 3,

	CustomerFullName = 4,

	DateOfBirth = 5,

	Sex = 6,

	EyeColor = 7,

	AddressStreet = 8,

	AddressCity = 9,

	AddressJurisdictionCode = 10,

	AddressPostalCode = 11,

	FullAddress = 12,

	Height = 13,

	HeightIn = 14,

	HeightCm = 15,

	CustomerMiddleName = 16,

	HairColor = 17,

	NameSuffix = 18,

	AKAFullName = 19,

	AKAFamilyName = 20,

	AKAGivenName = 21,

	AKASuffixName = 22,

	WeightRange = 23,

	WeightPounds = 24,

	WeightKilograms = 25,

	CustomerIdNumber = 26,

	FamilyNameTruncation = 27,

	FirstNameTruncation = 28,

	MiddleNameTruncation = 29,

	PlaceOfBirth = 30,

	AddressStreet2 = 31,

	RaceEthnicity = 32,

	NamePrefix = 33,

	CountryIdentification = 34,

	ResidenceStreetAddress = 35,

	ResidenceStreetAddress2 = 36,

	ResidenceCity = 37,

	ResidenceJurisdictionCode = 38,

	ResidencePostalCode = 39,

	ResidenceFullAddress = 40,

	Under18 = 41,

	Under19 = 42,

	Under21 = 43,

	SocialSecurityNumber = 44,

	AKASocialSecurityNumber = 45,

	AKAMiddleName = 46,

	AKAPrefixName = 47,

	OrganDonor = 48,

	Veteran = 49,

	AKADateOfBirth = 50,

	IssuerIdentificationNumber = 51,

	DocumentExpirationDate = 52,

	JurisdictionVersionNumber = 53,

	JurisdictionVehicleClass = 54,

	JurisdictionRestrictionCodes = 55,

	JurisdictionEndorsementCodes = 56,

	DocumentIssueDate = 57,

	FederalCommercialVehicleCodes = 58,

	IssuingJurisdiction = 59,

	StandardVehicleClassification = 60,

	IssuingJurisdictionName = 61,

	StandardEndorsementCode = 62,

	StandardRestrictionCode = 63,

	JurisdictionVehicleClassificationDescription = 64,

	JurisdictionEndorsmentCodeDescription = 65,

	JurisdictionRestrictionCodeDescription = 66,

	InventoryControlNumber = 67,

	CardRevisionDate = 68,

	DocumentDiscriminator = 69,

	LimitedDurationDocument = 70,

	AuditInformation = 71,

	ComplianceType = 72,

	IssueTimestamp = 73,

	PermitExpirationDate = 74,

	PermitIdentifier = 75,

	PermitIssueDate = 76,

	NumberOfDuplicates = 77,

	HAZMATExpirationDate = 78,

	MedicalIndicator = 79,

	NonResident = 80,

	UniqueCustomerId = 81,

	DataDiscriminator = 82,

	DocumentExpirationMonth = 83,

	DocumentNonexpiring = 84,

	SecurityVersion = 85
}

declare class MBUsdlRecognizer extends MBRecognizer implements NSCopying {

	static alloc(): MBUsdlRecognizer; // inherited from NSObject

	static new(): MBUsdlRecognizer; // inherited from NSObject

	allowNullQuietZone: boolean;

	readonly result: MBUsdlRecognizerResult;

	scanUncertain: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MBUsdlRecognizerResult extends MBRecognizerResult implements NSCopying {

	static alloc(): MBUsdlRecognizerResult; // inherited from NSObject

	static new(): MBUsdlRecognizerResult; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	data(): NSData;

	getField(usdlKey: MBUsdlKeys): string;

	isUncertain(): boolean;

	optionalElements(): NSArray<string>;
}

declare class MBViewControllerFactory extends NSObject {

	static alloc(): MBViewControllerFactory; // inherited from NSObject

	static new(): MBViewControllerFactory; // inherited from NSObject

	static recognizerRunnerViewControllerWithOverlayViewController(overlayViewController: MBOverlayViewController): UIViewController;
}

declare class MBViewFinderOverlaySubview extends PPOverlaySubview {

	static alloc(): MBViewFinderOverlaySubview; // inherited from NSObject

	static appearance(): MBViewFinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBViewFinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBViewFinderOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBViewFinderOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBViewFinderOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MBViewFinderOverlaySubview; // inherited from UIAppearance

	static new(): MBViewFinderOverlaySubview; // inherited from NSObject

	animationDuration: number;

	initialColor: UIColor;

	initialViewfinderMargin: number;

	moveable: boolean;

	strokeWidth: number;

	successColor: UIColor;

	trackingLayer: CAShapeLayer;
}

declare class PPApp extends NSObject {

	static alloc(): PPApp; // inherited from NSObject

	static instance(): PPApp;

	static new(): PPApp; // inherited from NSObject

	static verifyAndGetDefaultResourcesBundle(): NSBundle;

	language: string;

	resourcesBundle: NSBundle;

	isHelpShown(): boolean;

	popStatusBarHidden(): void;

	popStatusBarStyle(): void;

	pushStatusBarHidden(hidden: boolean): void;

	pushStatusBarStyle(statusBarStyle: UIStatusBarStyle): void;

	setDefaultLanguage(): void;

	setHelpShown(value: boolean): void;

	setLanguage(language: string): void;
}

declare class PPBlurredFieldOfViewOverlaySubview extends PPOverlaySubview {

	static alloc(): PPBlurredFieldOfViewOverlaySubview; // inherited from NSObject

	static appearance(): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPBlurredFieldOfViewOverlaySubview; // inherited from UIAppearance

	static new(): PPBlurredFieldOfViewOverlaySubview; // inherited from NSObject

	animationDuration: number;
}

declare const enum PPCameraAutofocusRestriction {

	None = 0,

	Near = 1,

	Far = 2
}

declare const enum PPCameraPreset {

	Preset480p = 0,

	Preset720p = 1,

	PresetOptimal = 2,

	PresetMax = 3,

	PresetPhoto = 4
}

declare const enum PPCameraType {

	Back = 0,

	Front = 1
}

declare class PPDebugMetadata extends NSObject implements NSCopying {

	static alloc(): PPDebugMetadata; // inherited from NSObject

	static new(): PPDebugMetadata; // inherited from NSObject

	debugDetectionFrame: boolean;

	debugDewarpedElements: boolean;

	debugOcrInputFrame: boolean;

	deviceData: boolean;

	ocrData: boolean;

	recognitionData: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum PPDetectionStatus {

	Success = 1,

	Fail = 2,

	CameraTooHigh = 4,

	CameraAtAngle = 8,

	CameraRotated = 16,

	QRSuccess = 64,

	Pdf417Success = 128,

	FallbackSuccess = 256,

	PartialForm = 512,

	CameraTooNear = 1024
}

declare class PPFieldOfViewOverlaySubview extends PPOverlaySubview {

	static alloc(): PPFieldOfViewOverlaySubview; // inherited from NSObject

	static appearance(): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPFieldOfViewOverlaySubview; // inherited from UIAppearance

	static new(): PPFieldOfViewOverlaySubview; // inherited from NSObject

	animationDuration: number;

	aspectRatio: number;

	centerHeight: number;

	cornerCoordinates: NSArray<any>;

	height: number;

	maxHeight: number;

	minHeight: number;

	width: number;
}

declare const enum PPHelpDisplayMode {

	Never = 0,

	FirstRun = 1,

	Always = 2
}

declare class PPImageMetadata extends MBMetadata {

	static alloc(): PPImageMetadata; // inherited from NSObject

	static new(): PPImageMetadata; // inherited from NSObject

	readonly imageType: PPImageMetadataType;

	readonly orientation: UIImageOrientation;

	constructor(o: { name: string; orientation: UIImageOrientation; imageType: PPImageMetadataType; });

	frameQuality(): number;

	image(): UIImage;

	initWithNameOrientationImageType(name: string, orientation: UIImageOrientation, imageType: PPImageMetadataType): this;
}

declare const enum PPImageMetadataType {

	SuccessfulFrame = 0,

	DewarpedImage = 1,

	CurrentFrame = 2,

	DebugOcrInputFrame = 3,

	DebugDetectionFrame = 4,

	DebugDewrapedElements = 5
}

declare const enum PPLivenessAction {

	Blink = 0,

	Smile = 1
}

declare const enum PPLivenessError {

	FaceNotInRoi = 0,

	FaceAngleYawLarge = 1,

	FaceAngleYawSmall = 2,

	FaceAnglePitchLarge = 3,

	FaceAnglePitchSmall = 4,

	FaceAngleRollLarge = 5,

	FaceAngleRollSmall = 6,

	FaceTooClose = 7,

	FaceTooFar = 8,

	NoFace = 9,

	Success = 10
}

declare class PPModernOcrResultOverlaySubview extends PPOverlaySubview {

	static alloc(): PPModernOcrResultOverlaySubview; // inherited from NSObject

	static appearance(): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPModernOcrResultOverlaySubview; // inherited from UIAppearance

	static new(): PPModernOcrResultOverlaySubview; // inherited from NSObject

	charFadeInDuration: number;

	foregroundColor: UIColor;

	shouldIgnoreFastResults: boolean;
}

declare class PPModernToastOverlaySubview extends PPOverlaySubview {

	static alloc(): PPModernToastOverlaySubview; // inherited from NSObject

	static appearance(): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPModernToastOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPModernToastOverlaySubview; // inherited from UIAppearance

	static new(): PPModernToastOverlaySubview; // inherited from NSObject
}

declare class PPOcrLineOverlaySubview extends PPOverlaySubview {

	static alloc(): PPOcrLineOverlaySubview; // inherited from NSObject

	static appearance(): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPOcrLineOverlaySubview; // inherited from UIAppearance

	static new(): PPOcrLineOverlaySubview; // inherited from NSObject

	constructor(o: { frame: CGRect; startWindowPercentage: number; heightWindowPercentage: number; });

	initWithFrameStartWindowPercentageHeightWindowPercentage(frame: CGRect, startWindowPercentage: number, heightWindowPercentage: number): this;

	toggleHelp(): void;
}

declare class PPOcrResultOverlaySubview extends PPOverlaySubview {

	static alloc(): PPOcrResultOverlaySubview; // inherited from NSObject

	static appearance(): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPOcrResultOverlaySubview; // inherited from UIAppearance

	static new(): PPOcrResultOverlaySubview; // inherited from NSObject
}

declare class PPOverlaySubview extends UIView implements PPOverlaySubviewProtocol {

	static alloc(): PPOverlaySubview; // inherited from NSObject

	static appearance(): PPOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPOverlaySubview; // inherited from UIAppearance

	static new(): PPOverlaySubview; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: PPOverlaySubviewDelegate; // inherited from PPOverlaySubviewProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	overlay: MBOverlayViewController; // inherited from PPOverlaySubviewProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	overlayDidFinishDetectionWithDisplayablePoints(displayablePointsDetection: MBDisplayablePointsDetection): void;

	overlayDidFinishDetectionWithDisplayableQuad(displayableQuadDetection: MBDisplayableQuadDetection): void;

	overlayDidFinishRecognition(): void;

	overlayDidOutputMetadata(metadata: MBMetadata): void;

	overlayDidOutputResultsForState(state: MBRecognizerResultState): void;

	overlayDidResumeScanning(): void;

	overlayDidStopScanning(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willFocusAtPoint(point: CGPoint): void;
}

interface PPOverlaySubviewDelegate extends NSObjectProtocol {

	overlaySubviewAnimationDidFinish(overlaySubview: PPOverlaySubview): void;

	overlaySubviewAnimationDidStart(overlaySubview: PPOverlaySubview): void;
}
declare var PPOverlaySubviewDelegate: {

	prototype: PPOverlaySubviewDelegate;
};

interface PPOverlaySubviewProtocol extends NSObjectProtocol {

	delegate: PPOverlaySubviewDelegate;

	overlay: MBOverlayViewController;

	overlayDidFinishDetectionWithDisplayablePoints?(displayablePointsDetection: MBDisplayablePointsDetection): void;

	overlayDidFinishDetectionWithDisplayableQuad?(displayableQuadDetection: MBDisplayableQuadDetection): void;

	overlayDidFinishRecognition?(): void;

	overlayDidOutputMetadata?(metadata: MBMetadata): void;

	overlayDidOutputResultsForState?(state: MBRecognizerResultState): void;

	overlayDidResumeScanning?(): void;

	overlayDidStopScanning?(): void;

	willFocusAtPoint?(point: CGPoint): void;
}
declare var PPOverlaySubviewProtocol: {

	prototype: PPOverlaySubviewProtocol;
};

declare const enum PPRecognitionStatus {

	Success = 0,

	Glare = 1
}

declare class PPRecognitionStatusMetadata extends MBMetadata {

	static alloc(): PPRecognitionStatusMetadata; // inherited from NSObject

	static new(): PPRecognitionStatusMetadata; // inherited from NSObject

	status: PPRecognitionStatus;

	constructor(o: { status: PPRecognitionStatus; });

	initWithStatus(status: PPRecognitionStatus): this;
}

declare class PPTextMetadata extends MBMetadata {

	static alloc(): PPTextMetadata; // inherited from NSObject

	static new(): PPTextMetadata; // inherited from NSObject

	text: string;

	type: PPTextMetadataType;

	constructor(o: { name: string; text: string; });

	constructor(o: { name: string; text: string; type: PPTextMetadataType; });

	initWithNameText(name: string, text: string): this;

	initWithNameTextType(name: string, text: string, type: PPTextMetadataType): this;
}

declare const enum PPTextMetadataType {

	Txt = 0,

	Xml = 1,

	Json = 2
}

declare class PPToastOverlaySubview extends PPOverlaySubview {

	static alloc(): PPToastOverlaySubview; // inherited from NSObject

	static appearance(): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PPToastOverlaySubview; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PPToastOverlaySubview; // inherited from UIAppearance

	static new(): PPToastOverlaySubview; // inherited from NSObject

	font: UIFont;

	label: UILabel;

	toastMargin: number;
}

declare function scanningRegionForFrameInBounds(frame: CGRect, bounds: CGRect): CGRect;
