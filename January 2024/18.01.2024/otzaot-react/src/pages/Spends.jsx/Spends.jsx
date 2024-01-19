import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import SpendItem from "../../components/SpendItem/SpendItem";
import styles from "./Spends.module.css";
import { collection, getDocs, where, query, doc, updateDoc } from "firebase/firestore";

const Spends = () => {
  const [users, setUsers] = useState([]);
  const [spends, setSpends] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState();
  const [newSpend, setNewSpend] = useState({
    title: "",
    category: "",
    amount: 0,
    type: "",
  });

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getDbData = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDbData();
  }, []);

  useEffect(() => {
    const foundUser = users.find((user) => user.id === userId);
  }, [users, userId]);

  const handleChange = (e) => {
    setNewSpend((prevSpend) => {
      return {
        ...prevSpend,
        [e.target.name]: e.target.value,
      };
    });
  };

  const generateNewId = () => {
    // Generate a unique ID using timestamp and a random number
    return Date.now() + Math.floor(Math.random() * 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      newSpend.title !== "" &&
      newSpend.category !== "" &&
      newSpend.amount !== 0 &&
      newSpend.type !== "";
    
    if (isValid) {
        const userDoc = doc(db, 'users', userData.docId)
        const newSpends = {spendsData: spendsData.push(newSpend)}
        await updateDoc(userDoc, newSpend)
    }
  };

  useEffect(() => {
    const getUserData = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
            const userID = user.uid;
            setUserId(userID);

            const userQuery = query(
                usersCollectionRef,
                where("id", "==", userID)
            );
            const userSnapshot = await getDocs(userQuery);
            const userData = userSnapshot.docs.map((doc) => {
                return {...doc.data(), docId: doc.id}
            });
                setUserData(userData)
            } else {
                console.error("No user found, Please Log In");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    getUserData();
  }, [usersCollectionRef]);

  return (
    <section className={styles.container}>
      <h1>Hello,</h1>
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
      {userId && (
        <form className={styles.spendsForm} onSubmit={handleSubmit}>
          <h3 style={{ color: "black" }}>Add An action</h3>
          <label className={styles.inputLabel} htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={newSpend.title}
          />

          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
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
          <select name="type" onChange={handleChange} required>
            <option> -- Select Type --</option>
            <option value="Income">Income</option>
            <option value="Outcome">Outcome</option>
          </select>
          <button type="submit">Validate</button>
        </form>
      )}
    </section>
  );
};

export default Spends;
