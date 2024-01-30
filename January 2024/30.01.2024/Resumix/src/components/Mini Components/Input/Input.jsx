import styles from './Input.module.css'

const Input = (props) => {
    const { htmlFor, id, name, value, changeFunction, children } = props;
    return (
        <div className={styles.formInput}>
            <label htmlFor={htmlFor}>{children}</label>
            <input
                type="text"
                id={id}
                name={name}
                value={value}
                onChange={changeFunction}
            />
        </div>
    );
};

export default Input
