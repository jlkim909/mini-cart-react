import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import getProductData from '../api/getProductData';
import ProductItem from './ProductItem';

function ProductScreen({ toggleCart, cartList, setCartList }) {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const data = async () => {
            try {
                const result = await getProductData();
                setProductList(result);
            } catch (e) {
                console.log(e);
            }
        };
        data();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <header className="flex justify-between mb-4">
                <h2 className="text-3xl font-bold">오늘의 상품</h2>
                <button
                    className="fill-gray-400 hover:fill-gray-500"
                    onClick={toggleCart}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" />
                    </svg>
                </button>
            </header>
            <section id="product-list">
                <div className="grid gap-4 auto-cols-fr grid-cols-2 md:grid-cols-4">
                    {productList.length > 0 ? (
                        productList.map((product) => (
                            <ProductItem
                                key={product.id}
                                product={product}
                                toggleCart={toggleCart}
                                cartList={cartList}
                                setCartList={setCartList}
                            />
                        ))
                    ) : (
                        <h1>상품이 없습니다.</h1>
                    )}
                </div>
            </section>
        </div>
    );
}

export default memo(ProductScreen);
