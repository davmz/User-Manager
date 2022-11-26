import './App.css';

import AddUser from './components/AddUser/AddUser';

import logo from './logo.svg';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>Test</p>

          {/* Form */}
          <AddUser />

          {/* List */}
        </header>
      </div>
    </>
  );
}

export default App;
