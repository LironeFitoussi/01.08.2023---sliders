import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { db, auth } from './config/firebase';
import { signOut } from 'firebase/auth';

// Pages Import
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Auth from './pages/Auth';
import Header from './components/Header/Header';

const App = () => {
  const [user, setUser] = useState(null);
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
          });

          setTransactions(userDoc.data().transactions || []);
        } else {
          console.error('User document not found');
        }
      } catch (e) {
        console.error('Error fetching user document: ', e);
      }
    };

    if (user) {
      fetchUser();
    }
  }, [db, user]);

  useEffect(() => {
    const authStateChanged = (user) => setUser(user ? user.uid : null);
    const authStateChangeUnsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => authStateChangeUnsubscribe();
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      window.location.reload();
    });
  };

  useEffect(() => {
    const fetchTransactions = () => {
      try {
        if (currentUser) {
          const transactionsCollectionRef = collection(db, 'transactionsData');
          const transactionsQuery = query(transactionsCollectionRef, where('userId', '==', currentUser.uid));

          const unsubscribe = onSnapshot(transactionsQuery, (snapshot) => {
            const userTransactions = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setTransactions(userTransactions);
          });

          return () => unsubscribe();
        }
      } catch (e) {
        console.error('Error fetching transactions: ', e);
      }
    };

    fetchTransactions();
  }, [db, currentUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/transactions"
          element={<Transactions db={db} user={user} transactionsData={transactions} currentUser={currentUser} />}
        />
        <Route path="/auth" element={<Auth auth={auth} db={db} currentUser={currentUser} />} />
      </Routes>
      <Header logOut={logOut} currentUser={currentUser} user={user}/>
    </BrowserRouter>
  );
};

export default App;
