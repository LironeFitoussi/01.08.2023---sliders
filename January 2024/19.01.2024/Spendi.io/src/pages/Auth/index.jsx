import styles from './Auth.module.css';
import Login from '../../components/Login';
import Register from '../../components/Register';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Auth({ auth, db, currentUser }) {
    const navigate = useNavigate();
    const [logType, setLogType] = useState(false);

    useEffect(() => {
        currentUser && navigate("/");
    }, [currentUser, navigate]);

    console.log(logType);

    const Paragraph = styled.p`
        text-align: center;
    `
    return (
        <>
            {logType ?
                <div>
                    <Register auth={auth} db={db} />
                    <Paragraph>Already have an Account? <b onClick={() => setLogType(!logType)}>Login...</b></Paragraph>
                </div>
                :

                <div>
                    <Login auth={auth} />
                    <Paragraph>Not a member? <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setLogType(!logType)}>Sign up now</span></Paragraph>
                </div>
            }
        </>
    );
}
