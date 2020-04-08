import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receivedApiData } from "../actions";
import fetchApi from "./fetchApi";

function* fetchData(action) {
    try {
        const response = yield call(fetchApi, action.payload);

        yield put(receivedApiData(response));
    } catch (e) {
        console.log(e);
    }
}

export default function* rootSaga() {
    yield takeLatest(REQUEST_API_DATA, fetchData);
}
