import { useState } from 'react'
import CSS from './Portfolio.module.css'

const Entry = (props) => {
  const { name, description, links, thumbnailURL } = props

  return (
    <div className={CSS.entryContainer}>
      <div className={CSS.entryContent}>
        <h4>{name}</h4>
        <p>{description}</p>
        <ul className={CSS.entryLinks}>
          {links.map((link, index) => (
            <li key={link.url}><a href={link.url} target="blank">{link.title}</a></li>
          ))}
        </ul>
      </div>
      <a href={thumbnailURL} target="blank"><img className={CSS.entryThumbnail} src={thumbnailURL} /></a>
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
    <div className={CSS.sectionContainer}>
      <h3 className={isOpen ? CSS.openSectionName : CSS.sectionName} onClick={handleOpen}>{name}</h3>
      {isOpen &&
        <>
          {entries.map((entry) => (
            <Entry key={entry.name} name={entry.name} description={entry.description} links={entry.links} thumbnailURL={entry.thumbnailURL} />
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
        name={'*Favorites*'}
        entries={
          [
            {
              name: 'JS Cave Generator',
              description: '2D cave/level generation using Cellular Automaton.',
              links: [
                {
                  title: 'Deployment',
                  url: 'http://op-js-cave-generator.surge.sh/'
                },
                {
                  title: 'GitHub',
                  url: 'https://github.com/olliepayne/js-cave-generator'
                }
              ],
              thumbnailURL: 'https://i.imgur.com/ov2oq6Q.png'
            },
            {
              name: 'Rosetta Send',
              description: 'Rock Climbing Route database. MERN stack, custom JWT auth.',
              links: [
                {
                  title: 'Deployment',
                  url: 'https://blooming-retreat-36750.herokuapp.com/'
                },
                {
                  title: 'GitHub',
                  url: 'https://github.com/olliepayne/rosetta-send-v2'
                }
              ],
              thumbnailURL: 'https://i.imgur.com/hJNZWZp.png'
            }
          ]
        }
      />
      <Section
        name={'General Assembly SEI Projects'}
        entries={
          [
            {
              name: 'Connect 4',
              description: 'Recreated the classic Connect 4. HTML, CSS, and JavaScript.',
              links: [
                {
                  title: 'Deployment',
                  url: 'https://opconnect4.surge.sh/'
                },
                {
                  title: 'GitHub',
                  url: 'https://github.com/olliepayne/connect-four'
                }
              ],
              thumbnailURL: 'https://github.com/olliepayne/connect-four/raw/main/images/screenshot2.png'
            },
            {
              name: 'Mesocycle Tracker',
              description: 'Athletic periodization tracking. MEN stack, Google OAuth.',
              links: [
                { 
                  title: 'Deployment', 
                  url: 'https://quiet-thicket-74088.herokuapp.com/' 
                }, 
                { 
                  title: 'GitHub', 
                  url: 'https://github.com/olliepayne/unit-2-project/blob/main/README.md' 
                }
              ],
              thumbnailURL: 'https://camo.githubusercontent.com/4ad8e2e4e325bc841cace1ad2d5af1281a13bda3b16928eb5233c3ff8b44203d/68747470733a2f2f692e696d6775722e636f6d2f625542353958572e706e67'
            },
            { 
              name: 'Rosetta Send', 
              description: 'Rock Climbing Route database. MERN stack, custom JWT auth.', 
              links: [
                { 
                  title: 'Deployment', 
                  url: 'https://blooming-retreat-36750.herokuapp.com/' 
                }, 
                { 
                  title: 'GitHub', 
                  url: 'https://github.com/olliepayne/rosetta-send-v2' 
                }
              ],
              thumbnailURL: 'https://i.imgur.com/hJNZWZp.png'
            }
          ]
        }
      />
    </div>
  )
}

export default Portfolio