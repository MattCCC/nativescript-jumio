
declare class CryptoPPWrapper extends NSObject {

	static alloc(): CryptoPPWrapper; // inherited from NSObject

	static new(): CryptoPPWrapper; // inherited from NSObject

	constructor(o: { algorithm: string; });

	constructor(o: { hashAlgorithm: string; });

	finalizeHash(): NSData;

	finalizeMACWithData(data: NSData): NSData;

	finalizeWithData(data: NSData): NSData;

	initWithAlgorithm(algorithm: string): this;

	initWithHashAlgorithm(algorithm: string): this;

	initializeMACWithKeyData(keyData: NSData): void;

	initializeWithModeKeyDataIvData(mode: number, keyData: NSData, ivData: NSData): void;

	updateWithData(data: NSData): void;

	verifyMACWithDataInputDataKeyData(data: NSData, inputData: NSData, keyData: NSData): void;
}

declare var JumioNFCVersionNumber: number;

declare var JumioNFCVersionString: interop.Reference<number>;

declare class NFCPassportModel extends NSObject {

	static alloc(): NFCPassportModel; // inherited from NSObject

	static new(): NFCPassportModel; // inherited from NSObject

	readonly activeAuthenticationPassed: boolean;

	readonly activeAuthenticationSupported: boolean;

	readonly countrySigningCertificateVerified: boolean;

	readonly dataGroupHashesChecked: NSDictionary<string, number>;

	readonly documentNumber: string;

	readonly documentSigningCertificateVerified: boolean;

	readonly firstName: string;

	readonly issuingAuthority: string;

	readonly issuingDate: string;

	readonly lastName: string;

	readonly mrzLines: string;

	readonly nationality: string;

	readonly passiveAuthenticationPassed: boolean;

	readonly personalNumber: string;

	readonly placeOfBirth: string;

	readonly trustScore: number;
}

interface NVPassportReaderCallback extends NSObjectProtocol {

	passportReaderDidFailWithErrorSilentlyFailAttempt(error: NSError, isSilentlyFailAttempt: boolean): void;

	passportReaderDidFinishReadingPassportSilentlyFailAttempt(passport: NSDictionary<any, any>, isSilentlyFailAttempt: boolean): void;

	passportReaderSessionDidTimeoutAndIsSilentlyFailAttempt(isSilentlyFailAttempt: boolean): void;

	passportReaderShouldAnalyzeInformationMetaInfo(information: string, metaInfo: NSDictionary<any, any>): void;

	passportReaderStartedReading(): void;

	passportReaderUserDidCancelAndIsSilentlyFailAttempt(isSilentlyFailAttempt: boolean): void;
}
declare var NVPassportReaderCallback: {

	prototype: NVPassportReaderCallback;
};

declare class OpenSSLWrapper extends NSObject {

	static alloc(): OpenSSLWrapper; // inherited from NSObject

	static cleanupOpenSSL(): void;

	static loadOpenSSL(): void;

	static new(): OpenSSLWrapper; // inherited from NSObject

	static verifyAndGetSignedDataFromPKCS7Error(pkcs7Der: NSData, error: interop.Pointer | interop.Reference<OpenSSLWrapperError>): NSData;
}

declare class OpenSSLWrapperError extends NSError {

	static alloc(): OpenSSLWrapperError; // inherited from NSObject

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): OpenSSLWrapperError; // inherited from NSError

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): OpenSSLWrapperError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): OpenSSLWrapperError; // inherited from NSError

	static new(): OpenSSLWrapperError; // inherited from NSObject

	static unexpected(): OpenSSLWrapperError;

	reason: string;
}

declare class PassportReader extends NSObject {

	static alloc(): PassportReader; // inherited from NSObject

	static new(): PassportReader; // inherited from NSObject

	cancelScan(): void;

	readPassportWithMrzKeyDataGroupsToReadCertificateDataLocalizationsSilentlyFailCallback(mrzKey: string, dataGroupsToRead: NSArray<number> | number[], certificateData: NSData, localizations: NSDictionary<string, string>, silentlyFail: boolean, callback: NVPassportReaderCallback): void;
}
