import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CartItem from './CartItem';

const MAX_COUNT = 10;
const MIN_COUNT = 1;
function Cart({ showCart = false, toggleCart, cartList, setCartList }) {
    const [totalPrice, setTotalPrice] = useState(0);

    const saveToLocalStorage = () => {
        localStorage.setItem('cartState', JSON.stringify(cartList));
    };
    const handleDelete = (idx) => {
        const newCartList = [
            ...cartList.slice(0, idx),
            ...cartList.slice(idx + 1, cartList.length),
        ];
        setCartList(newCartList);
    };
    const handleIncrease = (idx) => {
        if (cartList[idx].count >= MAX_COUNT) {
            alert('장바구니에 담을 수 있는 최대 수량은 10개입니다.');
            return;
        }
        const newCartList = [...cartList];
        newCartList[idx].count += 1;
        setCartList(newCartList);
    };

    const handleDecrease = (idx) => {
        if (cartList[idx].count <= MIN_COUNT) {
            alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
            return;
        }
        const newCartList = [...cartList];
        newCartList[idx].count -= 1;
        setCartList(newCartList);
    };

    useEffect(() => {
        setTotalPrice(
            cartList.reduce((acc, cur) => acc + cur.price * cur.count, 0)
        );
    }, [cartList]);
    return (
        <aside className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <section
                className={`pointer-events-auto w-screen max-w-md transition ease-in-out duration-500 ${
                    showCart ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-xl font-bold">장바구니</h2>
                            <div className="ml-3 flex h-7 items-center">
                                <button
                                    type="button"
                                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                    onClick={toggleCart}
                                >
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul className="divide-y divide-gray-200">
                            {cartList.map((cartItem, idx) => (
                                <CartItem
                                    key={cartItem.id}
                                    idx={idx}
                                    cartItem={cartItem}
                                    handleIncrease={handleIncrease}
                                    handleDecrease={handleDecrease}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="border-t border-gray-200 p-6">
                        <div className="flex justify-between font-medium">
                            <p>결제금액</p>
                            <p className="font-bold" id="total-count">
                                {totalPrice.toLocaleString()}원
                            </p>
                        </div>
                        <a
                            href="./"
                            className="flex items-center justify-center rounded-md border border-transparent bg-sky-400 px-6 py-3 mt-6 font-medium text-white shadow-sm hover:bg-sky-500"
                            onClick={saveToLocalStorage}
                        >
                            결제하기
                        </a>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                또는
                                <button
                                    type="button"
                                    className="font-medium text-sky-400 hover:text-sky-500"
                                >
                                    쇼핑 계속하기
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    );
}

export default Cart;
