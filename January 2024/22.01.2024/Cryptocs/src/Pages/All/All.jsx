import styles from './All.module.css';
import { useState, useEffect } from 'react';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../../Config/firebase.js';
import Currency from '../../Components/Currency/Currency';

export default function All() {
  const [cryptoData, setCryptoData] = useState([]);
  const [user, setUser] = useState('');
  const [favoritesData, setFavoritesData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '93ceb527-91ae-44e4-961b-d826b53299b4';
        const apiUrl = 'https://api.coincap.io/v2/assets';

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setCryptoData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    const fetchFavorites = () => {
        try {
            const favoritesCollection = collection(db, 'favorites');
            const favoritesQuery = query(favoritesCollection, where('userId', '==', user));

            const unsubscribe = onSnapshot(favoritesQuery, (snapshot) => {
                const favoritesArr = [];
                snapshot.forEach((doc) => {
                    favoritesArr.push(doc.data());
                });
                console.log(favoritesArr);
                setFavoritesData(favoritesArr);
            });

            // Cleanup the listener when the component unmounts
            return () => unsubscribe();
        } catch (error) {
            console.error('Error fetching favorites:', error);
        }
    };

    if (user) {
        fetchFavorites();
    }
}, [user]);

  const addToFavorite = async (id) => {
    try {
      console.log(user);
      const docRef = await addDoc(collection(db, 'favorites'), {
        userId: user,
        currency: id,
      });
      console.log(`Item successfully added to favorites.`);
    } catch (err) {
      console.error('Unable to add item to favorites ' + err);
    }
  };

  useEffect(() => {
    const authStateChanged = (user) => setUser(user ? user.uid : '');
    const authStateChangeUnsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => authStateChangeUnsubscribe();
  }, []);

  return (
    <>
      {cryptoData && (
        <>
          <h1 style={{ textAlign: 'center' }}>Crypto Currencies</h1>
          <div className={styles.cryptoTable}>
            {cryptoData.map((coin, index) => (
              <Currency addToFavorite={addToFavorite} favData={favoritesData} userId={user} key={`crc_${index}`} {...coin} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
