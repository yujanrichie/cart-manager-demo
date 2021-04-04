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
    quantity: 1
  };

  constructor() {
    super();
    this.handleAddCartItem = this.handleAddCartItem.bind(this);
    this.handleUpdateCartItem = this.handleUpdateCartItem.bind(this);
    this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
  }

  handleAddCartItem(productItem) {
    console.log('adding', productItem);
  }

  handleUpdateCartItem(productItem) {
    console.log('updating', productItem);
  }

  handleRemoveCartItem(productItem) {
    console.log('removing', productItem);
  }

  render() {
    return (
      <div className="App">
        <CartItem
          cartItem={ {
            id:"1986002419777",
            imageURL:"//cdn.shopify.com/s/files/1/0064/7312/1857/products/product-image-763124671_medium.jpg?v=1571804605",
            title:"Foldable Waterproof Fishing Bucket",
            price:"$50.00",
            quantity: 2,
            totalPrice: "$199.50"
          } }
          onCartItemDelete={ (cartItem) => this.handleRemoveCartItem(cartItem) }
          onCartItemUpdate={ (cartItem) => this.handleUpdateCartItem(cartItem) }
        >

        </CartItem>

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
