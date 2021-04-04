import './App.scss';
import Header from './components/Header';
import ProductItem from './components/ProductItem';

function App() {
  let objInput = {
    id:"1987899424833",
    imageURL:"//cdn.shopify.com/s/files/1/0064/7312/1857/products/product-image-879565466_medium.jpg?v=1571804606",
    title:"Compound Bow",
    price:"$1,900.74"
  }

  let objInput2 = {
    id:"1986025914433",
    imageURL:"//cdn.shopify.com/s/files/1/0064/7312/1857/products/product-image-798613072_medium.jpg?v=1571804606",
    title:"Fishing Slingshot",
    price:"$55.99"
  }

  return (
    <div className="App">
      <Header></Header>
      <ProductItem productItem={ objInput } onAddCart= { (productItem) => {console.log('add', productItem);} }></ProductItem>
      <ProductItem productItem={ objInput2 } onAddCart= { (productItem) => {console.log('add', productItem);} }></ProductItem>
    </div>
  );
}

export default App;
