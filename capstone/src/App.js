
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Home />
        </Route>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/user">
        <UserDashboard />
        </Route>
    <div className="App">
     
    </div>
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
