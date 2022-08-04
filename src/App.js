import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductScreen from './components/ProductScreen';

function App() {
    const [showCart, setShowCart] = useState(false);
    const [cartList, setCartList] = useState([]);

    const toggleCart = useCallback(() => {
        setShowCart((prev) => !prev);
    }, []);

    useEffect(() => {
        const initialCartItem = localStorage.getItem('cartState')
            ? JSON.parse(localStorage.getItem('cartState'))
            : [];
        setCartList(initialCartItem);
    }, []);
    return (
        <div className="relative min-h-screen">
            <ProductScreen
                toggleCart={toggleCart}
                cartList={cartList}
                setCartList={setCartList}
            />
            <div
                className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                hidden={!showCart}
                onClick={toggleCart}
            />
            <Cart
                showCart={showCart}
                toggleCart={toggleCart}
                cartList={cartList}
                setCartList={setCartList}
            />
            <Footer />
        </div>
    );
}

export default App;
