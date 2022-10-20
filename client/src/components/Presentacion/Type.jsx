

import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTypes } from "../../actions";
import "./Type.css";
export const Type=()=>  {
const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getTypes());
   
 });     
  
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