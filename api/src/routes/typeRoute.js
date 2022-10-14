const { Router } = require('express');
const { Tipo } = require('../db.js');
const fetch = require("node-fetch");
var primeraVez=true;
const router = Router();

router.get("/", async (req, res) => {
  
  try {

    primeraVez=await validacion();
    
      if(!primeraVez){
      const data=await descargaApi();
      const resultado=await Tipo.bulkCreate(data);
      
      return res.status(200).send(resultado);
    }
      else{

        const tipos = await Tipo.findAll();
        return res.status(200).send(tipos);

      }
      
   
   
    
  } catch (error) {
    res.status(400).send("Error en alguno de los datos provistos");
  }
});


const  descargaApi= async()=>{
try {
     const tipos = await fetch("https://pokeapi.co/api/v2/type",{method: "GET"});
      const data =await tipos.json();

      const tiposPokemon=data.results.map(function(obj){

            var resultado={};
             resultado["Nombre"]=obj.name;
            
            return resultado;
      })

      return tiposPokemon;
} catch (error) {
    res.status(400).send("Error en la API");
}
} 

//////////////////validar BD vacia
const  validacion= async()=>{

  try{

    const tipoValidacion= await Tipo.findByPk(1);
    if(!tipoValidacion) return false;
    else return true;
}
  catch{
        res.status(400).send("Error en la API");

  }
    


}

module.exports = router;