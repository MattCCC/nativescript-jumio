import { Observable } from "@nativescript/core/data/observable";
import { Jumio } from 'nativescript-jumio';

export class HomeViewModel extends Observable {
    constructor() {
        super();

        try {
            const jumio = new Jumio({
                merchantApiToken: 'MERCHANT_API_TOKEN',
                merchantApiSecret: 'MERCHANT_API_SECRET',
                datacenter: 'eu',
            });

            jumio.init({
                preSelectedData: {
                    country: 'MT',
                    documentType: 'identitycard',
                },
                cancelWithError: (error) => console.log('cancelWithError triggered', error),
                finishInitWithError: (error) => console.log('Error callback triggered', error),
                finishedScan: (documentData, scanReference) => console.log('finishedScan triggered', documentData),
            });
        } catch (err) {
            console.log("EXCEPTION", err)
        }
    }
}
