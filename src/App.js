import Navbar from "./Navbar";
import Home from "./Home";

function App() {

  const title = 'Welcome to the new blog thingy';
  const likes = 50;

  return (
    <div className="App">
      <Navbar>
      </Navbar>
      <Home></Home>
     <div className="content">
      <h1>{ title }</h1>
      <p>Liked { likes } times</p>

      <p> { 10 } </p>
      <p> { Math.random() * 10 } </p>
     </div>
    </div>
  );
}

export default App;
