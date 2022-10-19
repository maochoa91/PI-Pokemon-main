import './App.css';
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTypes,getPokemons } from "./actions";
import Navbar from "./components/Navbar";
import Pokemones from "./components/Contenedores/Pokemones";
import Portada from "./components/Landing/Portada";
import PokemonDetail from "./components/Presentacion/PokemonDetail";
import Type from "./components/Presentacion/Type";
import Buton from "./components/buton";
function App() {
  
const dispatch = useDispatch();
 useEffect(() => {
    dispatch(getTypes());
   dispatch(getPokemons());
  });

  return (

<div className='App'>
  <Navbar />
  <Route exact path="/">
        <Portada />
  </Route>
  <Route exact path="/home">
        <Pokemones />
  </Route>
  <Route exact path="/home/PokemonDetail/:id" component={PokemonDetail}/>
    <Route exact path="/type">
        <Type />
  </Route>   
  
   
</div>
);

}

export default App;
