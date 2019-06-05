import React, { FC, Component, useEffect } from 'react';
import './App.css';
import { UserObject } from '../reducers/users';
import UsersList from '../containers/UsersList';

export interface UserProps {
  users: UserObject[];
  getUsersRequest: () => void;
}

const App: FC<UserProps> = props => {
  useEffect(() => {
    console.log(props);
    props.getUsersRequest();
  }, []);

  return (
    <div>
      <UsersList />
      App
    </div>
  );
};

export default App;
