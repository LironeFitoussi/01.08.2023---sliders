import styles from "./Newsletter.module.css";
import SendIcon from "@mui/icons-material/Send";
export default function Newsletter() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Subscribe to our newsletter</h1>
      <p className={styles.description}>
        Get Updated Every time a new things new happen here!
      </p>
      <form className={styles.inputContainer}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email"
        />
        <button className={styles.button}>
          <SendIcon />
        </button>
      </form>
    </div>
  );
}
