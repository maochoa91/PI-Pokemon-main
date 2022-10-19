
import { clearPokemons, deletePokemon, getPokemons } from "../../actions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./PokemonDetail.css";
import { Link } from "react-router-dom";


 const PokemonDetail=(props)=>  {

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
        <img className="boton" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96e411d5-21aa-48c9-aaff-096b8a5544a9/dadhznk-3a51975c-49a0-4049-97e9-1eee7e8517d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2ZTQxMWQ1LTIxYWEtNDhjOS1hYWZmLTA5NmI4YTU1NDRhOVwvZGFkaHpuay0zYTUxOTc1Yy00OWEwLTQwNDktOTdlOS0xZWVlN2U4NTE3ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NizuVJen5_F9OHkcAhjyT5h1I_SY5DByVDWRB0l9BX0"></img>
        </Link>
       
   

        
      </div>

    </div>
    </>
  )
}
export default PokemonDetail