
import './App.css';

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Portfolio</h1>
    </header>
  );
}

function Main(props){
  return(
  <main>
    <h3>Welcome to my {props.adjective} Portfolio</h3>
  </main>
  );
}

function Footer(props){
  return(
    <footer>
      <h6> Copyright @ {props.year} </h6>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Venkata Sandeep Kumar Karamsetty"/>
      <Main adjective="Amazing"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
