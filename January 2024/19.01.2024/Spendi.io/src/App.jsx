import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { app, db, auth } from './config/firebase';
import { collection, query, where, getDocs, getDoc, doc, onSnapshot } from 'firebase/firestore';
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
          const userDoc = userDocs.docs[0];
          setCurrentUser({
            uid: user,
            documentId: userDoc.id,
            userName: userDoc.data().fName,
            transactionsPath: userDoc.data().transactions
          });

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
    const fetchData = async () => {
      if (currentUser) {
        const docRef = doc(db, "transactionsData", currentUser.transactionsPath);
  
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            setTransactions(docSnap.data().userTransaction || []);
          } else {
            console.log("No such document!");
          }
        });
  
        // Cleanup function to unsubscribe when the component unmounts
        return () => unsubscribe();
      }
    };
  
    fetchData();
  }, [currentUser]);
  

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
  
  return (
    (
      currentUser && <BrowserRouter>
        <nav>
          <ul>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
            </div>
            {user === null ? (
              <li>
                <Link to="/auth">Auth</Link>
              </li>
            ) : <li style={{ justifySelf: 'right' }}><p style={{ margin: 0 }}>Welcome back, {currentUser?.userName} <b onClick={logOut}>Logout?</b></p></li>}
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
