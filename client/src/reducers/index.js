import { GET_POKEMON,
    ADD_POKEMON,
    DELETE_POKEMON,
    GET_POKEMON_DETAIL,
   
} from "../actions";

const initialState = {
  pokemons: [],
  tipos: [],
  pokemonDetail: {},
};
const rootReducer = (state = initialState, action) => {

 switch (action.type) {

        case GET_POKEMON: 
              return {
                ...state,
                pokemons: action.payload,
                
              };
       case DELETE_POKEMON:
        return{
          ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => pokemon.id !== action.payload
        ),
        } 
       
        default:
              return { ...state };
 }


};

export default rootReducer;