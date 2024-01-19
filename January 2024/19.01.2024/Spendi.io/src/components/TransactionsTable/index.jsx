import styles from './TransactionsTable.module.css';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Transaction from '../Transaction';

export default function TransactionsTable({ transactions }) {

    return (
        <section>
            <h1>This is Transactions Page</h1>
            {transactions && (
                <div className={styles.transactionsTab}>
                    {transactions.map((transaction, index) => <Transaction {...transaction} key={`tr_${index}`} />)}
                </div>
            )}
        </section>
    );
}
