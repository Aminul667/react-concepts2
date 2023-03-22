import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:"Potato", price:30},
    {name:"Rice", price:70},
    {name:"Apple", price:200},
    {name:"Orange", price:200}
  ]

  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props) {
  console.log(props)
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )


}

export default App;
