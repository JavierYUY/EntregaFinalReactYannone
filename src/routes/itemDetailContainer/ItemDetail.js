import Counter from '../../components/counter/Counter';
import { useState } from 'react';
import {UseCartContext} from '../../components/context/CartContext';
import './components/ItemDetailCss.css'

const ItemDetail = ({item}) => {
    const {agregar} = UseCartContext();
    const[itemCount, setItemCount] = useState(0);

    const onAdd = (cantidad) => {
        setItemCount(cantidad);
        agregar(item, cantidad);
        setItemCount(itemCount + cantidad);
        alert('Item Agregado');
    };

    return(
        <div>
            <div className='DivTitulo'>
                <h2>{item.Titulo}</h2>
            </div>
            <div className='DivPrincipal'>
                <div>
                    <img src={item.Imagen} alt={item.Titulo} />
                </div>
                <div className='DivDescripcion'>
                    <p>Descripcion: {item.Descripcion}</p>
                    <p>Profesor: {item.Profesor}</p>
                    <p>Valor: {item.Valor}</p>
                    <Counter inicial={1} stock={item.Maximo} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;