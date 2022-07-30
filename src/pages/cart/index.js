import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./CartProducts.scss"

const Cart = () => {

    const { total, cartItems, totalItems, emptyCart, checkout, handleCheckout } = useContext(CartContext);

    return (
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className=" mt-5 cart__HeadingContainer">
                    <h1>Shopping Cart</h1>
                    {
                        cartItems.length > 0 &&
                        <Button color="link" className="removeItems" onClick={emptyCart}>Remove All Items</Button>
                    }
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                                <CartProducts /> :
                                <div className="p-3 text-center text-muted emptyCartContainer">
                                    Your cart is empty. Start buying some products from our
                                <Link to="/"> Products Store</Link>
                                </div>
                        }

                        {checkout &&
                            <div className="p-3 text-center text-success">
                                <p>Checkout Successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 &&
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{totalItems}</h4>
                                <p className="mb-1">Amount</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <Button className="checkoutBtn" onClick={handleCheckout}>CHECKOUT</Button>
                                    {/* <Button color="link" className="btn btn-outlineprimary btn-sm" onClick={emptyCart}>Empty Cart</Button> */}
                                </div>

                            </div>
                        </div>
                    }

                </div>
            </div>
        </Layout>
    );
}

export default Cart;
