import { useState } from 'react';

import './App.css';
import logo from './logo.svg';

import AddUser from './components/AddUser/AddUser';

function App() {
  const [users, setUsers] = useState([]);

  /**
   * Handles the user object from child component.
   * 
   * @param {User Data Object} user 
   */
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* Form */}
          <AddUser
            onSaveUserData={addUserHandler}
          />

          {/* List */}
        </header>
      </div>
    </>
  );
}

export default App;
