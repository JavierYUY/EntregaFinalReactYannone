import imgCarrito from './imgCarrito.png';
import './cartWidget.css';
import {UseCartContext} from '../../components/context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget(){
    const { cantidadItems } = UseCartContext();

    return(
        <div>
            <div>
                <Link to="/checkout" >
                    <img src={imgCarrito} className="carrito" alt="imagen de carrito de compra" />
                </Link>
            </div>
            <div>
                {cantidadItems}
            </div>
        </div>
    );
}

export default CartWidget;
