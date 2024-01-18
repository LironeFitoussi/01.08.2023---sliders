import React, { useEffect } from 'react';
import styles from './SpendItem.module.css';

export default function SpendItem(props) {
    

    const className = props.type === 'Income' ? styles.income : styles.outcome;

    const handleClick = () => {
        
        props.onDelete(props.id);
    };

    return (
        <tr className={className}>
            <td>{props.title}</td>
            <td>{props.category}</td>
            <td>{props.amount}</td>
            <td>{props.type}</td>
            <td><button onClick={handleClick}>Delete</button></td>
        </tr>
    );
}
