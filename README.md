# NativeScript Jumio

[nativescript-jumio](https://github.com/mattCCC/nativescript-jumio)

Jumio Mobile SDK plugin for NativeScript.

This plugin is compatible only with NativeScript 7.1+. Please file an issue or make a PR if you spot any problems or you have any further requests regarding the functionality.

Currently only ID verification is implemented. Please check [Usage](#usage) or demo/ directory for more details.

## Prerequisites / Requirements

Nativescript 7.1+ is required for the plugin to run properly.

## Installation

```javascript
tns plugin add nativescript-jumio

or

npm install nativescript-jumio
```

## Usage

[nativescript-jumio](https://www.npmjs.com/package/nativescript-jumio)

```javascript
import { Jumio } from 'nativescript-jumio';

try {
    new Jumio({
        merchantApiToken: 'YOUR_API_TOKEN',
        merchantApiSecret: 'YOUR_API_SECRET',
        customerId: 'customerId',
        cancelWithError: (_error: NetverifyError) => {
            // User cancelled after error
        },
        finishInitWithError: (_error: NetverifyError) => {
            // Finished initialization with an error
        },
        finishedScan: (documentData: NetverifyDocumentDataExtended, _scanReference: string) => {
            // Scan is successful
        }
    });
} catch (err) {
    console.log("EXCEPTION", err)
}

```
## TODO
* Plugin works on iOS only currently.
* Integration with Android is required. Native Android objects are exposed, and can be used however they still need to be exposed for easier integration.

## API

| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| merchantApiToken | string | yes |  | API token |
| merchantApiSecret | string | yes |  | API secret |
| customerId | string |  |  | Customer ID |
| cancelWithError | funct |  |  | Callback triggered when User cancels. It accepts error object with code and message. |
| finishInitWithError | funct |  |  | Callback triggered when initialization fails. It accepts error object with code and message. |
| finishedScan | funct |  |  | Callback triggered when scan is finished. It contains an extended Document Data with all necessary information about processing results. |

## License

Apache License Version 2.0, January 2004
