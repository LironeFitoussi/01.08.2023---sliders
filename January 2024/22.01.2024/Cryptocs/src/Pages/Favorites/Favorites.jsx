import { useState, useEffect } from 'react';
import styles from './Favorites.module.css';
import Currency from '../../Components/Currency/Currency.jsx';

export default function Favorites({user, favorites}) {
    const [cryptoData, setCryptoData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

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
        const filteredArray = cryptoData.filter((crypto) =>
            favorites.some((favorite) => favorite.currency === crypto.id)
        );

        setFilteredData(filteredArray);
    }, [cryptoData, favorites]);

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Your Favorite Coins</h1>
            <div className={styles.container}>

                {filteredData.map((coin, index) => (
                    <Currency key={`crcf_${index}`} {...coin} userId={user} favData={favorites} />
                ))}
            </div>
        </>
    );
}
