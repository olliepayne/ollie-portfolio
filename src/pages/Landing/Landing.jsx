import CSS from './Landing.module.css'

const Landing = () => {
  return (
    <div className={CSS.page}>
      <div className={CSS.contactContainer}>
        <div className={CSS.contactContent}>
          <h2>Contact</h2>
          <div className={CSS.entry}>
            <h3><a href="https://drive.google.com/file/d/1uSDsQKhabLxyfzNS0PbDZ73iYiVFEm1E/view?usp=sharing" target="blank">Resume</a></h3>
          </div>
          <div className={CSS.entry}>
            <h3>Email</h3>
            <p>olliepayne@me.com</p>
          </div>
          <div className={CSS.entry}>
            <h3><a href="https://www.linkedin.com/in/oliverpaynedev/" target="blank">LinkedIn</a></h3>
          </div>
          <div className={CSS.entry}>
            <h3><a href="https://github.com/olliepayne" target="blank">GitHub</a></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing