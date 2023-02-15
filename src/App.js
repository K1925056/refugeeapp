
import react from 'react'
import './App.css'
import NavBar from './components/NavBar';
import ChooseLanguage from './UI/ChooseLanguage'
import HelpRequired from './UI/HelpRequired'
import Imergency from './UI/Imergency';
import Info from './UI/Info';
import Login from './UI/Login';
import Signup from './UI/Signup';
import { BrowserRouter as Router, Route, Link ,useLocation} from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
  
      </Router>
   
    </div>
  );
}

export default App;
