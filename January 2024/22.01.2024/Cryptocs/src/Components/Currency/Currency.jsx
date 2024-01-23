import styels from './Currency.module.css'
import { useState, useEffect } from 'react'

export default function Currency({ id, rank, symbol, name, priceUsd, addToFavorite }) {
    const [idToAdd, setIdToAdd] = useState('');

    const handleClick = async () => {
        setIdToAdd(id);
        console.log(id);
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
            <button onClick={() => handleClick()}>Add to Favorites</button>
        </div>
    )
}