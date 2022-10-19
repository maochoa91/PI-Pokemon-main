import { GET_POKEMON,
    GET_TYPES,
    GET_POKEMON_NAME,
   
} from "../actions";

const initialState = {
  pokemons: [],
  tipos: [],
  pokemonDetail: {},
  pokemonNombre:{},
};
const rootReducer = (state = initialState, action) => {

 switch (action.type) {

        case GET_POKEMON: 
              return {
                ...state,
                pokemons: action.payload,
                
              };
             case GET_TYPES: 
              return {
                ...state,
                tipos: action.payload,
                
              };
              case GET_POKEMON_NAME: 
              return {
                ...state,
                pokemonNombre: action.payload,
                
              };
     
       
        default:
              return { ...state };
 }


};

export default rootReducer;