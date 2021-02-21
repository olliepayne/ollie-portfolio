import CSS from './Landing.module.css'

const ImageCard = (props) => {
  const { url, caption } = props

  return (
    <div className={CSS.imageCard}>
      <div className={CSS.imageCardContent}>
        <img src={url} alt="" />
        <caption>{caption}</caption>
      </div>
    </div>
  )
}

const Landing = () => {
  return (
    <div className={CSS.page}>
      <div className={CSS.imagesContainer}>
        <ImageCard url={'https://i.imgur.com/uqJKahs.jpg'} caption={'goofin on a V9+ boulder >:)'} />
      </div>
      <h2>About Me</h2>
      <p>
        My name is Oliver, or Ollie, and I'm a Fullstack Developer and Competitive Sport Climber!
        <br />
        Through spending the last two years in the fitness industry, I learned how to achieve goals in the quickest, simplest, and most efficient manner.
        <br />
        My personal ethos is to be confident, yet humble and respectful of all who are around me. 
        <br />
        I’m constantly making an effort to grow mentally and physically, which both allow me to efficiently develop my technical skills.
      </p>
    </div>
  )
}

export default Landing