import styles from './All.module.css'
import { useState, useEffect } from 'react';

import Currency from '../../Components/Currency/Currency';

export default function All () {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiKey = '93ceb527-91ae-44e4-961b-d826b53299b4';
            const apiUrl = 'https://api.coincap.io/v2/assets';
    
            const response = await fetch(apiUrl, {
              headers: {
                'Authorization': `Bearer ${apiKey}`,
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
        cryptoData !== [] &&  console.log(cryptoData)
      }, [cryptoData])

    // todo: after auth done set add to favorites  
      const addToFavorite = (id) => {

      }

    return (
        cryptoData !== [] && <>
            <h1>This is All Page</h1>
            <div className={styles.cryptoTable}>
                {cryptoData.map((coin, index) => {
                    return (
                        <Currency addToFavorite={addToFavorite} key={`crc_${index}`} {...coin}/>
                    )
                })}
            </div>
        </>
    )
}