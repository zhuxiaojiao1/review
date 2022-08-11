/**
 * @file
 * @date 2021-07-07
 * @author Chaman
 * @lastModify  2021-07-07
 */
import * as types from './types';
const initialState: types.InitialStateType = {
    defaultFolder: [
        {
            folderName: 'All',
            projectCount: '14',
        },
        {
            folderName: 'Starred',
            projectCount: '1',
        },
        { folderName: 'Published', projectCount: '12' },
        {
            folderName: 'Archived',
            projectCount: '1',
        },
    ],
    organizationId: '',
};
export default (
    state = initialState,
    action: types.HomePageModuleActionTypes,
): types.InitialStateType => {
    switch (action.type) {
        case types.ACTION_TYPE.RECORD_FOLDER_AND_PROJECT: {
            return {
                ...state,
                defaultFolder: action.payload,
            };
        }
        case types.ACTION_TYPE.RECORD_ORGANIZATION_DRI: {
            return {
                ...state,
                organizationId: action.payload.organizationDri,
            };
        }
        default:
            return state;
    }
};
