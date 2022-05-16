// import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm';
import PreviousPoems from './PreviousPoems';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 id='title'> - Poetrai - </h1>
        <h5 id='sub-title'> Where Poetry Meets Artificial Intelligence</h5>
      </header>
      <InputForm />
      <PreviousPoems />
    </div>
  );
};

export default App;
