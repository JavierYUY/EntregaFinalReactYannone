import React, { useState, useContext } from 'react';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.valor, 0);
    }

    const totalProducts = () => {
        return cart.reduce((acu, prodActual) => acu + prodActual.quantity, 0);
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(prod => prod.id !== id));

    const addProduct = (item, cantidad) => {
        const {quantity = 0} = cart.find(prod => prod.id === item.id) || {};
        const newCart = cart.filter(prod => prod.id !== item.id);
        setCart([...newCart, {...item, quantity: quantity + cantidad}]);
    }
    console.log(cart);
    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;