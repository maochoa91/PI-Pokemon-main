import { Link } from "react-router-dom";
import "./Portada.css"

const Portada = ()=>  {

  

return(
    <div>
        <img className="portada" src="https://images6.alphacoders.com/675/thumb-1920-675510.jpg" alt="" />
        <Link to={`/home`} className="botn"><img className="BotonImagen"src="https://cdn.icon-icons.com/icons2/3373/PNG/96/pokeball_icon_211225.png" alt="" /></Link>
    </div>

    
)


}

export default Portada;