import '../css/Logo.css'
import logoRB from '../img/Logo-RB.png'

function Logo() {
  return (
    <div className='logo'>
      <img 
        className='logoRB'
        src={logoRB}
        alt='Logo Ramón'
      />

    </div>
  )
}

export default Logo;