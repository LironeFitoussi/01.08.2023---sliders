import styles from './Auth.module.css'
import SignUpComp from '../../components/SignUpComp/SignUpComp.jsx'
import SignInComp from '../../components/SignInComp/SignInComp'
import { useState } from 'react'
import styled from 'styled-components'

export default function Auth () {
    const [userExist, setUserExist] = useState(true);
    const Paragraph = styled.p`
        text-align : 'center';
        cursor: pointer;
        color: blue;
        margin: 5vh 0;
        &:hover {
            color: black;
        }
    `

    return (
        <section className={styles.authComp}>
            {userExist? <SignInComp/> : <SignUpComp/>}
            <Paragraph onClick={() => setUserExist(!userExist)}>
                {userExist? 'First time here? ' : 'Already have an account? '}
                Click Here
            </Paragraph>
        </section>
    )
}