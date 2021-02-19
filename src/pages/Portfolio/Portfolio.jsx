import { Link } from 'react-router-dom'
import CSS from './Portfolio.module.css'

// add entry logic
// create personal favorites, and other subsections

const Entry = (props) => {
 const { name, description, links } = props

 return (
  <div className={CSS.entryContainer}>
   <h4>{name}</h4>
   <p>{description}</p>
   <ul className={CSS.entryLinks}>
    {links.map((link, index) => (
     <li><Link to={link.url}>{link.title}</Link></li>
    ))}
   </ul>
  </div>
 )
}

const Portfolio = () => {
 return (
  <div className={CSS.page}>
   <h3>General Assembly SEI Projects</h3>
   <Entry name={"Connect 4"} description={"Recreated the classic Connect 4. HTML, CSS, and JavaScript."} links={[]} />
   <Entry name={"Mesocycle Tracker"} description={"Athletic periodization tracking. MEN stack, Google OAuth."} links={[]} />
   <Entry name={"Rosetta Send"} description={"Rock Climbing Route database. MERN stack, custom JWT auth."} links={[{ title: 'GitHub', url: '' }]} />
  </div>
 )
}

export default Portfolio