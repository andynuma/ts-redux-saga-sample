import axios from 'axios';

interface CreateUserProps {
  firstName: string;
  lastName: string;
}

export const getUsers = () => {
  console.log('Getting...');

  return axios.get('/users', {
    params: {
      limit: 1000,
    },
  });
};

export const createUser = ({ firstName, lastName }: CreateUserProps) => {
  console.log('Creating...');

  return axios.post('/users', {
    firstName,
    lastName,
  });
};

export const deleteUser = (userId: number) => {
  console.log('Deleting...');

  return axios.delete(`/users/${userId}`);
};
