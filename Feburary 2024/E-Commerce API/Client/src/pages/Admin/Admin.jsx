import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from './CreateProduct.jsx';
import styles from './Admin.module.css';
import { Link } from "react-router-dom";
 
export default function Admin() {
    return (       
        <main className={styles.mainContainer}>              
                
                <Routes>
                    <Route path='/' element={
                        <>
                        <aside>
                            <h1>Admin Panel</h1>
                            <nav className={styles.nav}>
                                <ul className={styles.ul}>
                                    <li className={styles.li}>
                                        <Link to="/" className={styles.link}>Home</Link>
                                    </li>
                                    <li className={styles.li}>
                                        <Link to="/admin/create-product" className={styles.link}>Create Product</Link>
                                    </li>
                                </ul>
                            </nav>
                        </aside>
                        <div className={styles.admin}>
                            <h1 className={styles.header}>Admin Page</h1>
                        </div></>
                    }/>
                    <Route path='/create-product' element={<CreateProduct />} />
                </Routes>
        </main>
    )
}
