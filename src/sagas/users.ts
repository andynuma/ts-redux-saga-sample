import {
  take,
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers); // 外部の非同期関数を呼ぶ
    console.log(result.data.data);
    // reducerのactionをdispatch
    yield put(
      actions.getUsersSuccess({
        items: result.data.data,
      }),
    );
  } catch (e) {
    console.log(e);
    // yield put(
    //   actions.usersError({
    //     error: 'An error occured when trying to get the users',
    //   }),
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createUser(action: actions.UsersAction) {
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    });
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: 'An error occured when trying to create the user',
      }),
    );
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser(userId: any) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: 'An error occured when trying to delete the user',
      }),
    );
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, {
      userId: action.payload.userId,
    });
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
