import {
    check as checkPermission,
    request as permissionRequest,
} from '@nativescript-community/perms';

/**
 * Check whether user has necessary permission
 *
 * @param {string} permission permission type
 * @returns {Promise} Resolved to true if user has permission
 */
export const hasPermission = async(permission) => {
    try {
        const [status] = await checkPermission(permission, {
            type: 'always',
        });

        return status === 'authorized';
    } catch (error) {
        console.log('PERMISSION CHECK', error);

        return false;
    }
};

/**
 * Request particular permission
 *
 * @param {string} permission permission type
 * @returns {Promise} If the current status is undetermined, shows the permission dialog and returns a promise with the resulting status.
 * Otherwise, immediately return a promise with the current status. See iOS Notes for special cases
 */
export const requestPermission = async(permission) => {
    let response = [];

    try {
        response = await permissionRequest(permission, {
            type: 'always',
        });
    } catch (error) {
        console.log('PERMISSION REQUEST', error);
    }

    if (!response) {
        return false;
    }

    let status = '';

    if (typeof response[0] === 'undefined') {
        status = Object.values(response).includes('authorized') ? 'authorized' : '';
    } else {
        status = response[0];
    }

    return status === 'authorized';
};