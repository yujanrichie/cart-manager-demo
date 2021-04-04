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
        const { cartItemList } = this.props;
        console.log('cartItems', cartItemList);

        return (
            <div className="product-item-list">
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
    onCartItemUpdateByID: PropTypes.func,
    onCartItemDeleteByID: PropTypes.func,
};
  
CartItemList.defaultProps = {
    cartItemList: [],
};
  

export default CartItemList;