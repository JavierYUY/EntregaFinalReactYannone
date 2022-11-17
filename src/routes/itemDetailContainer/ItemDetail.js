import Counter from '../../components/counter/Counter';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import './components/ItemDetailCss.css'

const ItemDetail = ({item}) => {
    const {addProduct} = useCartContext();
    const[itemCount, setItemCount] = useState(0);

    const onAdd = (cantidad) => {
        setItemCount(cantidad);
        addProduct(item, cantidad);
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