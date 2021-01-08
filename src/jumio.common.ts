import { ContentView } from '@nativescript/core/ui/content-view';

export class Common extends ContentView {
  public merchantApiToken: string;
  public merchantApiSecret: string;
  public datacentre: string;

  constructor(merchantApiToken: string, merchantApiSecret: string, datacentre: string) {
    super();

    this.merchantApiToken = merchantApiToken;
    this.merchantApiSecret = merchantApiSecret;
    this.datacentre = datacentre;
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