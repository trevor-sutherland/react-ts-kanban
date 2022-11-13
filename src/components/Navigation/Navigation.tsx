import React from 'react';
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className="container">
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className="container" role="navigation">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Features</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Pricing</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Kanban</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    )
}

export default Navigation;