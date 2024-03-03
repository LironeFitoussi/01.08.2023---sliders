import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./ResumeCard.module.css";
import dateFormat from "dateformat"; // Make sure you have this library properly installed
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import userDataProvider from "../../context/UserData";

const ResumeCard = ({ resume }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dateFormatted, setDateFormatted] = useState("");
  const { currentUser } = useContext(userDataProvider);
  console.log(currentUser);
  useEffect(() => {
    // console.log(resume.creationDate);
    const creationDate = new Date(resume.creationDate.seconds * 1000);
    const formattedDate = isToday(creationDate)
      ? dateFormat(creationDate, "HH:MM")
      : dateFormat(creationDate, "longDate");
    setDateFormatted(formattedDate);
  }, [resume]);

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const deleteResume = async () => {
    // todo: add delete logic
    try {
      await deleteDoc(doc(db, "resumes", resume.id));
    } catch (error) {
      console.error("An error ocured: " + error);
    }
  };

  return (
    <div
      className={styles.resumeCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {resume && (
        <div
          className={styles.editContainer}
          style={{ display: isHovered ? "flex" : "none" }}
        >
          <Link
            to={`/your-creations/edit/${resume.id}`}
            className={styles.editBtn}
          >
            <img src="./images/pen-solid.svg" alt="edit" />
          </Link>
          <Link
            className={styles.editBtn}
            to="/create/template"
            state={{ from: resume }}
          >
            <img src="./images/eye-solid.svg" alt="view" />
          </Link>
          <button onClick={deleteResume} className={styles.deleteBtn}>
            <img src="./images/trash-solid.svg" alt="view" />
          </button>
        </div>
      )}
      <h3>{resume ? resume.fileName : "Loading..."}</h3>

      <p>{dateFormatted}</p>
      {currentUser.isAdmin && (
        <p className={styles.userInfo}> User: {resume.userId}</p>
      )}
    </div>
  );
};

export default ResumeCard;
