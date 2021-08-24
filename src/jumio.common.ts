import { ContentView } from '@nativescript/core/ui/content-view';

type DocumentType = 'identity_card' | 'driver_license' | 'passport' | 'visa';

type Datacenter = 'EU' | 'US' | 'SG';

interface PreSelectedData {
  country: string;
  documentType: DocumentType;
}
export interface OnResultCallbacks<Error, DocumentData> {
  cancelWithError: (error: Error, scanReference: string | null) => void;
  finishedScan: (documentData: Partial<DocumentData> & { genderStr: string }, scanReference: string | null) => void;
}

export interface InitArgs<Error, DocumentData> extends OnResultCallbacks<Error, DocumentData> {
  customerId: string;
  preSelectedData: PreSelectedData;
  finishInitWithError: (error: Error) => void;
}

export class Common extends ContentView {
  protected merchantApiToken: string;
  protected merchantApiSecret: string;
  protected datacenter: Datacenter;

  constructor(merchantApiToken: string, merchantApiSecret: string, datacenter: Datacenter) {
    super();

    this.merchantApiToken = merchantApiToken;
    this.merchantApiSecret = merchantApiSecret;
    this.datacenter = datacenter;
  }
}

export class Utils {
  public static error(...args: any[]) {
    console.log('ERROR', '[nativescript-jumio]', ...args);
  }

  public static log(...args: any[]): void {
    console.log('[nativescript-jumio]', ...args);
  }
}