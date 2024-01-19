import styles from './Transactions.module.css'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useState } from 'react';
import TransactionsTable from '../../components/TransactionsTable';
export default function Transactions({ db }) {
    //todo set current user after auth done 
    const currentUser = {
        uid: '1ChGPYTF8BdFJYRp48ki'
    }

    const [newTransaction, setNewTransaction] = useState({
        title: '',
        category: '',
        amount: '',
        date: '',
    });

    const addTransaction = async () => {
        try {
            const userDocRef = doc(db, 'users', currentUser.uid);
            await updateDoc(userDocRef, {
                transactions: arrayUnion(newTransaction),
            });
            console.log('Document added with ID: ', userDocRef.id);
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
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
            id: Math.random()
        }));
    };

    return (
        <section>
            <h1>This is Transactions Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" name="title" value={newTransaction.title} onChange={handleChange} />
                <input type="text" placeholder="Category" name="category" value={newTransaction.category} onChange={handleChange} />
                <input type="number" placeholder="Amount" name="amount" value={newTransaction.amount} onChange={handleChange} />
                <input type="date" placeholder="Date" name="date" value={newTransaction.date} onChange={handleChange} />
                <button>Add Transaction</button>
            </form>
            <TransactionsTable db={db} currentUser={currentUser} />

        </section>
    )
}