import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import ProductItemList from './components/ProductItemList';
import CartItem from './components/CartItem';

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
    quantity: 1,
    cartItemList: []
  };

  constructor() {
    super();
    this.handleAddCartItem = this.handleAddCartItem.bind(this);
    this.handleUpdateCartItemByID = this.handleUpdateCartItemByID.bind(this);
    this.handleRemoveCartItemByID = this.handleRemoveCartItemByID.bind(this);
  }

  handleAddCartItem(productItem) {
    const { cartItemList } = this.state;

    console.log('adding', productItem);
    const newCartItem = {
      ...productItem,
      totalPrice: this.getTotalPriceString(productItem.quantity, productItem.price)
    }
    console.log('new cart item', newCartItem);
    this.setState({ cartItemList: [...cartItemList, newCartItem] });
  }

  handleUpdateCartItemByID(itemID, newQuantity) {
    const { cartItemList } = this.state;
    console.log('updating', itemID, newQuantity);

    let newCartItemList = cartItemList.map(item => {
      if (item && item.id === itemID) {
        const updatedItem = {
          ...item,
          quantity: newQuantity,
          totalPrice: this.getTotalPriceString(newQuantity, item.price)
        };
        return updatedItem;
      } else {
        return item;
      }
    });

    console.log('new updated list', newCartItemList);
    this.setState({ cartItemList: newCartItemList });
  }

  handleRemoveCartItemByID(itemID) {
    const { cartItemList } = this.state;
    console.log('removing', itemID);
    let newCartItemList = cartItemList.filter(item => item && item.id !== itemID);

    this.setState({ cartItemList: newCartItemList });
  }

  getTotalPriceString(quantity, priceString) {
    let totalPriceString = '$0.00';

    if (!isNaN(quantity)) {
      //remove the currency prefix and start calculating for total price
      const currencyString = priceString.slice(0, 1);
      const valueString = priceString.slice(1);
      console.log('here', quantity, valueString);

      const priceValue = parseFloat(valueString.replace(',', ''));
      const newPriceString = (quantity * priceValue).toFixed(2);
      console.log('here', priceValue, newPriceString);
      
      totalPriceString = `${currencyString}${newPriceString}`;
    }

    return totalPriceString;
  }

  getCartItem() {
    const { cartItemList } = this.state;

    if ((cartItemList != null) && (cartItemList.length > 0)) {
      return (
        <CartItem
          cartItem={ cartItemList[0] }
          onCartItemDeleteByID={ (itemID) => this.handleRemoveCartItemByID(itemID) }
          onCartItemUpdateByID={ (itemID, newQuantity) => this.handleUpdateCartItemByID(itemID, newQuantity) }
        >
        </CartItem>
      );
    } else {
      return;
    }
    
  }

  render() {

    return (
      <div className="App">
        { this.getCartItem() }

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
