import './header.css'
import logo from '../logo.svg'

function Header(){
    return (
        <header>
        <div className='logo'>
          <img src={logo}/>
        </div>
      </header>
    )
}
export default Header