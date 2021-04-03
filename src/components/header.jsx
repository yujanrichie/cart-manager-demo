import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <FontAwesomeIcon icon={ faHeart } />
                <FontAwesomeIcon icon={ faShoppingCart } />
            </React.Fragment>
        );
    }
}

export default Header;