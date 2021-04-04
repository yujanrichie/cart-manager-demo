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
    this.handleUpdateCartItem = this.handleUpdateCartItem.bind(this);
    this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
  }

  handleAddCartItem(productItem) {
    const { cartItemList } = this.state;

    console.log('adding', productItem);
    const newCartItem = {
      totalPrice: this.getTotalPriceString(productItem),
      ...productItem
    }
    console.log('new cart item', newCartItem);
    this.setState({ cartItemList: [...cartItemList, newCartItem] });
  }

  handleUpdateCartItem(id, newQuantity) {
    console.log('updating', id, newQuantity);
  }

  handleRemoveCartItem(productItem) {
    console.log('removing', productItem);
  }

  getTotalPriceString(productItem) {
    let totalPriceString = '$0.00';

    if (productItem != null) {
      const quantity = (productItem.quantity) ? (productItem.quantity) : 0;
      const priceString = (productItem.price) ? (productItem.price) : '$0.00';

      //remove the currency prefix and start calculating for total price
      const currencyString = priceString.slice(0, 1);
      const valueString = priceString.slice(1);

      const priceValue = parseFloat(valueString.replace(',', ''));
      const newPriceString = (quantity * priceValue).toFixed(2);
      
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
          onCartItemDelete={ (cartItem) => this.handleRemoveCartItem(cartItem) }
          onCartItemUpdate={ (id, newQuantity) => this.handleUpdateCartItem(id, newQuantity) }
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
