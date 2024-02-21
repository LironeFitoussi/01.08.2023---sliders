import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from './CreateProduct.jsx';
import styles from './Admin.module.css';

export default function Admin() {
    return (       
        <main className={styles.mainContainer}>  
            <p>test</p>
            
            <div className={styles.adminContent}>
                <aside>
                    <h1>Admin Panel</h1>
                    <h3>👇Here is where all Admin Panel should be displayed👇</h3>
                </aside>
                <Routes>
                    <Route path='/' element={
                        <div className={styles.admin}>
                            <h1 className={styles.header}>Admin Page</h1>
                        </div>
                    }/>
                    <Route path='/create-product' element={<CreateProduct />} />
                </Routes>
            </div>
        </main>
    )
}
