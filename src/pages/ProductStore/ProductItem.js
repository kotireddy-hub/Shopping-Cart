import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import './ProductsGrid.scss';
import { Button } from 'reactstrap';

const ProductItem = ({ product }) => {

    const { addProductCart, cartItems, increaseCount } = useContext(CartContext);

    const checkCart = product => {
        return !!cartItems.find(item => item.code === product.code);
    }

    return (
        <div className={`card card-body`}>
            <div className="productImgcontainer">
                <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }} className="img-fluid"
                    src={product.image + '?v=' + product.code} alt="" />
                <p>{product.name}</p>
            </div>
            <div className="productPriceContainer">
                <h4 className="productPrice">{formatNumber(product.price.replaceAll("$", ""))}</h4>
                {/* <h3 className={`prodprice text-left`}>{formatNumber(product.price.replaceAll("$", ""))}</h3> */}
                <div className={`addtocart`}>
                    {
                        checkCart(product) &&
                        <Button color="primary" outline
                            onClick={() => increaseCount(product)}
                            className="btn btn-outline-primary btn-sm addToCartBtn">Add more</Button>
                    }
                    {
                        !checkCart(product) &&
                        <Button color="primary"
                            onClick={() => addProductCart(product)}
                            className="btn btn-primary btn-sm addToCartBtn">Add to cart</Button>
                    }
                </div>
            </div>
        </div>
    );
}
ProductItem.propTypes = {
    product: PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    }).isRequired
}
export default ProductItem;
