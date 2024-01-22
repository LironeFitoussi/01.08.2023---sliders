import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth, db } from './Config/firebase';
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';

import Home from './Pages/Home/Home.jsx';
import All from './Pages/All/All.jsx';
import Favorites from './Pages/Favorites/Favorites.jsx';
import Auth from './Pages/Auth/Auth.jsx';
import Navbar from './Components/Navbar/Navbar';

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

  useEffect(() => {
    currentUser !== null && console.log(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (favorites.length > 0) {
      console.log('Favorites have changed:', favorites);
    }
  }, [favorites]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />} // Pass the favorites to the Favorites component
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
