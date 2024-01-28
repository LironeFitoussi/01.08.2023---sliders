// UserDataContext.js
import { createContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase.js'
const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authStateChanged = (user) => setUser(user ? user.uid : '');
        const authStateChangeUnsubscribe = auth.onAuthStateChanged(authStateChanged);

        return () => authStateChangeUnsubscribe();
    }, []);
    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataContext;