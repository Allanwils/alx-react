import logo from './holberton-logo.jpg';
//import favicon from './favicon.ico';
import './App.css';

function App() {
  return (
    <>
      <div className='App-header'>
        {/*<img src={favicon} alt='favicon' className='App-favicon' /> */}
        <img src={logo} alt='logo' className='App-logo' /> 
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full</p>
      </div>
      <div className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
  );
}

export default App;
