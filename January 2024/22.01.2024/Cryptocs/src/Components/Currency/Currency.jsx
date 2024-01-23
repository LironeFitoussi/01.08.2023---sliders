import React, { useState, useEffect } from 'react';
import styels from './Currency.module.css';

export default function Currency({ id, rank, symbol, name, priceUsd, addToFavorite, fav }) {
    const [idToAdd, setIdToAdd] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleClick = async () => {
        setIdToAdd(id);
        setButtonDisabled(true);
    }

    useEffect(() => {
        if (idToAdd.length > 0) {
            addToFavorite(idToAdd);
        }
    }, [idToAdd]);

    return (
        <div className={styels.cryptoContainer}>
            <h1>{name}</h1>
            <span>{symbol}</span>
            <p>Rank: {rank}</p>
            <p>Value in USD: {priceUsd}</p>
            {!fav ?
                <button onClick={handleClick} disabled={isButtonDisabled}>
                    Add to Favorites
                </button>
                :
                <button>
                    Remove from Favorites
                </button>
            }
        </div>
    );
}
