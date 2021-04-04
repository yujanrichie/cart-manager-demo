import './App.scss';
import Header from './components/Header';
import ProductItemList from './components/ProductItemList';

function App() {
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

  return (
    <div className="App">
      <Header></Header>
      <ProductItemList products={ products }></ProductItemList>
    </div>
  );
}

export default App;
