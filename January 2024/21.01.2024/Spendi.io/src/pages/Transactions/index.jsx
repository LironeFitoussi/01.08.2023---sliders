import styles from './Transactions.module.css';
import { doc, collection, getDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import TransactionsTable from '../../components/TransactionsTable';

export default function Transactions({ db, user, currentUser, transactionsData }) {
    const [transactions, setTransactions] = useState([]);

    const [newTransaction, setNewTransaction] = useState({
        title: '',
        category: '',
        amount: '',
        date: '',
    });

    useEffect(() => {
        setTransactions(transactionsData)
    }, [transactionsData])


    const addTransaction = async () => {
        try {
            if (currentUser) {
                const transactionDataRef = collection(db, 'transactionsData');

                const newTransactionData = {
                    ...newTransaction,
                    userId: currentUser.uid,
                };

                await addDoc(transactionDataRef, newTransactionData);
                console.log('Document added');
            } else {
                console.error('Current user not set');
            }
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    const removeTransaction = async (transactionId) => {
        try {
            if (currentUser) {
                const transactionDataRef = doc(db, 'transactionsData', transactionId);
                await deleteDoc(transactionDataRef);
                console.log('Transaction removed');
            } else {
                console.error('Current user not set');
            }
        } catch (error) {
            console.error("Error removing transaction:", error);
        }
    };


    useEffect(() => {
        if (currentUser) {
            const userDocRef = doc(db, 'users', currentUser.documentId);
            const fetchTransactions = async () => {
                const updatedUserDoc = await getDoc(userDocRef);
                setTransactions(updatedUserDoc.data().transactions || []);
            }

            fetchTransactions()
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction();
        setNewTransaction({
            title: '',
            category: '',
            amount: '',
            date: '',
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };

    return (
        <section className={styles.transactionsContainer}>
            <h1 className={styles.mainHeader}> This is Transactions Page</h1>
            {user !== null ? (
                <form className={styles.transactionForm} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newTransaction.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        name="category"
                        value={newTransaction.category}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        value={newTransaction.amount}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        placeholder="Date"
                        name="date"
                        value={newTransaction.date}
                        onChange={handleChange}
                    />
                    <button>Add Transaction</button>
                </form>
            ) : <h1>You need to log in before...</h1>}
            <TransactionsTable transactions={transactions} removeTransaction={removeTransaction} />
        </section>
    );
}
