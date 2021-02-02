import './Landing.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import ActivityFeed from '../../components/ActivityFeed/ActivityFeed'

const Landing = () => {
 return (
  <div className="landing-page">
   <div className="me-container">
    <h2>me:</h2>
    <Slideshow />
   </div>
   <ActivityFeed />
  </div>
 )
}

export default Landing