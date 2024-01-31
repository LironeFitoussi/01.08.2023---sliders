import styles from './Button2.module.css'

const Button2 = ({ clickFunction, children }) => {
    return (
        <button className={styles.button} type='button' onClick={clickFunction}> {children}</button>
    );
};

export default Button2
