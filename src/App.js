import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name='Mohosin Palash' job='Student'></Person>
        <Person name='Shoptorshe Prova' job='Doctor'></Person>
      </header>
    </div>
  );
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
