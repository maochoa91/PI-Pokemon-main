import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    
  

    render(){
        return(
            <>
                <ul className="tonav">
                    <Link className="menu" to={`/home`}><a>Home</a></Link>
                    <Link className="menu" ><a href="news.asp">New pokemon</a></Link>
                    <Link className="menu"  to={`/type`}><a>Types</a></Link>
                    <Link className="menu" ><a href="about.asp">About</a></Link>

                   
                </ul>
            </>
        )
    }
}

export default Navbar