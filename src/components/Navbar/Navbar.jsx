import { Link } from 'react-router-dom'
import CSS from './Navbar.module.css'

const Navbar = () => {
 return (
  <nav className={CSS.nav}>
   <h1><Link to="/">Ollie Payne</Link></h1>
   <ul className={CSS.navLinks}>
    <li><Link to="/portfolio">Portfolio</Link></li>
    <li><Link to="/contact">Contact</Link></li>
   </ul>
  </nav>
 )
}

export default Navbar