
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Type.css";
export const Type=()=>  {

     let tipos = useSelector((store) => store.tipos);

    
        return(
            
     <table className="container2">
		<thead>
			<tr>
				<th>#</th>
				<th>Types</th>
			</tr>
		</thead>
           {tipos.map(  (types)=>
            <tbody>
                <tr>
                    <td>{types.ID}</td>
                    <td>{types.Nombre}</td>
                </tr>
            </tbody>
            )
           } 
        </table>
        )
    }

export default Type