import { Common } from '../jumio.common';

interface ConstructorArgs {
    merchantApiToken: string;
    merchantApiSecret: string;
    datacenter: string;
    allowRootedDevices: boolean;
}
export declare class Jumio extends Common {
    constructor({ merchantApiToken, merchantApiSecret, datacenter, allowRootedDevices }: ConstructorArgs);
    init({ customerId, preSelectedData = null, cancelWithError = null, finishInitWithError = null, finishedScan = null }): void;
}
