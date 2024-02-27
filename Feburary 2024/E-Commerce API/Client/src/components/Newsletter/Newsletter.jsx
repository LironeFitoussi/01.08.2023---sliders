import styles from "./Newsletter.module.css";
import SendIcon from "@mui/icons-material/Send";
export default function Newsletter() {
  const handleSubscribe = () => {
    alert("Subscribe Feature not implemented yet")
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Subscribe to our newsletter</h1>
      <p className={styles.description}>
        Get Updated Every time a new things new happen here!
      </p>
      <form className={styles.inputContainer} onSubmit={handleSubscribe}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email"
        />
        <button type="submit" className={styles.button} >
          <SendIcon />
        </button>
      </form>
    </div>
  );
}
