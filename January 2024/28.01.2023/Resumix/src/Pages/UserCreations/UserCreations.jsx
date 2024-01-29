import styles from './UserCreations.module.css'
import { db } from '../../config/firebase'
import userDataProvider from '../../context/UserData';
import { useEffect, useState, useContext } from 'react'


export default function UserCreations() {
    const { currentUser } = useContext(userDataProvider);
    console.log(currentUser);

    return (
        <section>
            <h1>This is user creations page</h1>
            <p>User recent creations should be displayed here next:</p>
        </section>
    )
}