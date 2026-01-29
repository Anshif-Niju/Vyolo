import { createContext, useContext, useState, useEffect } from "react";
import api from "../service/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await api.get("/Cart");
                if (res.data.length > 0) {
                    setCart(res.data);
                } else {
                    console.log("Cart is empty");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCart();
    }, []);

    const cartLength = cart.length;




    const totalPrice = cart.reduce((total, item) => {

        return total + item.product.price * item.size;

    }, 0);
 
    const delivery=(totalPrice>100000)?0:199

    



    return <CartContext.Provider value={{ cart, cartLength, totalPrice,delivery }}>
        {children}
        </CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
