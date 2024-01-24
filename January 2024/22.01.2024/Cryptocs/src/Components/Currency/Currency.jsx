import React, { useState, useEffect } from 'react';
import styles from './Currency.module.css';
import { Link } from 'react-router-dom';
import { db } from '../../Config/firebase';
import { getDocs, collection, query, where, deleteDoc } from 'firebase/firestore';

export default function Currency({userId, id, rank, symbol, name, priceUsd, addToFavorite, favData }) {
    const [idToAdd, setIdToAdd] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [favNames, setFavNames] = useState();
    const [isFav, setIsFav] = useState(false);

    
useEffect(() => {
    favData && setFavNames(favData.map((favItem) => favItem.currency));
}, [favData]);

useEffect(() => {
    favNames && id && setIsFav(favNames.includes(id));
}, [favNames, id]);

    const handleClick = async () => {
        setIdToAdd(id);
        setButtonDisabled(true);
    };

    const handleDelete = async () => {
        try {
            const q = query(collection(db, 'favorites'), where('currency', '==', id), where('userId', '==', userId ));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });

            console.log('Document deleted successfully!');
        } catch (error) {
            console.error('Error deleting document:', error);
            // You can add additional error handling logic as needed
        }
    };

    useEffect(() => {
        if (idToAdd.length > 0) {
            addToFavorite(idToAdd);
        }
    }, [idToAdd]);

    return (
        <div className={styles.cryptoContainer}>
            <div className={styles.currencyHeader}>
                <h1>{name}</h1>
                <Link to={`/favorites/${id}`}>
                    <img
                        style={{
                            width: '2rem',
                            backgroundColor: 'rgb(255 255 255 / 10%)',
                            borderRadius: '.5rem',
                        }}
                        src="/images/expand-logo.png"
                        alt=""
                    />
                </Link>
            </div>
            <span>{symbol}</span>
            <p>Rank: {rank}</p>
            <p>Value in USD: {priceUsd}</p>
            {!isFav ? (
                <button className="button" onClick={handleClick} disabled={isButtonDisabled}>
                    Add to Favorites
                </button>
            ) : (
                <button style={{ backgroundColor: 'red' }} className="button" onClick={handleDelete}>
                    Remove from Favorites
                </button>
            )}
        </div>
    );
}
