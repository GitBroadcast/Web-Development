import styles from "../styles/Contact.module.css";
import Circle from "../components/container/Circle";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#8360c3" left="-40vh" top="-20vh" />
      <Circle backgroundColor="#271d3b" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input className={styles.inputS} placeholder="Username"></input>
        <input className={styles.inputS} placeholder="Phone No."></input>
        <input className={styles.inputL} placeholder="Email"></input>
        <input className={styles.inputL} placeholder="Subject"></input>
        <textarea
          className={styles.textArea}
          placeholder="Message"
          row={6}
        ></textarea>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
