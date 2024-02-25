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
                {orders.map((order) => (
                    <div key={order._id} className={styles.orderCard}>
                        <h2>Order ID: {order._id}</h2>
                        <p>Total Price: ${order.totalPrice}</p>
                        <p>Status: {order.status}</p>
                        <div className={styles.products}>
                            <h3>Products:</h3>
                            {order.products.map((product) => (
                                <div key={product._id} className={styles.product}>
                                    <p>Name: {product.name}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Quantity: {product.quantity}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
