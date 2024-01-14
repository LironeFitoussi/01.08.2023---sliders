import React, { useState } from "react";
import SpendItem from "../../components/SpendItem/SpendItem";
import styles from './Spends.module.css'

export default function Spends() {
    const [spends, setSpends] = useState([
        { title: 'Example', category: 'House', amount: 450, type: 'Income' },
    ]);

    const [newSpend, setNewSpend] = useState({
        title: '',
        category: '',
        amount: 0,
        type: 'Income'
    });

    const handleChange = (e) => {
        setNewSpend((prevSpend) => {
            return {
                ...prevSpend,
                [e.target.name]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        setSpends((prevSpends) => {
            return [...prevSpends, newSpend]; // Directly push newSpend to the array
        });

        // Reset form after submission
        setNewSpend({
            title: '',
            category: '',
            amount: 0,
            type: 'Income'
        });
    };

    return (
        <section className={styles.container}>
            <h1 style={{textAlign: 'center'}}>My Spends</h1>
            <table className={styles.spendsTable}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {spends.map((spend, index) => (
                        <SpendItem key={index} {...spend} />
                    ))}
                </tbody>
            </table>
            <form className={styles.spendsForm} onSubmit={handleSubmit}>
                <h3>Add An action</h3>
                <label className={styles.inputLabel} htmlFor="title">Title:</label>
                <input type="text" name='title' onChange={handleChange} value={newSpend.title} />

                <label htmlFor="category">Category</label>
                <input type="text" name='category' onChange={handleChange} value={newSpend.category} />

                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" onChange={handleChange} value={newSpend.amount} />

                <label htmlFor="type">Type</label>
                <select name="type" onChange={handleChange} value={newSpend.type}>
                    <option value="Income">Income</option>
                    <option value="Outcome">Outcome</option>
                </select>
                <button type="submit">Validate</button>
            </form>
        </section>
    );
}
