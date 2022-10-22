import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon,getPokemons } from "../actions";
import "./CreatePokemon.css"


function CreatePokemon() {
const dispatch = useDispatch();

let pokemons = useSelector((store) => store.pokemons);
 let names = pokemons.map((o) => o.Nombre);

const [newPokemon, setNewPokemon] = useState({
    nombre:"",
    vida: 10,
    ataque: 10,
    defensa: 10,
    velocidad: 10,
    altura: 10,
    peso: 10,
    tipo1:"normal" ,
    tipo2:"Ninguno",
    
  });
 

   let tipos = useSelector((store) => store.tipos);
  
 function handleChange(event) {
    
  if(event.target.name==="nombre")
   { 

    var palabra=event.target.value;
        palabra=palabra.split();
    const expresion=/[a-zA-z]+$/
   if(expresion.test(palabra)) setNewPokemon( {...newPokemon,[event.target.name]:event.target.value});
  else{
        alert("No se permiten caracteres ni numeros, solo letras");
        return;

  } 
  
  }
    
   setNewPokemon( {...newPokemon,[event.target.name]:event.target.value});

  }
 function handleSubmit(event) {
  
    event.preventDefault();
   var tipo=[]
   var pokemonDispatch={}
   var validacion;
   const nombreForm=newPokemon.nombre;

  if(nombreForm==="")
   {
      alert("Se requiere nombre Pokemon");
      return;

   }
  names.forEach(name => {
 if(name===nombreForm)
      {
        validacion=true;
        return;
      }
    
   });
   if(validacion===true)
   {
      alert("pokemon existente");
      return;

   }
  
    tipo.push({"Nombre":newPokemon.tipo1})
    if(newPokemon.tipo2!=="Ninguno")
    {
     tipo.push({"Nombre":newPokemon.tipo2})
    }  
    pokemonDispatch["Nombre"]= String(newPokemon.nombre);
    pokemonDispatch["Vida"]= String(newPokemon.vida);
    pokemonDispatch["Ataque"]= String(newPokemon.ataque);
    pokemonDispatch["Defensa"]= String(newPokemon.defensa);
    pokemonDispatch["Velocidad"]= String(newPokemon.velocidad);
    pokemonDispatch["Altura"]= String(newPokemon.altura);
    pokemonDispatch["Peso"]= String(newPokemon.peso);
    pokemonDispatch["tipo"]=tipo;
    
    
    dispatch(addPokemon(pokemonDispatch))
    dispatch(getPokemons());
     window.location.reload()

  }
  



return(

    <div class="testbox">


      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="banner">
          <h1 className="titulo">Create Pokemon</h1>
        </div>
        <div class="item">
          <p>Nombre</p>
          <div class="name-item">
            <input onChange={(e) => handleChange(e)} type="text" name="nombre" placeholder="Name Pokemon" required />
            
          </div>
        </div>

        <div class="item">
          <p>Vida: {newPokemon.vida} </p>
          <input onChange={(e) => handleChange(e)}  type="range" name="vida" min="10" max="500" step="10" required />
        </div>
        <div class="item">
          <p>Ataque:{newPokemon.ataque} </p>
          <input onChange={(e) => handleChange(e)}  type="range" name="ataque" min="10" max="150" step="10" />
         </div>
        <div class="item">
          <p>Defensa: {newPokemon.defensa}</p>
          <input onChange={(e) => handleChange(e)}  type="range" name="defensa" min="10" max="150" step="10" />
        </div>
        <div class="item">
          <p>Velocidad: {newPokemon.velocidad}</p>
          <input onChange={(e) => handleChange(e)} type="range" name="velocidad" min="10" max="100" step="10" />
        </div>
        <div class="item">
          <p>Altura: {newPokemon.altura}</p>
          <input onChange={(e) => handleChange(e)}  type="range" name="altura" min="10" max="22" step="1" />
         
        </div>
         <div class="item">
          <p>Peso</p>
          <input onChange={(e) => handleChange(e)} type="range" name="peso" min="10" max="3000" step="100" />
          <label >{newPokemon.peso}</label>
        </div>

        <div class="cajaTipos">

          
            <div class="itemTipos">
                <p class="tipo-item">Tipo 1</p>
           <select class="tipo-item" onChange={(e) => handleChange(e)} name="tipo1" required>
              {
                  tipos.map(
                      (tips)=><option>{tips.Nombre}</option>

                  )

              }
          </select>
          </div>
          
          <div class="itemTipos">
                <p class="tipo-item">Tipo 2</p>
           <select class="tipo-item" onChange={(e) => handleChange(e)} name="tipo2">
                  <option selected="true">Ninguno</option>
              {
                  tipos.map(
                      (tips)=><option >{tips.Nombre}</option>

                  )

              }
          </select>
          </div>
        </div>
      
        <div >
          <button class="btn-Create" type="submit"   > Create </button>
        </div>
      </form>
    </div>
)

}
export default CreatePokemon;