import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  return <div>
    <h2>User Managment</h2>
    <ul>
        <li>
            <Link to='/users/1'>View User 1 (Alice)</Link>
        </li>
        <li>
            <Link to='/users/2'>View User 2 (Bob)</Link>
        </li>
        <li>
            <Link to='/users/3'>View User 3 (Charlie)</Link>
        </li>
    </ul>
  </div>
};

export default Users;