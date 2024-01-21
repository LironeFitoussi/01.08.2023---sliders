import styles from './Transactions.module.css';
import { doc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
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

    const [userData, setUserData] = useState();

    const addTransaction = async () => {
        try {
            if (currentUser) {
                const userDocRef = doc(db, 'transactionsData', currentUser.transactionsPath);
                await updateDoc(userDocRef, {
                    userTransaction: arrayUnion(newTransaction),
                });

                console.log('Document added with ID: ', userDocRef.id);
            } else {
                console.error('Current user not set');
            }
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    useEffect(() => {
        if (currentUser) {
            const userDocRef = doc(db, 'users', currentUser.documentId);
            const unsubscribe = onSnapshot(userDocRef, (doc) => {
                setTransactions(doc.data().transactions || []);
            });

            setUserData(currentUser);

            return () => {
                unsubscribe();
            };
        }
    }, [db, currentUser]);

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
        const generateNewId = () => {
            return Date.now() + Math.floor(Math.random() * 1000);
        };

        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
            id: generateNewId(),
        }));
    };

    return (
        transactionsData !== null && userData !== null ? <section className={styles.transactionsContainer}>
            <h1 className={styles.mainHeader}> This is Transactions Page</h1>
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
            <TransactionsTable db={db} currentUser={userData} transactions={transactionsData} />
        </section> : <p>Loading</p>
    );
}
