import { Observable } from "@nativescript/core/data/observable";
import { Jumio } from 'nativescript-jumio';

export class HomeViewModel extends Observable {
    constructor() {
        super();

        try {
            const jumio = new Jumio({
                merchantApiToken: "861178f1-04f9-4c93-9528-3e82550f42bd",
                merchantApiSecret: "xGvTjrwkHMPOnxffvfx2rJvueoTbJ93t",
                datacenter: 'eu',
            });

            jumio.init({
                preSelectedData: {
                    country: 'MT',
                    documentType: 'identity_card',
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
