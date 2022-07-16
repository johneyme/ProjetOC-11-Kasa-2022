import '../style/Header.css'
import logofooter from '../assets/LOGO.svg'


function Header() {
  return (

      <header className="header">
       <img src={ logofooter } alt='logo-kasa' className='logo-header'/>
       <ul>
       <li className='lien-nav'>Accueil</li>
       <li className='lien-nav'>A Propos</li>
       </ul>
      </header>
    
  );
}

export default Header;