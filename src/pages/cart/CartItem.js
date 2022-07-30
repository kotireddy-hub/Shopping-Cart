import React, { useContext } from 'react';
import { AddIcon, MinusIcon, TrashIcon } from '../../components/icons'
import { CartContext } from '../../contexts/CartContext';

import { formatNumber } from '../../helpers/utils';
import "./CartProducts.scss"

const CartItem = ({product}) => {

    const { increaseCount, decreaseCount, removeProductCart } = useContext(CartContext);

    return (
        <div className="row no-gutters py-2 cartItemContainer">
            <div className="col-sm-2 p-2">
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "50px"}}
                src={product.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: {formatNumber(product.price.replaceAll("$", ""))} </p>

            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                 <button
                 onClick={() => increaseCount(product)}
                 className="btn addIcon mr-2 mb-1">
                     <AddIcon width={"20px"}/>
                 </button>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decreaseCount(product)}
                    className="btn mb-1 deleteBtn">
                        <MinusIcon width={"20px"}/>
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProductCart(product)}
                    className="btn mb-1 deleteBtn">
                        <TrashIcon width={"20px"}/>
                    </button>
                 }

            </div>
        </div>
     );
}

export default CartItem;
