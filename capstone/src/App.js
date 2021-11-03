
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
    <div className="App">
      <h1>SOS</h1>
     <p>Help! I need somebody! Help! Not just anybody!</p>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
