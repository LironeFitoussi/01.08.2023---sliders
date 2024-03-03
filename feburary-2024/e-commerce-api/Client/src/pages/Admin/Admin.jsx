import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import CreateProduct from './CreateProduct.jsx';
import AdminStats from './AdminStats.jsx'; // Assuming you have a Stats component
import styles from './Admin.module.css';

export default function Admin() {
    return (       
        <main className={styles.mainContainer}>
            <div className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/admin/create-product" className={styles.link}>Create Product</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/admin/admin-stats" className={styles.link}>Stats</Link>
                    </li>
                    <li className={styles.li}>
                        {/* TODO: implemet */}
                        <Link to="/admin" className={styles.link}>Users</Link>
                    </li>
                    <li className={styles.li}>
                        {/* TODO: implemet */}
                        <Link to="/admin" className={styles.link}>Manage Products</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/admin/create-product" element={<CreateProduct />} />
                <Route path="/admin/admin-stats" element={<AdminStats />} />
                {/* Add more routes as needed */}
            </Routes>
        </main>
    )
}
