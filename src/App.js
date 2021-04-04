import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import ProductItemList from './components/ProductItemList';
import CartItemList from './components/CartItemList';

const products = 
[
  {
     id:"1987899424833",
     imageURL:"//cdn.shopify.com/s/files/1/0064/7312/1857/products/product-image-879565466_medium.jpg?v=1571804606",
     title:"Compound Bow",
     price:"$1,900.74"
  },
  {
     id:"1986025914433",
     imageURL:"//cdn.shopify.com/s/files/1/0064/7312/1857/products/product-image-798613072_medium.jpg?v=1571804606",
     title:"Fishing Slingshot",
     price:"$55.99"
  },
  {
     id:"1986008088641",
     imageURL:"//cdn.shopify.com/s/files/1/0064/7312/1857/products/product-image-849615233_medium.jpg?v=1571804606",
     title:"Catapult Fishing Equipment Kit",
     price:"$49.62"
  },
  {
     id:"1986003796033",
     imageURL:"//cdn.shopify.com/s/files/1/0064/7312/1857/products/product-image-805865184_medium.jpg?v=1571804606",
     title:"Alumium One Way Clutch Ball Bearings Fishing Spinning Spool Reels",
     price:"$46.90"
  },
  {
     id:"1986002419777",
     imageURL:"//cdn.shopify.com/s/files/1/0064/7312/1857/products/product-image-763124671_medium.jpg?v=1571804605",
     title:"Foldable Waterproof Fishing Bucket",
     price:"$50.00"
  }
];
class App extends Component {
  state = {
    cartItemList: [],
    cartTotalPrice: '$0.00'
  };

  constructor() {
    super();
    this.handleAddCartItem = this.handleAddCartItem.bind(this);
    this.handleUpdateCartItemByID = this.handleUpdateCartItemByID.bind(this);
    this.handleRemoveCartItemByID = this.handleRemoveCartItemByID.bind(this);
  }

  handleAddCartItem(productItem) {
    const { cartItemList } = this.state;

    if (productItem != null) {
      if (this.isItemInCart(productItem.id)) {
        //already in cart, update quantity instead
        const itemInCart = cartItemList.find(item => item && item.id === productItem.id);
        const previousQuantity = (itemInCart && itemInCart.quantity) ? itemInCart.quantity : 0;
        const newQuantity = previousQuantity + productItem.quantity;
        this.handleUpdateCartItemByID(productItem.id, newQuantity);

      } else {
        const newCartItem = {
          ...productItem,
          totalPrice: this.getItemTotalPriceString(productItem.quantity, productItem.price)
        }

        this.updateCartItemList([...cartItemList, newCartItem]);
      }
    }
  }

  handleUpdateCartItemByID(itemID, newQuantity) {
    const { cartItemList } = this.state;

    let newCartItemList = cartItemList.map(item => {
      if (item && item.id === itemID) {
        const updatedItem = {
          ...item,
          quantity: newQuantity,
          totalPrice: this.getItemTotalPriceString(newQuantity, item.price)
        };
        return updatedItem;
      } else {
        return item;
      }
    });

    this.updateCartItemList(newCartItemList);
  }

  handleRemoveCartItemByID(itemID) {
    const { cartItemList } = this.state;
    let newCartItemList = cartItemList.filter(item => item && item.id !== itemID);

    this.updateCartItemList(newCartItemList);
  }

  getItemTotalPriceString(quantity, priceString) {
    let totalPriceString = '$0.00';

    if (!isNaN(quantity)) {
      //remove the currency prefix and start calculating for total price
      const currencyString = priceString.slice(0, 1);
      const valueString = priceString.slice(1);

      const priceValue = parseFloat(valueString.replace(',', ''));
      const newPriceString = (quantity * priceValue).toFixed(2);
      
      totalPriceString = `${currencyString}${newPriceString}`;
    }

    return totalPriceString;
  }

  isItemInCart(productID) {
    const { cartItemList } = this.state;

    if ((cartItemList != null) && (cartItemList.length > 0)) {
      let itemFound = cartItemList.findIndex(item => item && item.id === productID);
      if (itemFound !== -1) return true;
    }
    return false;
  }

  updateCartItemList(newList) {
    this.setState({ 
      cartItemList: newList,
      cartTotalPrice: this.getCartTotalPriceString(newList)
     });
  }

  getCartTotalPriceString(cartItemList) {
    let cartTotalPrice = 0;
    let currencyString = '$';

    cartItemList && cartItemList.forEach(item => {
      if ((item != null) && (item.totalPrice != null)) {
        //remove the currency prefix and start adding each item total price
        currencyString = item.totalPrice.slice(0, 1);
        const valueString = item.totalPrice.slice(1);

        const priceValue = parseFloat(valueString.replace(',', ''));
        cartTotalPrice += priceValue;
      }
    });

    const newPriceString = cartTotalPrice.toFixed(2);
    const cartTotalPriceString = `${currencyString}${newPriceString}`;

    return cartTotalPriceString;
  }

  render() {
    const { cartItemList, cartTotalPrice } = this.state;

    return (
      <div className="App">
        <CartItemList
          cartItemList={ cartItemList }
          cartTotalPrice= { cartTotalPrice }
          onCartItemDeleteByID={ (itemID) => this.handleRemoveCartItemByID(itemID) }
          onCartItemUpdateByID={ (itemID, newQuantity) => this.handleUpdateCartItemByID(itemID, newQuantity) }
        >
        </CartItemList>

        <Header></Header>
        <ProductItemList 
          products={ products }
          onAddCart={ (productItem) => this.handleAddCartItem(productItem) }
        ></ProductItemList>
      </div>
    );
  }
}

export default App;
