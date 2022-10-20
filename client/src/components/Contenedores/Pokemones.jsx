

import Pokemon from "../Presentacion/Pokemon";
import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../actions";
import "./Pokemones.css"

 const Pokemones=()=>  {
   const dispatch = useDispatch();
  //dispatch(getPokemons());
  let pokemons = useSelector((store) => store.pokemons);
  let names = pokemons.map((o) => o.Nombre);
 
  
  let Ataque = pokemons.map(o => {
   const resultado={};
   resultado["ataque"]=o.Ataque;
    resultado["nombre"]=o.Nombre;
    return  resultado});

  
     let orden = [];
   
  
   const [pagina, setPagina] = useState(0);
  const[listapokemon,setLista]=useState([]);
  const[busquedaPokemon,setBusquedaPokemon]=useState("");
     useEffect(() => {
     
    setLista(pokemons);
    }, [pokemons]);

 var NextPage=()=>{
  if(listapokemon.length>pagina+12)
   setPagina(pagina+12);
 }
 var PreviousPage=()=>{
 
  if(pagina>11)
    setPagina(pagina-12);
 }

 const actualizacion = () => {
    if (listapokemon.length) 
    {
      return listapokemon.slice(pagina, pagina + 12);
    }
    
    return [];
  };

let pokemones=actualizacion();
const OrdenarAlfabeticamente = () => {

 

       orden = [];
       names = names.sort().reverse();
        names.forEach((p) => {
        pokemons.forEach((po) => {
          if (p === po.Nombre) orden.push(po);
        });
      });
 
    let pokemons1=orden;
   setLista(pokemons1);

   setPagina(0);

  }
  const OrdenarAlfabeticamenteInverso = () => {

 

       orden = [];
       names = names.sort();
        names.forEach((p) => {
        pokemons.forEach((po) => {
          if (p === po.Nombre) orden.push(po);
        });
      });
 
   let pokemons1=orden;
   setLista(pokemons1);
  
   setPagina(0);

  }
  const OrdenAtaquemayor = () => {

 

       orden = [];
       Ataque = Ataque.sort((a, b) => b.ataque - a.ataque);
       
        Ataque.forEach((f) => {
        pokemons.forEach((po) => {
          if (f.ataque === po.Ataque && f.nombre===po.Nombre) orden.push(po);
        });
      });
 
   let pokemons1=orden;
   setLista(pokemons1);
   
   setPagina(0);

  }
    const OrdenAtaquemenor = () => {

 

       orden = [];
       Ataque = Ataque.sort((a, b) => a.ataque-b.ataque );
       
        Ataque.forEach((f) => {
        pokemons.forEach((po) => {
          if (f.ataque === po.Ataque && f.nombre===po.Nombre) orden.push(po);
        });
      });
 
   let pokemons1=orden;
   setLista(pokemons1);
   
   setPagina(0);

  }
  const devolver = () => {
    setLista(pokemons);
    
   setPagina(0);

  }
  const filtroTipo = (tipo) => {
        
       orden = [];
        
        pokemons.forEach((po) => {

          if(po.tipos[0] ){
             
              if(po.tipos[0].Nombre===tipo) orden.push(po);
          }
         

          if(po.tipos[1] ){
              if(po.tipos[1].Nombre===tipo) orden.push(po);

          }
        
      });
 
   let pokemons1=orden;

   setLista(pokemons1);
   
   setPagina(0);

  }

  function handleChange(event) {
   setBusquedaPokemon( event.target.value);
  }

  const handleSubmit= async (event) => { 
    event.preventDefault();
   
     
  try {
    
        const response= await fetch(`http://localhost:3001/pokemons?name=${busquedaPokemon}`,{method: "GET"})
     const data = await response.json();
     let pokemons1=data;
     setLista(pokemons1);
    console.log(pokemons1)
    setBusquedaPokemon("");
  } catch (error) {
    
  }
    
    
   
    
  }
  ////////////////////////////////HTML/////////////////////////////////////////////////////////////
  return (
    <>
      
      <img className="ImagenTitulo" src="https://pokefanaticos.com/pokedex/assets/images/pokedex/pokedex_mainjt_image.png"/>
      <div className="filtroTipos">
        <table className="tablaBotones">
          <tr>
            <td><button onClick={() => filtroTipo("normal")} className="normal">normal</button></td>
            <td><button onClick={() => filtroTipo("fighting")} className="fighting">fighting</button></td>
            <td><button onClick={() => filtroTipo("flying")} className="flying">flying</button></td>
            <td><button onClick={() => filtroTipo("poison")} className="poison">poison</button></td>

          </tr>
           <tr>
              <td><button onClick={() => filtroTipo("ground")} className="ground">ground</button></td>
              <td><button onClick={() => filtroTipo("rock")} className="rock">rock</button></td>
              <td><button onClick={() => filtroTipo("bug")} className="bug">bug</button></td>
              <td><button onClick={() => filtroTipo("ghost")} className="ghost">ghost</button></td>
            
          </tr>
           <tr>
                <td><button onClick={() => filtroTipo("steel")} className="steel">steel</button></td>
                <td><button onClick={() => filtroTipo("fire")} className="fire">fire</button></td>
                <td><button onClick={() => filtroTipo("water")} className="water">water</button></td>
                <td><button onClick={() => filtroTipo("grass")} className="grass">grass</button></td>
            
          </tr>
           <tr>
                <td><button onClick={() => filtroTipo("electric")}  className="electric">electric</button></td>
                <td><button onClick={() => filtroTipo("psychic")}  className="psychic">psychic</button></td>
                <td><button onClick={() => filtroTipo("ice")} className="ice">ice</button></td>
                <td><button onClick={() => filtroTipo("dragon")}  className="dragon">dragon</button></td>
            
          </tr>
           <tr>
                <td><button onClick={() => filtroTipo("dark")}  className="dark">dark</button></td>
                <td><button onClick={() => filtroTipo("fairy")}  className="fairy">fairy</button></td>
                <td><button onClick={() => filtroTipo("unknown")} className="unknown">unknown</button></td>
                <td><button onClick={() => filtroTipo("shadow")} className="shadow">shadow</button></td>
           </tr>
        
        



        </table>
     
      </div>
      <div className="filtros">
        <button onClick={OrdenarAlfabeticamenteInverso}><img className="Botonfiltro" src="https://cdn.icon-icons.com/icons2/936/PNG/96/sort-by-alphabet_icon-icons.com_73407.png" alt="" /></button>
        <button onClick={OrdenarAlfabeticamente}><img className="Botonfiltro" src="https://cdn.icon-icons.com/icons2/936/PNG/96/sort-reverse-alphabetical-order_icon-icons.com_73401.png"  /></button>
        <button onClick={OrdenAtaquemayor}><img className="Botonfiltro" src="https://cdn.icon-icons.com/icons2/936/PNG/96/sort-by-numeric-order_icon-icons.com_73404.png"  /></button>
        <button onClick={OrdenAtaquemenor}><img className="Botonfiltro" src="https://cdn.icon-icons.com/icons2/936/PNG/96/sort-by-order_icon-icons.com_73403.png" alt="" /></button>
        <button onClick={devolver}><img className="Botonfiltro" src="https://cdn.icon-icons.com/icons2/2456/PNG/96/reset_undo_arrow_icon_149006.png" alt="" /></button>
     </div>
      <h1> # {pagina+1} - {pagina +12} </h1>
      <button className="botonePagina" onClick={PreviousPage}>  <img className="botonesPagina" src="https://cdn.icon-icons.com/icons2/77/PNG/128/button_previous_14999.png" alt="" /></button>
      <button className="botonePagina" onClick={NextPage}>  <img className="botonesPagina" src="https://cdn.icon-icons.com/icons2/77/PNG/128/button_next_14997.png" alt="" /></button>
      
      <form onSubmit={(e) => handleSubmit(e)}>

                  <input className="barraBusqueda" type="text" placeholder=" Search Pokemon" name="search" id="Nombre" value={busquedaPokemon}
              onChange={(e) => handleChange(e)}/>
                  <button type="submit">
                     <img className="imagenBuaqueda" src="https://cdn.icon-icons.com/icons2/1458/PNG/512/magnifyingglasssearchbutton_99742.png" alt="" />
                  </button >
      </form>
        <div className="tabla">
          
              
          { pokemones.length!==0?pokemones.map(                    
                        (pokemon)=><Pokemon  
                         id={pokemon.ID}
                        img={pokemon.IMG}
                        name={pokemon.Nombre}
                        key={pokemon.ID}
                        Tipos={pokemon.tipos}
                        
                        />
                        
                    ):( <div><p >Pokemons not found</p>
                        <img src="data:image/jpeg;base64,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" alt="" />
                     </div> )

               

          } 
          
    
        </div>
               <button className="botonePagina" onClick={PreviousPage}>  <img className="botonesPagina" src="https://cdn.icon-icons.com/icons2/77/PNG/128/button_previous_14999.png" alt="" /></button>
      <button className="botonePagina" onClick={NextPage}>  <img  className="botonesPagina" src="https://cdn.icon-icons.com/icons2/77/PNG/128/button_next_14997.png" alt="" /></button>
   </>
  );

}

export default Pokemones;
