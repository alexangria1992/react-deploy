import logo from './logo.svg';
import profileImage from './img/1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App </h1>
      <h2>Author: Alex Angrignon</h2>
      <img src={profileImage} alt="profile-image"/>
      <h3>Hello!!</h3>
    </div>
  );
}

export default App;
