import styles from './UserCreations.module.css'
import userDataProvider from '../../context/UserData';
import { useEffect, useState, useContext } from 'react'
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';

export default function UserCreations() {
    const { currentUser } = useContext(userDataProvider);
    const { user } = useContext(userDataProvider);
    const [resumeData, setResumeData] = useState();

    useEffect(() => {
        // console.log(user);
        if (user) {
            try {
                const resumeCollectionRef = collection(db, 'resumes');
                const resumeQuery = query(resumeCollectionRef, where('userId', '==', user.uid));

                onSnapshot(resumeQuery, async (snapshot) => {
                    const resumeData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setResumeData(resumeData);
                });

                console.log('Data fetched succefully!');
            } catch (err) {
                console.error('An error ocured: ' + err);
            }
        }
    }, [user])

    return (
        <section>
            <h1>This is user creations page</h1>
            <p>User recent creations should be displayed here next:</p>
        </section>
    )
}