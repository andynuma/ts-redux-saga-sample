import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from '../components/App';

import {
  getUsersRequest,
  getUsersSuccess,
  createUserRequest,
  deleteUserRequest,
} from '../actions/users';
import { UserObject } from '../reducers/users';

interface StateProps {
  items: UserObject[];
}

const mapStateToProps = (state: StateProps) => ({
  users: state.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUsersRequest: () => dispatch(getUsersRequest()),
  getUsersSuccess: (item: UserObject[]) => dispatch(getUsersSuccess(item)),
  createUserRequest: (firstName: string, lastName: string) =>
    dispatch(createUserRequest({ firstName, lastName })),
  deleteUserRequest: (userId: any) => dispatch(deleteUserRequest(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
