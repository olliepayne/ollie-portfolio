import { Link } from 'react-router-dom'
import CSS from './Portfolio.module.css'

const Entry = (props) => {
 const { name, description, link } = props

 return (
  <div>
   <h3><Link to={link}>{name}</Link></h3>
   <p>{description}</p>
  </div>
 )
}

const Portfolio = () => {
 return (
  <div>
   <Entry name={"Connect 4"} description={"Blah Blah Blah"} link={""} />
  </div>
 )
}

export default Portfolio