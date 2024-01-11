import { useState } from "react";

export default function Groceries() {
    const [groceries, setGroseries] = useState([
        'Banana',
        'Apple',
        'milk',
        'juice',
        'cigarrets'
    ]);

    const addGorcery = () => {
        // groceries.push('tomato')
        setGroseries([...groceries, 'vodka'])
    };

    return (
        <div>
            <button onClick={addGorcery}></button>
            <h1>Grocerie List</h1>
            <ul>
                {
                    groceries.map((item, index) => {
                        return <li key={`gr_${index}`}>{item}</li>
                    })}
            </ul>
        </div>
    )
};