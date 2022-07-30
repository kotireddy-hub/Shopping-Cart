import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Container, Row, Col } from 'reactstrap';
import './ProductsGrid.scss';

const ProductsList = () => {

    const { storeproducts} = useContext(ProductsContext)
    
    return (
        <div className="product-container">
            <div className="row">
                <div className="col-sm-10">
                    <div className="py-3">
                        Total Products - {storeproducts.length}
                    </div>
                </div>
            </div>
            <Container>
              <Row xs="3">
                {
                    storeproducts.map(product => (
                        <Col key={product.code}><ProductItem product={product}/></Col>
                    ))
                }
              </Row>
            </Container>
        </div>
     );
}

export default ProductsList;
