import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './CartItem.scss';

class CartItem extends Component {
    state = {
        quantity: 1
    };

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { cartItem } = nextProps;

        console.log('prevState', prevState);
        console.log('cartItem', cartItem);
        if ((cartItem != null) && 
            (prevState.quantity !== cartItem.quantity)) {
          return { quantity: nextProps.cartItem.quantity };
        }
    
        return null;
    }

    handleInputChange(e) {
        if ((e != null) && (e.target != null)) {
            const { value } = e.target;
            
            this.updateQuantity(value);
        }
    }

    handleInputBlur() {
        this.validateQuantity();
    }

    handleDeleteButtonClick() {
        const { onCartItemDelete, cartItem } = this.props;

        if (onCartItemDelete != null) {
            onCartItemDelete(cartItem);
        }
    }

    updateQuantity(newQuantity) {
        const { onCartItemUpdate, cartItem } = this.props;

        if ((onCartItemUpdate) && (cartItem != null)) {
            onCartItemUpdate(cartItem.id, newQuantity);
        }
        
        this.setState({ quantity: newQuantity });
    }

    validateQuantity() {
        const { quantity } = this.state;
        const { minQuantity, maxQuantity } = this.props;

        if ((isNaN(quantity)) || (quantity === '') || (quantity < minQuantity)) {
            this.updateQuantity(minQuantity);
        } else if (quantity > maxQuantity) {
            this.updateQuantity(maxQuantity);
        } else {
            this.updateQuantity(quantity);
        }
    }
    
    render() {
        const { quantity } = this.state;
        const { className, minQuantity, maxQuantity, cartItem } = this.props;
        const { title, imageURL, price, totalPrice } = cartItem;

        return (
            <div className={ className }>
                <div className="cart-item-details">
                    <div className="item-image">
                        <img 
                            src={ imageURL }
                            alt=""
                        />
                    </div>
                    <div className="item-details container-fluid">
                            <div className="row no-gutters">
                                <span className="item-title">{ title }</span>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-12 col-sm-6">
                                    <div className="item-quantity-price">
                                        <input className="quantity-input"
                                            type="number"
                                            value={ quantity }
                                            maxLength={2}
                                            min={ minQuantity }
                                            max={ maxQuantity }
                                            onChange={ (e) => this.handleInputChange(e) }
                                            onBlur={ this.handleInputBlur }
                                        />
                                        <span className="item-multiplier">X</span>
                                        <span className="item-price">{ price }</span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <span className="item-total-price">Price: { totalPrice }</span>
                                </div>
                            </div>
                            <div className="row no-gutters cart-action">
                                <div className="delete-icon"
                                    onClick={ this.handleDeleteButtonClick }
                                >
                                    <FontAwesomeIcon 
                                        icon={ faTrash }
                                    />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

CartItem.propTypes = {
    cartItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        totalPrice: PropTypes.string.isRequired
    }).isRequired,
    onCartItemUpdate: PropTypes.func,
    onCartItemDelete: PropTypes.func,
    className: PropTypes.string,
    minQuantity: PropTypes.number,
    maxQuantity: PropTypes.number
};
  
CartItem.defaultProps = {
    className:'cart-item',
    minQuantity: 1,
    maxQuantity: 10
};
  

export default CartItem;