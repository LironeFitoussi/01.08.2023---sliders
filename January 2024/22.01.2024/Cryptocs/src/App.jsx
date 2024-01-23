import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth, db } from './Config/firebase';
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';

import SingleCurrency from './Pages/SingleCurrency/SingleCurrency.jsx';
import Home from './Pages/Home/Home.jsx';
import All from './Pages/All/All.jsx';
import Favorites from './Pages/Favorites/Favorites.jsx';
import Auth from './Pages/Auth/Auth.jsx';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer.jsx';

import './App.css'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const usersCollectionRef = collection(db, 'users');

        if (user) {
          const userQuery = query(usersCollectionRef, where('userId', '==', user));
          const userDocs = await getDocs(userQuery);

          if (userDocs.size > 0) {
            const userDoc = userDocs.docs[0];
            setCurrentUser({
              uid: user,
              documentId: userDoc.id,
              userName: userDoc.data().fName,
            });

            const favoritesCollectionRef = collection(db, 'favorites');
            const favoritesQuery = query(favoritesCollectionRef, where('userId', '==', user));

            onSnapshot(favoritesQuery, async (snapshot) => {
              const favoritesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
              setFavorites(favoritesData); // Update the favorites state
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
    const authStateChanged = (user) => setUser(user ? user.uid : '');
    const authStateChangeUnsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => authStateChangeUnsubscribe();
  }, []);


  return (
    <BrowserRouter>
      <Navbar userData={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" currentUser={currentUser} element={<All />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/favorites/:id" element={<SingleCurrency favorites={favorites} />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
