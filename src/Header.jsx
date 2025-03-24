import logo from './assets/logo.png'
import './Header.css'


const Header = () => {
     var headerItems = ['App', 'Products', 'Item3'];
        return(
            <header className="header">
                <img src={logo} className="mini-logo" alt="logo" />
                <ul className='menu'>
                    {headerItems.map((object, i) => 
                       <li key={i}>{object}</li>
                    )}
                </ul>
            </header>
        )
}


export default Header