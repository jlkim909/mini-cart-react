import React from 'react';

function ProductItem({ product, toggleCart, cartList, setCartList }) {
    const addCartItem = () => {
        const checkedIdx = cartList.findIndex((item) => item.id === product.id);
        if (checkedIdx === -1) {
            setCartList((prev) => [...prev, { ...product, count: 1 }]);
        } else {
            const newCartList = [...cartList];
            newCartList[checkedIdx].count += 1;
            setCartList(newCartList);
        }
        toggleCart();
    };
    return (
        <article>
            <div className="rounded-lg overflow-hidden border-2 relative">
                <img
                    src={product.imgSrc}
                    className="object-center object-cover"
                    alt={product.name}
                />
                <div
                    className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75"
                    onClick={addCartItem}
                >
                    <div
                        data-productid="1"
                        className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer"
                    >
                        장바구니에 담기
                    </div>
                </div>
            </div>
            <h3 className="mt-4 text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">
                {product.price.toLocaleString()}원
            </p>
        </article>
    );
}

export default ProductItem;
