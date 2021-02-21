import CSS from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={CSS.footer}>
      <p>Made with React, Checkout the repo <a href="https://github.com/olliepayne/ollie-portfolio" target="blank">here</a></p>
    </footer>
  )
}

export default Footer