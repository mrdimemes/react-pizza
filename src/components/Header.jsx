import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from './';

import cartSvg from '../assets/images/cart.svg';
import logoSvg from '../assets/images/logo.svg';



function Header() {
    return (
        <header className="header App__header">
            <Link to="/">
                <div className="header__logo">
                    <div className="header__logo-image-container">
                        <img className="image" src={logoSvg} alt="pizza"></img>
                    </div>
                    <div className="header__logo-text">
                        <h1 className="header__logo-label">REACT PIZZA</h1>
                        <p className="header__logo-description">most delicious pizza in the universe</p>
                    </div>
                </div>
            </Link>

            <Link to="/cart">
                <Button className = "header__cart-button button" shape="rounded" theme="main-colored"> 
                    <div className="header__cart-button-cost">7.33 $</div>
                    <div className="header__cart-button-separator button-separator button-separator_theme_light" />
                    <div className="header__cart-button-icon-container">
                        <img className="image" src={cartSvg} alt="cart"></img>
                    </div>
                        <div className="header__cart-button-inputs-counter">3</div>
                </Button>
            </Link>

        </header>
    )
}

export default Header;