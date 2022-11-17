import React, {useState, useContext} from 'react';

const CartContext = React.createContext();
export const UseCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const[carrito, setCarrito] = useState([]);//array de items del carrito
    const[cantidadItems, setCartidadItems] = useState(0);//Cantidad de items del carrito
    const[valorTotal, setValorTotal] = useState(0);//Valor total del carrito

    const agregar = (item, cantidad) => {
        const existeItem = carrito.findIndex((it) => it.id === item.id);
        
        if(existeItem === -1){
            setCarrito([...carrito, item]);
            setCartidadItems(cantidadItems + cantidad);
            setValorTotal(valorTotal + (item.Valor * cantidad));
            
        }else{
            setCartidadItems(cantidadItems + cantidad);
            setValorTotal(valorTotal + (item.Valor * cantidad));
        }
    }

    return(
        <CartContext.Provider value={{carrito, agregar}} >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};
