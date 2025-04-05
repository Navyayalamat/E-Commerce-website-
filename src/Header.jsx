import logo from './assets/logo.png'
import './Header.css'


const Header = () => {
     var headerItems = [{name: "App", route: '/app'}, {name: "Products", route: '/products'} , {name: "Add Product" , route: '/add'}]
        return(
            <header className="header">
                <img src={logo} className="mini-logo" alt="logo" />
                <ul className='menu'>
                    {headerItems.map((object, i) => 
                       <li key={i}><a href={object.route}>{object.name}</a></li>
                    )}
                </ul>
            </header>
        )
}


export default Header