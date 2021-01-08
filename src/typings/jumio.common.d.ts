import { ContentView } from 'tns-core-modules/ui/content-view';
export declare class Common extends ContentView {
    merchantApiToken: string;
    merchantApiSecret: string;
    datacentre: string;
    constructor(merchantApiToken: string, merchantApiSecret: string, datacentre: string);
}
export declare class Utils {
    static error(...args: any[]): void;
    static log(...args: any[]): void;
}
