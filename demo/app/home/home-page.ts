/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "@nativescript/core";

import { HomeViewModel } from "./home-view-model";

import { hasPermission, requestPermission } from '../utils/permissions';

export async function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    const hasPermissions = await hasPermission('camera');
    if (!hasPermissions) {
        await requestPermission('camera')
    }

    page.bindingContext = new HomeViewModel();
}
