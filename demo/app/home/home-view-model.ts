import { Observable } from "@nativescript/core/data/observable";
import { Jumio } from 'nativescript-jumio';
import { hasPermission, requestPermission } from '../utils/permissions';

export class HomeViewModel extends Observable {
    constructor() {
        super();

        try {
            this.waitForPermissions();

            const jumio = new Jumio({
                merchantApiToken: 'MERCHANT API SECRET',
                merchantApiSecret: 'MERCHANT API SECRET',
                datacenter: 'eu',
            });

            jumio.init({
                preSelectedData: {
                    country: 'MT',
                    documentType: 'passport',
                },
                cancelWithError: (error) => console.log('cancelWithError triggered', error),
                finishInitWithError: (error) => console.log('Error callback triggered', error),
                finishedScan: (documentData, scanReference) => console.log('finishedScan triggered', documentData),
            });
        } catch (err) {
            console.log("EXCEPTION", err)
        }
    }

    async waitForPermissions(): Promise<void> {
        const hasPermissions = hasPermission('camera');
        if (!hasPermissions) {
            await requestPermission('camera');
        }
    }
}
