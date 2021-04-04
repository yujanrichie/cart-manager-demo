import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

class Header extends Component {

    render() {
        const { quantity } = this.props;

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
                        <a href="/mycart"
                            className="header-icon">
                            <FontAwesomeIcon 
                                icon={ faShoppingCart }
                            />
                            <span className="cart-item-count">{ quantity }</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    quantity: PropTypes.number
};
  
Header.defaultProps = {
    quantity: 0
};

export default Header;