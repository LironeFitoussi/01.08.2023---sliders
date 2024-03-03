import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/User';
import styles from './Orders.module.css';

const Orders = ({ userId }) => {
    const { userToken, user } = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user._id) {
                return; // Exit early if userId is undefined
            }
    
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/v1/orders/${user._id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                        },
                    }
                );
                console.log(response.data.data.userOrders);
                setOrders(response.data.data.userOrders);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchOrders();
    }, []);

    return (
        <div className={styles.ordersContainer}>
            <h1>Your Orders</h1>
            <div className={styles.orders}>
                {orders.map(({products, _id, totalPrice, status}) => (
                    <div key={products._id} className={styles.orderCard}>
                        <h2>Order ID: {_id}</h2>
                        <p>Total Price: ${totalPrice}</p>
                        <p>Status: {status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
