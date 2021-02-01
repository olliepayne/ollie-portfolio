import { Route } from 'react-router-dom'
import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

function App() {
 return (
  <div className="App">
   <Navbar />
   <Route exact path="/">
    <Landing />
   </Route>
   <Route exact path="/about">
    <About />
   </Route>
   <Route exact path="/portfolio">
    <Portfolio />
   </Route>
   <Route exact path="/contact">
    <Contact />
   </Route>
  </div>
 );
}

export default App;
