import styles from './SingleCurrency.module.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ApexChart from '../../Components/ApexChart/ApexChart';
export default function SingleCurrency() {
    const [cryptoData, setCryptoData] = useState();
    const [coinHistory, setCoinHistory] = useState();
    const [usdAmount, setUsdAmount] = useState(1); // Added state for usdAmount
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = '93ceb527-91ae-44e4-961b-d826b53299b4';
                const apiUrl = 'https://api.coincap.io/v2/assets/' + id;

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
    }, [id]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const apiKey = '93ceb527-91ae-44e4-961b-d826b53299b4';
                const apiUrl = 'https://api.coincap.io/v2/assets/' + id + '/history?interval=' + 'd1';

                const response = await fetch(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                setCoinHistory(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchHistory();
    }, [id]);

    useEffect(() => {
        cryptoData && console.log(cryptoData);
        coinHistory && console.log(coinHistory);
    }, [cryptoData, coinHistory]);

    const handleUsdAmountChange = (e) => {
        console.log(typeof e.target.value);
        const amount = parseFloat(e.target.value);
        if (amount < 0) {
            setUsdAmount(0);
        } else if (e.target.value.length === 0) {
            setUsdAmount('empty')
        } else {
            setUsdAmount(amount);
        }
    };

    return (
        cryptoData && (
            <section className={styles.container}>
                <div className={styles.currencyHeader}>
                    <h1>{cryptoData.name}</h1>
                    <span>{`(${cryptoData.symbol})`}</span>
                    <p className={styles.change24}>{cryptoData.changePercent24Hr}</p>
                </div>
                <p className={styles.coinSupply}>
                    Supply: {parseInt(cryptoData.supply).toFixed(2)} / {parseInt(cryptoData.maxSupply).toFixed(2)}
                </p>
                <h2>USD Value</h2>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="number"
                                    value={usdAmount}
                                    onChange={handleUsdAmountChange} // Added onChange handler
                                />
                            </th>
                            <th>{typeof usdAmount === 'number' ? parseFloat(cryptoData.priceUsd * usdAmount).toFixed(2) : 'Please enter a valid Number'}</th>
                        </tr>
                    </thead>
                </table>

                <ApexChart coinHistory={coinHistory} />
            </section>
        )
    );
}
