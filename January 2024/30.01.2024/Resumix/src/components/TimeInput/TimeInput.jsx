import styles from './TimeInput.module.css'

const TimeInput = (props) => {
    const { startValue, endValue, changeFunction } = props;
    return (
        <div className={styles.formInput}>
            <h3 style={{ margin: '0', color: 'white' }}>Duration:</h3>
            <label htmlFor="dateStart">From</label>
            <input
                type="date"
                name="dateStart"
                value={startValue}
                onChange={changeFunction}
            />
            <label htmlFor="dateEnd">To</label>
            <input
                type="date"
                name="dateEnd"
                value={endValue}
                onChange={changeFunction}
            />
        </div>
    );
};

export default TimeInput
