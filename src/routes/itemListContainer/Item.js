import "./components/ItemCss.css";
import { Link } from 'react-router-dom';

function Item ({info}){
    
    return(
        <div className="Item" >
            <h2>{info.Titulo}</h2>
            <div>
                <Link to={`/item/${info.id}`} ><img src={info.Imagen} alt={info.Titulo} /></Link>
            </div>
            
        </div>
    );

    
}

export default Item; 
