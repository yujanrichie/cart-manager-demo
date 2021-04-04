import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="app-header container">
                <div className="row">
                    <div className="col-8 brand-container">
                        <a href="/">
                            <img className="header-logo"
                                src="https://thumbs.dreamstime.com/b/crown-gold-black-background-icon-vector-crown-gold-black-background-icon-vector-unique-fashion-color-company-brand-175288845.jpg"
                                alt=""
                            />
                            <span className="header-title">MY SHOP</span>
                        </a>
                    </div>
                    <div className="col-4 icon-container">
                        <div className="header-icon">
                            <FontAwesomeIcon 
                                icon={ faHeart }
                            />
                        </div>
                        <div className="header-icon">
                            <FontAwesomeIcon 
                                icon={ faShoppingCart }
                            />
                            <span className="cart-item-count">5</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;