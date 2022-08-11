/**
 * @file home page action
 * @date 2021-07-07
 * @author Chaman
 * @lastModify  2021-07-07
 */
import * as types from './types';
//get the different types of project
export const getDifferentProjectCount = (): types.HomePageModuleActionTypes => {
    return {
        type: types.ACTION_TYPE.GET_FOLDER_AND_PROJECT_SAGA,
    };
};

//record the different types of project
export const recordDifferentProjectCount = (
    payload: Array<{
        folderName: string;
        projectCount: string;
    }>,
): types.HomePageModuleActionTypes => {
    return {
        type: types.ACTION_TYPE.RECORD_FOLDER_AND_PROJECT,
        payload,
    };
};
//record organization dri
export const recordOrganizationDri = (payload: {
    organizationDri: string;
}): types.HomePageModuleActionTypes => {
    return {
        type: types.ACTION_TYPE.RECORD_ORGANIZATION_DRI,
        payload,
    };
};
