
const { Router } = require('express');
const { Pokemon, Tipo } = require('../db.js');
const fetch = require("node-fetch");

const router = Router();


////////////////////////////////////////////////////
router.post("/", async (req, res) => {
  try {

    await validacion();

    const { Nombre, Vida, Ataque, Defensa, Velocidad, Altura,Peso,tipo } = req.body;
       
    if ( !Nombre && !Vida && !Ataque && !Defensa && !Velocidad && !Altura && !Peso && !tipo)  
    return res.status(404).send("Falta enviar datos obligatorios");
   
    ///verificamos si ya se tomo peticion de la API
   
    
    
    let newPokemon = await Pokemon.create({
      
      "Nombre":Nombre, 
      "Vida":Vida,
      "Ataque":Ataque,
      "Defensa":Defensa,
      "Velocidad":Velocidad,
      "Altura":Altura,
      "Peso":Peso,
      "IMG":"https://pm1.narvii.com/7694/35585e9b4a403951d9e6f35ac3ac0ffad1797617r1-1200-675v2_hq.jpg",
    }
    );
    
  console.log("aca")
   
   
    await llenarTipos(tipo,newPokemon)
 
   
    res.status(201).send(newPokemon);
  } catch (error) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

///////////////////////////////////////////////////////////////////////////////////////
router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
       
    await validacion();
    if(!name){
      
      //const data=  await descargaApi();
      const pokemones = await Pokemon.findAll();
      //const resultado=data.concat(pokemones);
      return res.status(200).send(pokemones);
    }
     else{
     
      const aux={};
      aux["Nombre"]=name;
      var pokemones = await Pokemon.findAll({ where: aux });
      
      return res.status(200).send(pokemones);
      
      
     } 
   
   
    
  } catch (error) {
    res.status(400).send(error);
  }
});

//////////////////////////////////////////////////////////////////////////
router.get("/:id", async (req, res) => {

  const { id } = req.params;
 var pokemon={};
 await validacion();

  try {

    
        pokemon = await Pokemon.findByPk(id);
      
        
    if (!pokemon)
      throw new Error(
        `El código ${id} no corresponde a un personaje existente`
      );
     
     res.status(200).send(pokemon);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//////////////////////////////funciones////////////////////////

const  descargaApi= async ()=>{

    

      var resultado=[];
            
             //const propiedadesPokemon =  fetch(obj.url,{method: "GET"});
             for(let a=1;a<=20;a++){
                
                
                const pokemonApi= await fetchPokemon(a);

                var pokemon=restructuradorDatos(pokemonApi);
              
                resultado.push(pokemon);
             }
             
            
            
      

      return resultado;

} 

////////////////////////////////////////////////
const  fetchPokemon = async(a)=>{
try{
  const pokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${a}/`,{method: "GET"});
  const data = await pokemones.json();
  
  return data;
}
catch{
  res.status(400).send("Error en la api");
}
}
/////////////////////////////////////////////////////////
const restructuradorDatos =async (pokemonApi)=>{
    var pokemon={};
               // pokemon["ID"]=pokemonApi.id;
                pokemon["Nombre"]= pokemonApi.name;
                pokemon["Vida"]= pokemonApi.stats[0].base_stat;
                pokemon["Ataque"]= pokemonApi.stats[1].base_stat;
                pokemon["Defensa"]= pokemonApi.stats[2].base_stat;
                pokemon["Velocidad"]= pokemonApi.stats[4].base_stat;
                pokemon["IMG"]= pokemonApi.sprites.front_default;
                pokemon["Peso"]=pokemonApi.weight;
                pokemon["Altura"]=pokemonApi.height;
                

                let newPokemon = await Pokemon.create(pokemon);
                
      const tiposPokemon=pokemonApi.types.map(function(obj){
       
            var resultado={};
            
             resultado["Nombre"]=obj.type.name;
            
            return resultado;
      })

                pokemon["tipo"]= tiposPokemon;
                await llenarTipos(tiposPokemon,newPokemon)
                return pokemon;

}
////////////////////////////////////////////////////////
const llenarTipos =async(tipos,newPokemon)=>{
   
      
     for(let a=0;a<tipos.length;a++){
         var tipoBd = await Tipo.findAll({ where: tipos[a] });
         newPokemon.addTipo(tipoBd); 
     }
    
}

/////////////////////////////////////////
const  validacion= async()=>{

  try{const pokemonValidacion = await Pokemon.findByPk(1);
    const tipoValidacion= await Tipo.findByPk(1);

    if(!tipoValidacion) await descargarTiposAPi();
    if(!pokemonValidacion) await descargaApi()

    

    
}
  catch{
        res.status(400).send("Error en la API");

  }
    


}
//////////////////////////////////////////////////////////
const  descargarTiposAPi= async()=>{
try {
     const tipos = await fetch("https://pokeapi.co/api/v2/type",{method: "GET"});
      const data =await tipos.json();

      const tiposPokemon=data.results.map(function(obj){

            var resultado={};
             resultado["Nombre"]=obj.name;
            
            return resultado;
      })
        Tipo.bulkCreate(tiposPokemon);
      //return tiposPokemon;


} catch (error) {
    res.status(400).send("Error en la API");
}
} 


/////////////////////////////////////////////////////////

module.exports = router;