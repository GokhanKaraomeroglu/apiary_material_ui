
import './App.css';
import NavBar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Apiary from './pages/Apiary';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ApiaryForm from './pages/ApiaryForm';



function App() { 
  return (
    <Router basename= '/ApiaryBee'>
    <div className="App">

    </div>
    <Switch>
    <Route exact path = '/' component = {Home} />
    <Route path = '/about' component = {About} />
    <Route path = '/apiary' component = {Apiary} />
    <Route path = '/services' component = {Services} />
    <Route path = '/contact' component = {Contact} />
    <Route path = '/apiaryform' component = {ApiaryForm} />
    
    </Switch>
    </Router>
  );
}

export default App;