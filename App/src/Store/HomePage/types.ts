/**
 * @file home page types
 * @date 2021-07-07
 * @author Chaman
 * @lastModify  2021-07-07
 */
//initial state
export interface InitialStateType {
    defaultFolder: Array<{
        folderName: string;
        projectCount: string;
    }>;
    organizationId: string;
}
//initial state interface
interface AjaxResponseStateType {
    data: Record<string, unknown>;
    message: string;
    isLoading: boolean;
    status: boolean;
}
//action types
export enum ACTION_TYPE {
    RECORD_FOLDER_AND_PROJECT = 'RECORD_FOLDER_AND_PROJECT',
    GET_FOLDER_AND_PROJECT_SAGA = 'GET_FOLDER_AND_PROJECT_SAGA',
    RECORD_ORGANIZATION_DRI = 'RECORD_ORGANIZATION_DRI',
}
//action
interface RecordFolderCountAction {
    payload: Array<{
        folderName: string;
        projectCount: string;
    }>;
    type: ACTION_TYPE.RECORD_FOLDER_AND_PROJECT;
}
interface GetFolderCountAction {
    type: ACTION_TYPE.GET_FOLDER_AND_PROJECT_SAGA;
}
interface RecordOrganizationDriAction {
    payload: {
        organizationDri: string;
    };
    type: ACTION_TYPE.RECORD_ORGANIZATION_DRI;
}
//module types
export type HomePageModuleActionTypes =
    | RecordFolderCountAction
    | GetFolderCountAction
    | RecordOrganizationDriAction;
export type { GetFolderCountAction };
