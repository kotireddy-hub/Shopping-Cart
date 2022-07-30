import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


const PageNotFound = () => {

    return (
        <Layout>
            <div className="mt-5 text-center pageNotFoundContainer">
                <h1>
                    Oops, The page you are looking for is not available.
                </h1>
                <p className="mt-4">This is the 404 Page.</p>
                <Link to="/" className="">Go to HomePage</Link>
            </div>
        </Layout>
    );
}

export default PageNotFound;