const imageURLS = [
 'https://i.imgur.com/AhxonCB.jpg'
]

const Slide = (props) => {
 return (
  <img src={props.url}></img>
 )
}

const Slideshow = () => {
 return (
  <div>
   {imageURLS.map((url, index) => (
    <Slide key={index} url={url} />
   ))}
  </div>
 )
}

export default Slideshow