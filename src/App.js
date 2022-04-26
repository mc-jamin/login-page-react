import './App.css';
import LoginForm from './LoginForm';

const App = () => {
  document.title="Ezana Pay: Login Page";
  return (
    <div className="App">
      <p id ="header-title">
        <h1>
          Ezana Pay
        </h1>
        <h6>
          Your ultimate payment solution.
        </h6>
      </p>
      <header className="App-header">
        <nav className ="nav-bar">
          <ul className="nav-list">
            <li>Home</li>
            <li>Staff</li>
            <li>Services</li>
            <li id="about-us">About us</li>
          </ul>
        </nav>        
      </header>
      <body>
        <h4>
          Login Here
        </h4>
          <LoginForm />
      </body>
    </div>
  );
}
export default App;
