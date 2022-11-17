import imgCarrito from './imgCarrito.png';
import './cartWidget.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget(){
    const { totalProducts } = useCartContext();

    return(
        <div>
            <div>
                <Link to="/checkout" >
                    <img src={imgCarrito} className="carrito" alt="imagen de carrito de compra" />
                </Link>
            </div>
            <div>
                {totalProducts}
            </div>
        </div>
    );
}

export default CartWidget;
