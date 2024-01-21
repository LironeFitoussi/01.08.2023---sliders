import styles from './TransactionsTable.module.css';
import { useState, useEffect } from 'react';
import Transaction from '../Transaction';
import { updateDoc, doc } from 'firebase/firestore';

export default function TransactionsTable({ transactions, currentUser, db }) {
    const [indexToDelete, setIndexToDelete] = useState('');
    const [updatedTransactions, setUpdatedTransactions] = useState(transactions);
    const [userData, setUserData] = useState();

    useEffect(() => {
        // console.log(userData);
        const deleteUserObject = async (currentUser, newArray) => {
            try {
                console.log(userData);
                if (currentUser) {
                    const userDocRef = doc(db, 'transactionsData', currentUser.transactionsPath );
                    await updateDoc(userDocRef, {
                        userTransaction: newArray
                    });
                    console.log('Object deleted successfully');
                } else {
                    console.error('User not found');
                }
            } catch (error) {
                console.error('Error deleting object:', error);
            }
        };

        if (indexToDelete !== '' && updatedTransactions && userData) {
            console.log(`Deleting transaction with ID: ${indexToDelete}`);
            const newTransactions = transactions.filter(
                (transaction) => transaction.id !== indexToDelete
            );
            setIndexToDelete('');
            deleteUserObject(userData, newTransactions);
        }

        return () => {
            setUpdatedTransactions([]);
        };

    }, [indexToDelete, userData]);

    useEffect(() => {
        currentUser && setUserData(currentUser)
    }, [currentUser])
    // useEffect(() => {
    //     console.log(currentUser);
    // }, [currentUser])
    return (
        <section>
            {transactions && (
                <div className={styles.transactionsTab}>
                    {transactions.map((transaction, index) => (
                        <Transaction
                            indexDeleter={setIndexToDelete}
                            {...transaction}
                            key={`tr_${index}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
