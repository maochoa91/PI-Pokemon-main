import { GET_POKEMON,
    GET_TYPES,
    GET_POKEMON_NAME,ADD_POKEMON,
   
} from "../actions";

const initialState = {
  pokemons: [],
  tipos: [],
  pokemonDetail: {},
  pokemonNombre:{},
  pokemonesCreados:[],
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
                pokemons: action.payload,
                
              };
               case ADD_POKEMON: 
              return {
                ...state,
                pokemonesCreados: [...state.pokemonesCreados,action.payload],
                
              };
     
       
        default:
              return { ...state };
 }


};

export default rootReducer;