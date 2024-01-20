import styles from './Auth.module.css'
import Login from '../../components/Login'
import Register from '../../components/Register'

export default function Auth({ auth, db }) {
    return (
        <>
            <h1>this is Auth Page</h1>
            <Register auth={auth} db={db} />
            <Login auth={auth} />
        </>
    )
}