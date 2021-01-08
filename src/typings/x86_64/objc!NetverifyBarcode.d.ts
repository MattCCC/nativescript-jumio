
declare class NVBarCodeScanViewController extends NetverifyViewController {

	static alloc(): NVBarCodeScanViewController; // inherited from NSObject

	static new(): NVBarCodeScanViewController; // inherited from NSObject

	readonly isProcessing: boolean;

	startScanning(): void;

	stopScanning(): void;
}

declare var NetverifyBarcodeVersionNumber: number;

declare var NetverifyBarcodeVersionString: interop.Reference<number>;
