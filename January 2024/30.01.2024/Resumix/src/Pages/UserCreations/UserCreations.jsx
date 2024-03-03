import styles from "./UserCreations.module.css";
import userDataProvider from "../../context/UserData";
import { useEffect, useState, useContext } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import UserResumes from "../../components/UserResumes/UserResumes";

export default function UserCreations() {
  const { currentUser } = useContext(userDataProvider);
  const { user } = useContext(userDataProvider);
  const [resumeData, setResumeData] = useState(null);

  console.log(currentUser);
  useEffect(() => {
    if (currentUser && user) {
      if (currentUser.isAdmin) {
        console.log("Admin user");
        try {
          const resumeCollectionRef = collection(db, "resumes");
          onSnapshot(resumeCollectionRef, async (snapshot) => {
            const resumeData = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setResumeData(resumeData);
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("Normal user");
        try {
          const resumeCollectionRef = collection(db, "resumes");
          const resumeQuery = query(
            resumeCollectionRef,
            where("userId", "==", user.uid)
          );

          onSnapshot(resumeQuery, async (snapshot) => {
            const resumeData = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setResumeData(resumeData);
          });

          console.log("Data fetched succefully!");
        } catch (err) {
          console.error("An error ocured: " + err);
        }
      }
    }
  }, [currentUser, user]);

  return (
    <>
      {currentUser && (
        <section>
          <h1 className={styles.header}>This is user creations page</h1>
          {resumeData !== null && <UserResumes resumeData={resumeData} />}
        </section>
      )}
    </>
  );
}
