import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <div className="app-header container">
                <div className="row">
                    <div className="col-8 homepage-link">
                        <a href="/">My Cart Manager</a>
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