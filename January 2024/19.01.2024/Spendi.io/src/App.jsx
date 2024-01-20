import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { app, db, auth } from './config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { signOut } from "firebase/auth";

// Pages Import
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Auth from './pages/Auth';

export default function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const usersCollectionRef = collection(db, 'users');
        const userQuery = query(usersCollectionRef, where('userId', '==', user));
        const userDocs = await getDocs(userQuery);

        if (userDocs.size > 0) {
          // Assuming there is only one user document for a given userId
          const userDoc = userDocs.docs[0];
          setCurrentUser({
            uid: user,
            documentId: userDoc.id,
            userName: userDoc.data().fName
          });

          // Fetch and set transactions
          setTransactions(userDoc.data().transactions || []);
        } else {
          console.error('User document not found');
        }
      } catch (e) {
        console.error('Error fetching user document: ', e);
      }
    };

    if (typeof user === 'string') {
      fetchUser();
    }
  }, [db, user]);

  useEffect(() => {
    setUserName(user)
    const authStateChanged = (user) => {
      setUser(user ? user.uid : null);
    };
    const authStateChangeUnsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => authStateChangeUnsubscribe();
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      window.location.reload();
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  currentUser && console.log(currentUser?.userName);
  return (
    (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
            {user === null ? (
              <li>
                <Link to="/auth">Auth</Link>
              </li>
            ) : <li><p>Welcome back, {currentUser?.userName} </p><b onClick={logOut}>Logout?</b></li>}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
            <Home />}
          />
          <Route path="/transactions" element={
            <Transactions
              app={app}
              db={db}
              userId={user}
              user={user}
              transactionsData={transactions}
              currentUser={currentUser}
            />}
          />
          <Route path="/auth" element={
            <Auth
              auth={auth}
              db={db}
              currentUser={currentUser}
            />}
          />
        </Routes>
      </BrowserRouter>
    )
  );
}
