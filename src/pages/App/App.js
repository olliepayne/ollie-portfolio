import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Landing from '../Landing/Landing'
import Portfolio from '../Portfolio/Portfolio'

function App() {
 return (
  <div className="App">
   <Navbar />
   <Switch>
    <Route exact path="/">
     <Landing />
    </Route>
    <Route exact path="/portfolio">
     <Portfolio />
    </Route>
   </Switch>
   <Footer />
  </div>
 );
}

export default App;
