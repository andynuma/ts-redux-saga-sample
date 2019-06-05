import UsersList from "../components/UsersList";

import { connect } from "react-redux"
import { UserObject } from "../reducers/users";
import { Dispatch } from "redux";

import { createUserRequest, deleteUserRequest } from '../actions/users';

interface StateProps {
  items: UserObject[];
}

const mapStateToProps = (state: StateProps) => ({
  users: state.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createUserRequest: (firstName: string, lastName: string) =>
    dispatch(createUserRequest({ firstName, lastName })),
  deleteUserRequest: (userId: any) => dispatch(deleteUserRequest(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);
