import styles from './Auth.module.css'
import SignUpComp from '../../components/SignUpComp/SignUpComp.jsx'
import SignInComp from '../../components/SignInComp/SignInComp'
import { useState } from 'react'


export default function Auth () {
    const [userExist, setUserExist] = useState(true);

    return (
        <section>
            {userExist? <SignInComp/> : <SignUpComp />}
        </section>
    )
}