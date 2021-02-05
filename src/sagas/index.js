import {
  put, takeLatest, all, select,
} from 'redux-saga/effects';

const getQuery = (state) => state.query;
const getNextPageToken = (state) => state.nextToken;
const getPrevPageToken = (state) => state.prevToken;

function* fetchVideos() {
  const query = yield select(getQuery);
  const URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCD6C_5sxN5UCvQAIPKBhKqjJZ6REL1WS8&type=video&part=snippet&maxResults=4&q=';
  const data = yield fetch(URL + query)
    .then((response) => response.json());
  yield put({
    type: 'VIDEOS_RECEIVED',
    data: data.items,
    next: data.nextPageToken,
    prev: data.prevPageToken,
  });
}

function* fetchNextVideos() {
  const query = yield select(getQuery);
  const token = yield select(getNextPageToken);
  const tokenWithQuery = `&q=${query}&pageToken=${token}`;
  const URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCD6C_5sxN5UCvQAIPKBhKqjJZ6REL1WS8&type=video&part=snippet&maxResults=4';
  const data = yield fetch(URL + tokenWithQuery)
    .then((response) => response.json());
  yield put({
    type: 'VIDEOS_RECEIVED',
    data: data.items,
    next: data.nextPageToken,
    prev: data.prevPageToken,
  });
}

function* fetchPrevVideos() {
  const query = yield select(getQuery);
  const token = yield select(getPrevPageToken);
  const tokenWithQuery = `&q=${query}&pageToken=${token}`;
  const URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCD6C_5sxN5UCvQAIPKBhKqjJZ6REL1WS8&type=video&part=snippet&maxResults=4';
  const data = yield fetch(URL + tokenWithQuery)
    .then((response) => response.json());
  yield put({
    type: 'VIDEOS_RECEIVED',
    data: data.items,
    next: data.nextPageToken,
    prev: data.prevPageToken,
  });
}

function* actionWatcher() {
  yield takeLatest('GET_VIDEOS', fetchVideos);
}

function* actionWatcherNext() {
  yield takeLatest('GET_NEXT_VIDEOS', fetchNextVideos);
}

function* actionWatcherPrev() {
  yield takeLatest('GET_PREV_VIDEOS', fetchPrevVideos);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcherNext(),
    actionWatcherPrev(),
  ]);
}
