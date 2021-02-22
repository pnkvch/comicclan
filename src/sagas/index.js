import { call, put, takeLatest, all } from "redux-saga/effects";

import {
    REQUEST_API_DATA,
    REQUEST_BOOK_DATA,
    receivedApiData,
    receivedBookData
} from "../actions";
import { fetchData, fetchBookData } from "./fetchApi";

function* fetchApiData(action) {
    try {
        const response = yield call(fetchData, action.payload);

        yield put(receivedApiData(response));
    } catch (e) {
        console.log(e);
    }
}

function* fetchBookApiData(action) {
    try {
        const response = yield call(fetchBookData, action.payload);

        yield put(receivedBookData(response));
    } catch (e) {
        console.log(e);
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(REQUEST_API_DATA, fetchApiData),
        takeLatest(REQUEST_BOOK_DATA, fetchBookApiData)
    ]);
}
