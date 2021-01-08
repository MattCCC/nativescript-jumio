import { Observable } from "@nativescript/core/data/observable";
import { Jumio } from 'nativescript-jumio';

export class HomeViewModel extends Observable {
    constructor() {
        super();

        try {
            new Jumio({
                merchantApiToken: 'YOUR_API_TOKEN',
                merchantApiSecret: 'YOUR_API_SECRET',
                customerId: 'matt-test',
                cancelWithError: (_error: NetverifyError) => console.log('cancelWithError triggered'),
                finishInitWithError: (_error: NetverifyError) => console.log('Error callback triggered'),
                finishedScan: (documentData: NetverifyDocumentDataExtended, _scanReference: string) => console.log('finishedScan triggered', documentData),
            });
        } catch (err) {
            console.log("EXCEPTION", err)
        }
    }
}
