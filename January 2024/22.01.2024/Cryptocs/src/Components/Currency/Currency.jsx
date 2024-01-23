import React, { useState, useEffect } from 'react';
import styles from './Currency.module.css';
import { Link } from 'react-router-dom';
import { db } from '../../Config/firebase';
import { getDocs, collection, query, where, deleteDoc } from 'firebase/firestore';

export default function Currency({ id, rank, symbol, name, priceUsd, addToFavorite, fav }) {
    const [idToAdd, setIdToAdd] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleClick = async () => {
        setIdToAdd(id);
        setButtonDisabled(true);
    }

    const handleDelete = async () => {
        try {
            const q = query(collection(db, 'favorites'), where('currency', '==', id));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });

            console.log('Document deleted successfully!');
        } catch (error) {
            console.error('Error deleting document:', error);
            // You can add additional error handling logic as needed
        }
    }

    useEffect(() => {
        if (idToAdd.length > 0) {
            addToFavorite(idToAdd);
        }
    }, [idToAdd]);

    return (
        <div className={styles.cryptoContainer}>
            <h1>{name}</h1>
            <span>{symbol}</span>
            <p>Rank: {rank}</p>
            <p>Value in USD: {priceUsd}</p>
            {!fav ?
                <button onClick={handleClick} disabled={isButtonDisabled}>
                    Add to Favorites
                </button>
                :
                <button onClick={handleDelete}>
                    Remove from Favorites
                </button>
            }

            <button>
                <Link to={`/favorites/${id}`}>Expand</Link>
            </button>
        </div>
    );
}
