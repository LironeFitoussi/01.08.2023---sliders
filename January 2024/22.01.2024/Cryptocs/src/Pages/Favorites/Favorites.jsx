import React, { useState, useEffect } from 'react';
import { db, auth } from '../../Config/firebase.js';
import styles from './Favorites.module.css';
import { collection, query, where, getDocs } from 'firebase/firestore';

import Currency from '../../Components/Currency/Currency.jsx';

export default function Favorites() {
    const [cryptoData, setCryptoData] = useState([]);
    const [favoritesData, setFavoritesData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [user, setUser] = useState('');

    useEffect(() => {
        const authStateChanged = (user) => setUser(user ? user.uid : '');
        const authStateChangeUnsubscribe = auth.onAuthStateChanged(authStateChanged);

        return () => authStateChangeUnsubscribe();
    }, []);

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
    }, []);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favoritesCollection = collection(db, 'favorites');
                const favoritesQuery = query(favoritesCollection, where('userId', '==', user));
                const favoritesSnapshot = await getDocs(favoritesQuery);

                const favoritesArr = [];
                favoritesSnapshot.forEach((doc) => {
                    favoritesArr.push(doc.data());
                });

                setFavoritesData(favoritesArr);
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, [user]);

    useEffect(() => {
        // Compare and filter the arrays
        const filteredArray = cryptoData.filter((crypto) =>
            favoritesData.some((favorite) => favorite.currency === crypto.id)
        );

        setFilteredData(filteredArray);
    }, [cryptoData, favoritesData]);

    useEffect(() => {
        // Log the filteredData array
        filteredData.length > 0 && console.log('Filtered Data:', filteredData);
    }, [filteredData]);

    return (
        <div>
            <h1>This is Favorites Page</h1>
            {filteredData.map((coin, index) => (
                <Currency key={`crcf_${index}`} {...coin} fav={true} />
            ))}
        </div>
    );
}
