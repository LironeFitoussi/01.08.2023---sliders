import styles from './TransactionsTable.module.css';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Transaction from '../Transaction';

export default function TransactionsTable({ db, currentUser }) {
    const [userDocument, setUserDocument] = useState(null);

    useEffect(() => {
        const fetchUserDocument = async () => {
            try {
                const userDocRef = doc(db, 'users', currentUser.uid);

                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    setUserDocument(userDocSnapshot.data());
                } else {
                    console.log('User document does not exist.');
                }
            } catch (error) {
                console.error('Error fetching user document: ', error);
            }
        };

        if (currentUser) {
            fetchUserDocument();
        }
        console.log(userDocument);
    }, [db, currentUser]);


    return (
        <section>
            <h1>This is Transactions Page</h1>
            {userDocument && (
                <div className={styles.transactionsTab}>
                    {userDocument.transactions.map((transaction, index) => <Transaction {...transaction} key={`tr_${index}`} />)}
                </div>
            )}
        </section>
    );
}
