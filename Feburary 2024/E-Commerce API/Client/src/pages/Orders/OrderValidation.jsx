import styles from './OrderValidation.module.css'
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/User";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function OrderValidation() {
    const { userToken, user } = useContext(UserContext);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const cart = searchParams.get('cart');

    useEffect(() => {
        if (user && userToken) {
            console.log(cart);
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/v1/orders/order-validation',
                headers: { 
                    'Authorization': `Bearer ${userToken}`, 
                    'Content-Type': 'application/json'
                },
                params: {
                    cart: cart
                }
            };
            
            console.log(config.params);
            axios.request(config)
                .then((response) => {
                    console.log((response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user, userToken, cart]);
    
    return (
        <div>
            <h1>Pending</h1>
        </div>
    );
}
