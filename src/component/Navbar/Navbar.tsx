import React, { Component } from 'react';
import { MenuItems } from './MenulItems';
import { Button } from '../Button';
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react" /></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <Link to={item.title === 'Home'? '/' : item.title}>
                                        {item.title}
                                    </Link>
                                </a>
                            </li>
                        )
                    })} 
                </ul>
                <Link to='SignUp'>
                    <Button>Sign Up</Button>
                </Link>
            </nav>
        )
    }
}

export default Navbar