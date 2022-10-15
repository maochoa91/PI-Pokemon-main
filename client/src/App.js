import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (

<div className="App">

 <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route>
        <Navbar></Navbar>

      </Route>
 </BrowserRouter>


</div>

   
      
  );
}

export default App;
