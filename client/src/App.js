import './App.css';
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemons } from "./actions";
import Navbar from "./components/Navbar";
import Pokemones from "./components/Contenedores/Pokemones";
import PokemonDetail from "./components/Presentacion/PokemonDetail";
import Buton from "./components/buton";
function App() {
  
const dispatch = useDispatch();
 useEffect(() => {
    //dispatch(getTypes());
   dispatch(getPokemons());
  });

  return (

<div className='App'>
  <Navbar />
  <Route exact path="/home">
        <Pokemones />
  </Route>
  <Route exact path="/home/PokemonDetail/:id" component={PokemonDetail}/>
        
  
   
</div>
);

}

export default App;
