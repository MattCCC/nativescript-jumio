import { Common } from '../jumio.common';

declare global {
    interface NetverifyDocumentDataExtended extends NetverifyDocumentData {
        genderStr: string;
        documentTypeStr: string;
    }

    type NetverifyScanFinishedCallback = (netverifyViewController: NetverifyViewController, documentData: NetverifyDocumentDataExtended, scanReference: string) => void;
}

export declare class Jumio extends Common {
    private cancelWithError;
    private finishInitWithError;
    private finishedScan;
    netverifyViewController: NetverifyViewController;
    private delegate;
    private config;
    constructor({ merchantApiToken, merchantApiSecret, datacentre, customerId, cancelWithError, finishInitWithError, finishedScan }: {
        merchantApiToken: any;
        merchantApiSecret: any;
        datacentre: any;
        customerId: any;
        cancelWithError: any;
        finishInitWithError: any;
        finishedScan: any;
    });
    start({ merchantApiToken, merchantApiSecret, customerId, cancelWithError, finishInitWithError, finishedScan }: {
        merchantApiToken: any;
        merchantApiSecret: any;
        customerId: any;
        cancelWithError: any;
        finishInitWithError: any;
        finishedScan: any;
    }): void;
    rootVC(): UIViewController;
}
