

import Pokemon from "../Presentacion/Pokemon";
import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { getPokemonsName } from "../../actions";
import "./Pokemones.css"

 const Pokemones=()=>  {
  
  let pokemons = useSelector((store) => store.pokemons);
  let names = pokemons.map((o) => o.Nombre);
  let Tipos = pokemons.map((o) => o.tipos);
  console.log(Tipos);
  let Ataque = pokemons.map(o => {
   const resultado={};
   resultado["ataque"]=o.Ataque;
    resultado["nombre"]=o.Nombre;
    return  resultado});

  
     let orden = [];
   
  
   const [pagina, setPagina] = useState(0);
  const[listapokemon,setLista]=useState([]);

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
              console.log(po.tipos[0] )
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
      
      <form onSubmit={(e) => this.handleSubmit(e)}>

                  <input className="barraBusqueda" type="text" placeholder=" Search Pokemon" name="search"/>
                  <button type="submit">
                     <img className="imagenBuaqueda" src="https://cdn.icon-icons.com/icons2/1458/PNG/512/magnifyingglasssearchbutton_99742.png" alt="" />
                  </button >
      </form>
        <div className="tabla">
          
              
          {
               pokemones.map(                    
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
               <button className="botonePagina" onClick={PreviousPage}>  <img className="botonesPagina" src="https://cdn.icon-icons.com/icons2/77/PNG/128/button_previous_14999.png" alt="" /></button>
      <button className="botonePagina" onClick={NextPage}>  <img  className="botonesPagina" src="https://cdn.icon-icons.com/icons2/77/PNG/128/button_next_14997.png" alt="" /></button>
   </>
  );

}

export default Pokemones;
