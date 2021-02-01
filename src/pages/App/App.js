import './App.css';
import Landing from '../Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'
import { Route } from 'react-router-dom'

function App() {
 return (
  <div className="App">
   <Route exact path="/">
    <Landing />
   </Route>
   <Navbar />
  </div>
 );
}

export default App;
