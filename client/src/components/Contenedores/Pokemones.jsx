

import Pokemon from "../Presentacion/Pokemon";
import { clearPokemons, deletePokemon, getPokemons } from "../../actions";
import React, { useState } from "react";
import { useSelector } from "react-redux";


export const Pokemones=()=>  {
  
  let pokemons = useSelector((store) => store.pokemons);

  return (
    <>
      <h1>Pokedex {pokemons.length}</h1>
        <div className="tabla">
          
              
          {
               pokemons.map(                    
                        (pokemon)=><Pokemon  
                         id={pokemon.ID}
                        img={pokemon.IMG}
                        name={pokemon.Nombre}
                        key={pokemon.ID}
                        Tipos={pokemon.tipos}
                        
                        />
                        
                    )

          } 
          
        </div>
   </>
  );

}

export default Pokemones;
