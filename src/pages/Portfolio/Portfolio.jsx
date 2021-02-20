import { useState } from 'react'
import CSS from './Portfolio.module.css'

const Entry = (props) => {
 const { name, description, links } = props

 return (
  <div className={CSS.entryContainer}>
   <div className={CSS.entryContent}>
    <h4>{name}</h4>
    <p>{description}</p>
    <ul className={CSS.entryLinks}>
     {links.map((link, index) => (
      <li key={link.url}><a href={link.url}>{link.title}</a></li>
     ))}
    </ul>
   </div>
  </div>
 )
}

const Section = (props) => {
 const { name, entries } = props
 console.log(entries)

 const [isOpen, setIsOpen] = useState(false)

 const handleOpen = () => {
  setIsOpen(!isOpen)
 }

 return (
  <div>
   <h3 className={CSS.sectionName} onClick={handleOpen}>{name}</h3>
   {isOpen &&
    <>
     {entries.map((entry) => (
      <Entry key={entry.name} name={entry.name} description={entry.description} links={entry.links} />
     ))}
    </>
   }
  </div>
 )
}

const Portfolio = () => {
 return (
  <div className={CSS.page}>
   <Section
    name={'Favorites'}
    entries={
     [
      { name: 'Rosetta Send', description: 'Rock Climbing Route database. MERN stack, custom JWT auth.', links: [{ title: 'Deployment', url: 'https://blooming-retreat-36750.herokuapp.com/' }, { title: 'GitHub', url: 'https://github.com/olliepayne/rosetta-send-v2' }] }
     ]
    }
   />
   <Section
    name={'General Assembly SEI Projects'}
    entries={
     [
      { name: 'Connect 4', description: 'Recreated the classic Connect 4. HTML, CSS, and JavaScript.', links: [{ title: 'Deployment', url: 'https://opconnect4.surge.sh/' }, { title: 'GitHub', url: 'https://github.com/olliepayne/connect-four' }] },
      { name: 'Mesocycle Tracker', description: 'Athletic periodization tracking. MEN stack, Google OAuth.', links: [{ title: 'Deployment', url: 'https://quiet-thicket-74088.herokuapp.com/' }, { title: 'GitHub', url: 'https://github.com/olliepayne/unit-2-project/blob/main/README.md' }] },
      { name: 'Rosetta Send', description: 'Rock Climbing Route database. MERN stack, custom JWT auth.', links: [{ title: 'Deployment', url: 'https://blooming-retreat-36750.herokuapp.com/' }, { title: 'GitHub', url: 'https://github.com/olliepayne/rosetta-send-v2' }] }
     ]
    }
   />
  </div>
 )
}

export default Portfolio