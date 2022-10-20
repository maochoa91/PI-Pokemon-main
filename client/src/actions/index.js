//import axios from "axios";
export const GET_POKEMON = "GET_POKEMON";
export const GET_TYPES = "GET_TYPES ";
export const ADD_POKEMON = "ADD_POKEMON";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";


export const getPokemons = () => async(dispatch)=>{
  
   const response= await fetch("http://localhost:3001/pokemons",{method: "GET"})
   const data = await response.json();
   //console.log(data);
   dispatch({
      type: GET_POKEMON,
      payload: data
   })                  
                              
                            
};

export const getTypes = () => async(dispatch)=>{
  
   const response= await fetch("http://localhost:3001/types",{method: "GET"})
   const data = await response.json();
   //console.log(data);
   dispatch({
      type: GET_TYPES,
      payload: data
   })                  
                              
                            
};
export const getPokemonsName = (name) => async(dispatch)=>{
  
   const response= await fetch(`http://localhost:3001/pokemons?name=${name}`,{method: "GET"})
   const data = await response.json();
   //console.log(data);
   dispatch({
      type: GET_POKEMON_NAME,
      payload: data
   })                  
                              
                            
};
export const addPokemon = (pokemon) => async(dispatch)=>{
  
   
   const response= await fetch(`http://localhost:3001/pokemons`,{method:"POST",headers: {'Content-Type': 'application/json'},body:JSON.stringify(pokemon)})
   let result = await response.json();
  alert("Pokemon creado");
   //console.log(data);
   dispatch({
      type: ADD_POKEMON,
      payload: JSON.stringify(pokemon)
   })                  
                              
                            
};
