import './App.css';

import AddUser from './components/AddUser/AddUser';

import logo from './logo.svg';

function App() {
  const addUserHandler = (user) => {
    console.log(user, "App.js");
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
