import styles from './Transactions.module.css';
import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import TransactionsTable from '../../components/TransactionsTable';

export default function Transactions({ db, user, transactionsData }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [transactions, setTransactions] = useState([]);

    const [newTransaction, setNewTransaction] = useState({
        title: '',
        category: '',
        amount: '',
        date: '',
    });

    const addTransaction = async () => {
        try {
            if (currentUser) {
                const userDocRef = doc(db, 'users', currentUser.documentId);
                await updateDoc(userDocRef, {
                    transactions: arrayUnion(newTransaction),
                });
                console.log('Document added with ID: ', userDocRef.id);

                // Fetch and update transactions after adding a new one
                const updatedUserDoc = await getDoc(userDocRef);
                setTransactions(updatedUserDoc.data().transactions || []);
            } else {
                console.error('Current user not set');
            }
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

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
            id: Math.random(),
        }));
    };

    useEffect(() => {
        transactions.length > 0 && console.log(transactions);
    }, [transactions])

    return (
        <section>

            <h1>This is Transactions Page</h1>
            {user !== null ? (
                <form onSubmit={handleSubmit}>
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
            <TransactionsTable transactions={transactionsData} />
        </section>
    );
}
