import React, { useState } from 'react';
import { MenuItems } from './MenulItems';
import { Link } from 'react-router-dom';
import '../bootstrap.min.css'

function Navbar() {
    const [search, setSearch] = useState('');

    async function productsSearch(e: any){
        e.preventDefault();
        console.log(search)
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={item.liName}>
                                <Link to={item.url} className='link-router'>
                                    <a className={item.cName} href={item.url} >
                                        {item.title === 'Carrinho'? `${item.title} 0` : item.title}
                                    </a>
                                </Link>
                            </li>
                        )
                    })} 
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={productsSearch}>
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={(e: any) => setSearch(e.target.value)}/>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
    
}

export default Navbar