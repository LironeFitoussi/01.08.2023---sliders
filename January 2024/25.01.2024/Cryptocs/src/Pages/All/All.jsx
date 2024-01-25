import styles from './All.module.css';
import { useState, useEffect } from 'react';
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../../Config/firebase.js';
import Currency from '../../Components/Currency/Currency';

export default function All({user, favorites}) {
  const [cryptoData, setCryptoData] = useState([]);

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

  return (
    <>
      {cryptoData && (
        <>
          <h1 style={{color: '#fff', textAlign: 'center', marginTop: '10vh' }}>Crypto Currencies</h1>
          <div className={styles.cryptoTable}>
            {cryptoData.map((coin, index) => (
              <Currency addToFavorite={addToFavorite} favData={favorites} userId={user} key={`crc_${index}`} {...coin} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
