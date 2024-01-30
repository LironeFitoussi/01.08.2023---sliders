import styles from './Button.module.css'

const Button = ({ clickFunction, children }) => {
    return (
        <button className={styles.button} type='button' onClick={clickFunction}> {children}</button>
    );
};

export default Button
