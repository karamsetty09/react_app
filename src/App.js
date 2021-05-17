
import "./App.css";
import venkata from "./venkata.jpg";

//function to display Header - Always use capital for starting of function name
function Header(props){
  return(
    <header>
      <h1>{props.name}'s Portfolio</h1>
    </header>
  );
}

//function to display main
function Main(props){
  return(
  <main>
    <h3>Welcome to my {props.adjective} Portfolio</h3>
    <img src={venkata} height={200} alt={"Sandeep's Picture"}/>
    <ul style={{textAlign: "left" }}>
      {props.skills.map((skill) => (
        <li key={skill.id}>{skill.title}</li>
      ))}
    </ul>
  </main>
  );
}

//function to display footer
function Footer(props){
  return(
    <footer>
      <h6> Copyright @ {props.year} </h6>
    </footer>
  );
}

//Playing with data and dispaly on React Application
const skills = [
  "HTML",
  "CSS",
  "PHP",
  "javascript",
  "React"
]

const skillObjects = skills.map((skill, i) => ({id: i, title:skill}));

//How conditional rendering works in javascript display different components based on true and false
function SecretComponent(){
  return <h1> secret information for authorized users only</h1>
}

function RegularComponent(){
  return <h1>Everyone can see this element</h1>
}



//"" -> Used for strings of props data  {} ->
function App(props) {
  return (
    <div className="App">
      <Header name="Venkata Sandeep Kumar Karamsetty"/> 
      <Main adjective="Amazing" skills={skillObjects}/>
      <Footer year={new Date().getFullYear()}/>
      { props.authorized ? <SecretComponent /> : <RegularComponent /> }
      
    </div>
  );
}

export default App;
