import { UserObject } from '../reducers/users';

export enum Types {
  GET_USERS_REQUEST = 'users/get_users_request',
  GET_USERS_SUCCESS = 'users/get_users_sucess',
  CREATE_USER_REQUEST = 'users/create_user_request',
  DELETE_USER_REQUEST = 'users/delete_user_request',
  USERS_ERROR = 'users/error',
}

export interface GetUserProps {
  items: UserObject[];
}

export interface CreateUserProps {
  firstName: string;
  lastName: string;
}

export interface DeleteUserProps {
  userId: number;
}

export interface ErrorProps {
  error: string;
}

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

// TODO:any
export const getUsersSuccess = (items: any) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { items },
});

export const createUserRequest = ({
  firstName,
  lastName,
}: CreateUserProps) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: { firstName, lastName },
});

export const deleteUserRequest = (userId: DeleteUserProps) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: {
    userId,
  },
});

export const usersError = ({ error }: ErrorProps) => ({
  type: Types.USERS_ERROR,
  payload: {
    error,
  },
});

// export type UsersAction =
//   | ReturnType<typeof getUsersRequest>
//   | ReturnType<typeof getUsersSuccess>
//   | ReturnType<typeof createUserRequest>
//   | ReturnType<typeof deleteUserRequest>
//   | ReturnType<typeof usersError>;

export interface UsersAction {
  type: Types;
  items?: UserObject[];
  userId?: number;
  firstName?: string;
  lastName?: string;
  payload?: any;
}
