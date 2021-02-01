import './Navbar.css'

const Navbar = () => {
 return (
  <nav>
   <h1><a href="/">Oliver Payne</a></h1>
   <ul className="nav-links">
    <li><a href="/portfolio">Portfolio</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
   </ul>
  </nav>
 )
}

export default Navbar