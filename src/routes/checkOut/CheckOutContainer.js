import {UseCartContext} from '../../components/context/CartContext';
import ItemCheckOut from './ItemCheckOut';

const CheckOutContainer = () => {
    const { carrito } = UseCartContext();
    
    return(
            carrito.map(item => <ItemCheckOut key={item.id} info={item} />)
    )
}

export default CheckOutContainer;