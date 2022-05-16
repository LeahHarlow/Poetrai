// import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> - Poetrai - </h1>
      </header>
      <InputForm />
      <body>
        <p>
          Responses Here:
        </p>
      </body>
    </div>
  );
}

export default App;
