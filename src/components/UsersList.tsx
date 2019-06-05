import React, { FC, useEffect } from 'react';
import { UserObject } from '../reducers/users';

interface UsersListProps {
  users: UserObject[]
}

const UsersList: FC<UsersListProps> = props => {
  useEffect(() => {
    console.log(props.users);
  }, [props]);

  return <div>a</div>;
};

export default UsersList;
