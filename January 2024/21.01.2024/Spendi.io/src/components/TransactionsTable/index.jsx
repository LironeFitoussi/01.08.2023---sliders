import styles from './TransactionsTable.module.css';
import Transaction from '../Transaction';

export default function TransactionsTable({ transactions, removeTransaction }) {

    return (
        <section>
            {transactions && (
                <div className={styles.transactionsTab}>
                    {transactions.map((transaction, index) => <Transaction {...transaction} key={`tr_${index}`} removeTransaction={removeTransaction} />)}
                </div>
            )}
        </section>
    );
}
