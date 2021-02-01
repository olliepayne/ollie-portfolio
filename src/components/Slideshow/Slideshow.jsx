import { useState } from 'react'
import './Slideshow.css'

const imageURLS = [
 'https://i.imgur.com/AhxonCB.jpg', 'https://i.imgur.com/mfE3ILq.jpg'
]

const Slide = (props) => {
 const { imageIndex } = props

 return (
  <div className="slide">
   <img src={imageURLS[imageIndex]}></img>
   <p>{imageIndex + 1}/{imageURLS.length}</p>
  </div>
 )
}

const Slideshow = () => {
 const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

 const previousSlide = () => {
  const nextIndex = currentSlideIndex - 1 < 0 ? imageURLS.length - 1 : currentSlideIndex - 1
  setCurrentSlideIndex(nextIndex)
 }

 const nextSlide = () => {
  const nextIndex = currentSlideIndex + 1 > imageURLS.length - 1 ? 0 : currentSlideIndex + 1
  setCurrentSlideIndex(nextIndex)
 }

 return (
  <div>
   <Slide imageIndex={currentSlideIndex} />
   <button onClick={previousSlide}>last</button>
   <button onClick={nextSlide}>next</button>
  </div>
 )
}

export default Slideshow