import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartItemList.scss';
import CartItem from '../CartItem';

class CartItemList extends Component {
    state = {
        cartItemList: []
    };

    constructor() {
        super();
        this.handleUpdateCartItemByID = this.handleUpdateCartItemByID.bind(this);
        this.handleRemoveCartItemByID = this.handleRemoveCartItemByID.bind(this);
    }

    handleUpdateCartItemByID(itemID, newQuantity) {
        const { onCartItemUpdateByID } = this.props;
        
        if (onCartItemUpdateByID) {
            onCartItemUpdateByID(itemID, newQuantity);
        }
    }

    handleRemoveCartItemByID(itemID) {
        const { onCartItemDeleteByID } = this.props;
        
        if (onCartItemDeleteByID) {
            onCartItemDeleteByID(itemID);
        }
    }
    
    render() {
        const { cartItemList, cartTotalPrice } = this.props;

        return (
            <React.Fragment>
                <div className="cart-item-list">
                    { cartItemList.map(item => 
                        <CartItem
                            className="cart-item"
                            key={ item.id }
                            cartItem={ item }
                            onCartItemDeleteByID={ (itemID) => this.handleRemoveCartItemByID(itemID) }
                            onCartItemUpdateByID={ (itemID, newQuantity) => this.handleUpdateCartItemByID(itemID, newQuantity) }
                        >
                    </CartItem>
                    ) }
                </div>
                <div className="cart-total-price">
                    <span>TOTAL: { cartTotalPrice }</span>
                </div>
            </React.Fragment>
        );
    }
}

CartItemList.propTypes = {
    cartItemList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            imageURL: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            totalPrice: PropTypes.string.isRequired
        })
    ),
    cartTotalPrice: PropTypes.string,
    onCartItemUpdateByID: PropTypes.func,
    onCartItemDeleteByID: PropTypes.func,
};
  
CartItemList.defaultProps = {
    cartItemList: [],
    cartTotalPrice: '$0.00'
};
  

export default CartItemList;