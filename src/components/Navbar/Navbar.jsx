import { Link } from 'react-router-dom'
import CSS from './Navbar.module.css'

const Navbar = () => {
 return (
  <nav>
   <h1><Link to="/">Oliver Payne</Link></h1>
   <ul className={CSS.navLinks}>
    <li><Link to="/portfolio">Portfolio</Link></li>
   </ul>
  </nav>
 )
}

export default Navbar