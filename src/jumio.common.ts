import { ContentView } from '@nativescript/core/ui/content-view';

interface PreSelectedData {
  country: string;
  documentType: string;
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
  protected datacenter: string;

  constructor(merchantApiToken: string, merchantApiSecret: string, datacenter: string) {
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