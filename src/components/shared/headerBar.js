import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { CartContext } from '../../contexts/CartContext';

import {CartIcon} from '../icons';
import styles from './headerBar.module.scss';

const HeaderBar = () => {

    const {totalItems, user, logOut} = useContext(CartContext);

    return (
        <header className={styles.headerBar}>
            <Link to='/'>Products Store</Link>
            <Link to='/cart'> <CartIcon/> Cart ({totalItems})</Link>
            {!user &&
              <React.Fragment>
                <Link to='/register'> Register / Sign Up </Link>
                <Link to='/login'> Login </Link>
              </React.Fragment>
            }
            {user && <Link to='/' onClick={logOut}> Logout </Link> }
        </header>
     );
}

export default HeaderBar;
