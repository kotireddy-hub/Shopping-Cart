import React from 'react';
import HeaderBar from './shared/headerBar';


import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
    return (
        <>
        <HeaderBar/>
        <main className="container">
            {children}
        </main>
        </>
     );
}

export default Layout;
