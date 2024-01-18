import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import SpendItem from "../../components/SpendItem/SpendItem";
import styles from './Spends.module.css'
import { db } from "../../config/firebase";
import { collection, getDocs } from 'firebase/firestore'


export default function Spends() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users');

    useEffect(() => {
    const getDbData = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    }

    getDbData();
    }, []);

    useEffect(() => {
        console.log(users);
    }, [users]);
    

    const [spends, setSpends] = useState([]);
    const [userData, setUserData] = useState('Loading...');

    const [newSpend, setNewSpend] = useState({
        title: '',
        category: '',
        amount: 0,
        type: '',
    });

    useEffect(() => {
        const budgetData = JSON.parse(localStorage.getItem('userBudget'));
        budgetData && setSpends(budgetData);
    }, []);
    

    useEffect(() => {
        localStorage.setItem('userBudget', JSON.stringify(spends))
    }, [spends])

    const handleChange = (e) => {
        setNewSpend((prevSpend) => {
            return {
                ...prevSpend,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = newSpend.title !== '' && newSpend.category !== '' && newSpend.amount !== 0 && newSpend.type !== ''
        if (isValid) {
            setSpends((prevSpends) => {
                return [...prevSpends, {...newSpend, id: generateNewId()}];
            });
            e.target.reset()
        }
    };

    // ID Generation for Each new Expence
    let lastID;
    const generateNewId = () => {
        for (let i = 1; i < spends.length + 2; i++) {
            if (!spends.some((spend) => spend.id === i)) {
                lastID = i;
                break;
            }
        }
        return lastID;
    }

    // Item Deleting Function
    const deleteItem = (spendId) => {
        const newSpends = spends.filter((item) => item.id !== spendId);
        setSpends(newSpends);
    };


    const getUserData = async () => {
        try {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    console.log(user);
                    const userEmail = user.email;
                    if (userEmail) {
                        setUserData(userEmail);
                    } else {
                        throw new Error("User email is null or undefined");
                    }
                } else {
                    setUserData('No user found, Please Log In');
                    throw new Error("User is null or undefined");
                }
            });
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    
    useEffect(() => {
        getUserData();
    }, []);


    return (
        <section className={styles.container}>
            <h1>Hello, {` ${users[0]?.fName}`}</h1>     
            <table className={styles.spendsTable}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {spends.map((spend, index) => (
                        <SpendItem key={index} onDelete={deleteItem} {...spend} />
                    ))}
                </tbody>
            </table>
            {userData && 
            <form className={styles.spendsForm} onSubmit={handleSubmit}>
            <h3 style={{color: 'black'}}>Add An action</h3>
            <label className={styles.inputLabel} htmlFor="title">Title:</label>
            <input 
                type="text" 
                name='title' 
                onChange={handleChange} 
                value={newSpend.title} 
            />

            <label htmlFor="category">Category</label>
            <input 
                type="text" 
                name='category' 
                onChange={handleChange}
                value={newSpend.category} 
            />

            <label htmlFor="amount">Amount</label>
            <input 
                type="number" 
                name="amount" 
                onChange={handleChange} 
                value={newSpend.amount} 
            />

            <label htmlFor="type">Type</label>
            <select 
                name="type" 
                onChange={handleChange} 
                required>
                <option> -- Select Type --</option>
                <option value="Income">Income</option>
                <option value="Outcome">Outcome</option>
            </select>
            <button type="submit">Validate</button>
        </form>
        }
        </section>
    );
}
