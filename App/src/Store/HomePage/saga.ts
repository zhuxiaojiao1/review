/**
 * @file
 * @date 2021-07-07
 * @author Chaman
 * @lastModify  2021-07-07
 */

/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { fork, takeLatest, call, put, select } from "redux-saga/effects";
import * as types from "./types";
import * as homePageActions from "./action";
import { RootState } from "../rootReducer";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
//get folder count
function* handleGetFolderAndProjectCount() {}
//get folder
function* watchAction() {
  yield takeLatest(
    types.ACTION_TYPE.GET_FOLDER_AND_PROJECT_SAGA,
    handleGetFolderAndProjectCount
  );
}
const sagas = [fork(watchAction)];
export default sagas;
