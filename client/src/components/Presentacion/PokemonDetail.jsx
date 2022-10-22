
import { getPokemons } from "../../actions";
import React, { useEffect, useState } from "react";
import "./PokemonDetail.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//import {  } from "../../actions";


 const PokemonDetail=(props)=>  {

  const dispatch = useDispatch();
  dispatch(getPokemons());
 
  const id = props.match.params.id;
  const [pokemon, setPokemon] = useState({});
    useEffect(() => {
    detalles();
    }, []);
  
  const detalles = async () => {
  
    const response= await fetch(`http://localhost:3001/pokemons/${id}`,{method: "GET"});
   const data = await response.json();
   data["tipoUno"]=data.tipos[0].Nombre;
   if(data.tipos.length>1)
   data["tipoDos"]=data.tipos[1].Nombre;
   else
   data["tipoDos"]=" ";

   setPokemon(data);
  };


 // const tipo=pokemon.tipos;
 
  return (
    <>
        
        <div className="containerDetail">
     
      <div className="nombre">
          <h1># {pokemon.ID}</h1>
           <h1> {pokemon.Nombre}</h1>
            <img src={pokemon.IMG}></img>
            <div className="h2">
            <h3 >           </h3>
            <h3 className={pokemon.tipoUno}> {pokemon.tipoUno}</h3>
            <h3 className={pokemon.tipoDos} >{pokemon.tipoDos} </h3>
            </div>
            <div className="contenido"> 
              <h1>Ataque: {pokemon.Ataque}</h1>
              <h1>Defensa: {pokemon.Defensa}</h1>
              <h1>Velocidad: {pokemon.Velocidad}</h1>
              <h1>Altura: {pokemon.Altura}</h1>
              <h1>Peso: {pokemon.Peso}</h1>
            </div>
           
            
       <Link to={`/home`}>
        <img className="botonPokeball" src="https://cdn.icon-icons.com/icons2/851/PNG/512/Bookmark_icon-icons.com_67583.png"></img>
        </Link>
       
   

        
      </div>

    </div>
    </>
  )
}
export default PokemonDetail