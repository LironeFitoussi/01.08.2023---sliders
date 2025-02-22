import styles from './TransactionsTable.module.css';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Transaction from '../Transaction';

export default function TransactionsTable({ transactions, removeTransaction }) {

    return (
        <section>
            {transactions && (
                <div className={styles.transactionsTab}>
                    {transactions.map((transaction, index) => <Transaction {...transaction} key={`tr_${index}`} removeTransaction={removeTransaction}/>)}
                </div>
            )}
        </section>
    );
}
