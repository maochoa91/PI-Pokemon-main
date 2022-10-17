//import axios from "axios";
export const GET_POKEMON = "GET_POKEMON";
export const ADD_POKEMON = "ADD_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const DELETE_POKEMON = "DELETE_POKEMON";

export const getPokemons = () => async(dispatch)=>{
  
   const response= await fetch("http://localhost:3001/pokemons",{method: "GET"})
   const data = await response.json();
   //console.log(data);
   dispatch({
      type: GET_POKEMON,
      payload: data
   })                  
                              
                            
};

export const deletePokemon =  (id) => {
     
         return { type: DELETE_POKEMON, payload: id };
};