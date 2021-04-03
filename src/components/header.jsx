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
                    <div className="col-8">

                    </div>
                    <div className="col-4 icon-container">
                        <FontAwesomeIcon icon={ faHeart } />
                        <FontAwesomeIcon icon={ faShoppingCart } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;