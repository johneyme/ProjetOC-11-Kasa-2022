import '../style/Footer.css'
import logo from '../assets/LOGO-bw.svg'

function Footer() {
    return (
  
        <footer className="footer">
         <img src={ logo } alt="logo-kasa-footer"/>
         <p>© 2020 Kasa. All rights reserved</p>
        </footer>
      
    );
  }
  
  export default Footer;