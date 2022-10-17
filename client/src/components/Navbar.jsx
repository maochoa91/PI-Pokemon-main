import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    
  

    render(){
        return(
            <>
                <ul>
                    <Link to={`/home`}><li><a>Home</a></li></Link>
                    
                    <li><a href="news.asp">New pokemon</a></li>
                    <li><a href="contact.asp">Types</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
            </>
        )
    }
}

export default Navbar