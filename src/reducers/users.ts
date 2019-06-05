import { Reducer } from 'redux';
import { Types } from '../actions/users';
import { UsersAction } from '../actions/users';

export interface UserObject {
  // id: number;
  firstName: string;
  lastName: string;
}

const INITIAL_STATE = {
  items: [],
  error: '',
};

export interface UserState {
  items: UserObject[];
  error: string;
}

// ここでcreateUserとかdeleteUserに対する処理がないのは，
// setするのは処理されたサーバ側のusersだけなので，storeのstateを変更する必要はない
const usersReducer: Reducer<UserState, UsersAction> = (
  state: UserState = INITIAL_STATE,
  action: UsersAction,
): UserState => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };

    case Types.USERS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default usersReducer;
