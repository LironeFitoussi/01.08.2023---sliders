import { createContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (user && user.uid) {
                    const usersCollectionRef = collection(db, 'users');
                    const userQuery = query(usersCollectionRef, where('userId', '==', user.uid)); // Use user.uid
                    const userDocs = await getDocs(userQuery);
                    if (!userDocs.empty) {
                        const userDoc = userDocs.docs[0];
                        setCurrentUser({
                            uid: user.uid,
                            documentId: userDoc.id,
                            userName: userDoc.data().fName,
                        });
                    } else {
                        console.error('User document not found');
                    }
                }
            } catch (e) {
                console.error('Error fetching user document: ', e);
            }
        };

        fetchUser();
    }, [db, user]);

    useEffect(() => {
        const authStateChanged = (user) => setUser(user ? user : null); // Set user to null instead of an empty string
        const authStateChangeUnsubscribe = auth.onAuthStateChanged(authStateChanged);

        return () => authStateChangeUnsubscribe();
    }, []);

    return (
        <UserDataContext.Provider value={{ user, setUser, currentUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataContext;
