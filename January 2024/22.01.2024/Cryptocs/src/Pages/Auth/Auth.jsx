import styles from './auth.module.css'
import { auth, db } from '../../Config/firebase'
import Login from '../../Components/Login/index.jsx'
import Register from '../../Components/Register/index.jsx'
import { useState, useEffect } from 'react'

export default function Auth() {
    const [logType, setLogType] = useState(true)
    return (
        <section className={styles.container}>
            {logType ? (
                <div>
                    <Login firebase={auth} />
                    <p style={{ textAlign: 'center' }}> Not a member? <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setLogType(!logType)}>Sign up now</span></p>
                </div>
            ) : (
                <div>
                    <Register auth={auth} db={db} />
                    <p style={{ textAlign: 'center' }} >Already have an Account? <b onClick={() => setLogType(!logType)}>Login...</b></p>
                </div>

            )
            }
        </section>
    )
}