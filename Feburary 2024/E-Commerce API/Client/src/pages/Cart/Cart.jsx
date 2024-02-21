import styles from "./Cart.module.css"
import { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {UserContext} from '../../context/User';
import axios from 'axios';
export default function Cart() {
    const { userToken, user } = useContext(UserContext);
    const {id} = useParams()
    const fetchCart = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/cart/${id}`, {
                headers: {
                  Authorization: `Bearer ${userToken}` // Assuming your token is in the format "Bearer <token>"
                }
              });
            console.log(response.data.data.userCart);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCart();
    }, [])
    return (
        <div className={styles.cart}>
            <h1>Cart</h1>
            <main className={styles.userCart}>

            </main>
        </div>
    )
}