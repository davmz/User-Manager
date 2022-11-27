import { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  /**
   * Handles the user object from child component.
   * 
   * @param {User Data Object} user 
   */
  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { name: name, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <div>
          <AddUser onSaveUserData={addUserHandler} />

          {users.length > 0 && <UserList users={users} />}
      </div>
    </>
  );
}

export default App;
