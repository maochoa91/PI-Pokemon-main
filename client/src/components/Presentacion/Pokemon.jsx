import { Link } from "react-router-dom";
import React, { Component } from 'react';

import "./Pokemon.css";

export class Pokemon extends Component {

  

render(){
   
    return (
    <div className="container">
     
      <div className="nombre">
       
        <h1>{this.props.name}</h1>
        <h2> #{this.props.id}</h2>
        <img src={this.props.img} alt="Pokemons" />
       
      </div>
      <div className="tablaTipos">
        {this.props.Tipos.map(
             (tipo)=>              
               
              <h3 className={tipo.Nombre} > {tipo.Nombre} </h3>
            
             
             )}
             
       
        <Link to={`/home/PokemonDetail/${this.props.id}`}>
          
            <img className="boton" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96e411d5-21aa-48c9-aaff-096b8a5544a9/dadhznk-3a51975c-49a0-4049-97e9-1eee7e8517d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2ZTQxMWQ1LTIxYWEtNDhjOS1hYWZmLTA5NmI4YTU1NDRhOVwvZGFkaHpuay0zYTUxOTc1Yy00OWEwLTQwNDktOTdlOS0xZWVlN2U4NTE3ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NizuVJen5_F9OHkcAhjyT5h1I_SY5DByVDWRB0l9BX0"></img>
        
        </Link>
      </div>

    </div>
  );
}

}


export default Pokemon;