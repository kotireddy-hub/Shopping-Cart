import React from 'react';
import Layout from '../../components/Layout';

import ProductsList from './ProductsList';

const ProductStore = () => {

    return (
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="store__HeadingContainer text-center mt-5">
                    <h1>Product Store</h1>
                </div>
                <ProductsList/>
            </div>
        </Layout>
     );
}

export default ProductStore;
