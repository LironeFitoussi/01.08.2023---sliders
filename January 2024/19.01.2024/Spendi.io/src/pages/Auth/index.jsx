import styles from './Auth.module.css';
import Login from '../../components/Login';
import Register from '../../components/Register';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth({ auth, db, currentUser }) {
    const navigate = useNavigate();
    const [logType, setLogType] = useState(false);

    useEffect(() => {
        currentUser && navigate("/");
    }, [currentUser, navigate]);

    console.log(logType);
    return (
        <>
            <h1>this is Auth Page</h1>
            {logType ?
                <div>
                    <h1>Already have an Account? <b onClick={() => setLogType(!logType)}>Login...</b></h1>
                    <Register auth={auth} db={db} />
                </div>
                :

                <div>
                    <h1>Still Haven't an Account? <b onClick={() => setLogType(!logType)}>Register...</b></h1>
                    <Login auth={auth} />
                </div>
            }
        </>
    );
}
