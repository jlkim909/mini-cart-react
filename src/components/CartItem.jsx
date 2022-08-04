import React from 'react';

function CartItem({
    cartItem,
    idx,
    handleIncrease,
    handleDecrease,
    handleDelete,
}) {
    return (
        <li className="flex py-6">
            <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={cartItem.imgSrc}
                    className="h-full w-full object-cover object-center"
                    alt={cartItem.name}
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{cartItem.name}</h3>
                        <p className="ml-4">
                            {(cartItem.price * cartItem.count).toLocaleString()}
                            원
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between">
                    <div className="flex text-gray-500">
                        <button
                            className="decrease-btn"
                            onClick={() => handleDecrease(idx)}
                        >
                            -
                        </button>
                        <div className="mx-2 font-bold">{cartItem.count}개</div>
                        <button
                            className="increase-btn"
                            onClick={() => handleIncrease(idx)}
                        >
                            +
                        </button>
                    </div>
                    <button
                        type="button"
                        className="font-medium text-sky-400 hover:text-sky-500"
                    >
                        <p
                            className="remove-btn"
                            onClick={() => handleDelete(idx)}
                        >
                            삭제하기
                        </p>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;
