import {useState} from "react";
import './components/CounterCss.css';

const Counter = ({inicial , stock, onAdd}) => {
    const[cuenta, setCuenta] = useState(inicial);

    const Sumar = () => {
        const totNuevo = cuenta + 1;

        if(totNuevo <= stock){
            setCuenta(totNuevo);
        }
    }

    const Resta = () => {
        const totNuevo = cuenta - 1;

        if(totNuevo >= 0){
            setCuenta(totNuevo);
        }
    }

    return(
        <div className="DivPrimario" >
            <div className="DivSecundario" >
                <button onClick={Sumar} className="Boton" >+</button>
                <div className="DivCuenta">{cuenta}</div>
                <button onClick={Resta} className="Boton" >-</button>
            </div>
            <button onClick={() => onAdd(cuenta)}>Agregar</button>
        </div>
    )
}

export default Counter;