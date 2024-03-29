import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$69.99'},
    {name: 'PDF Reader', price: '$29.99'},
    {name: 'Adove XD', price: '$59.99'},
  ]

  return (
    <div className="App">
      <header className="App-header">

        {/* event listener */}
        <Count></Count>

        <Users></Users>

        {/* dynamically passing obejct */}
        {
          products.map(pd => <Products product={pd}></Products>)
        }


        <Products product={products[0]} ></Products>
        <Products product={products[1]} ></Products>
        <Products product={products[2]} ></Products>
        
        
        <Person name='Mohosin Palash' job='Student'></Person>
        <Person name='Shoptorshe Prova' job='Doctor'></Person>
      </header>
    </div>
  );
}

function Users (){
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return(
    <div>
      <h3>No of users: {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}


function Count(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount (count + 1);
  }
  const handleDecrease = () => {
    setCount  (count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}


function Products(props){
  const productStyle ={
    border: '2px solid black',
    borderRadius: '5px', 
    backgroundColor: 'lightgray',
    height: '220px',
    width: '220px',
    color: 'black',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const styleInParagraph ={
    backgroundColor: 'yellow'
  }
  const name = 'Mohosin Palash';
  return (
    <div style={{color: 'orange', border: '2px solid red', margin: '10px'}}>
      <h1>Name: {props.name}</h1>
      <p style={styleInParagraph}> Occupation: {props.job}</p>
    </div>
  )
}

export default App;
