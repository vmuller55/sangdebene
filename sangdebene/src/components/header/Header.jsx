import './header.css'
import Logo from '../../assets/images/logo.svg'
function Header() {
    return(
        <div className="header">
            <img src={Logo} alt='logo'className='logo'></img>
        </div>
    )
}

export default Header