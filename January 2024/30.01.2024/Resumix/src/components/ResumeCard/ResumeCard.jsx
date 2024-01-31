import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ResumeCard.module.css';
import dateFormat from 'dateformat'; // Make sure you have this library properly installed

const ResumeCard = ({ resume }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [dateFormatted, setDateFormatted] = useState('');

    useEffect(() => {
        console.log(resume.creationDate);
        const creationDate = new Date(resume.creationDate.seconds * 1000);
        const formattedDate = isToday(creationDate)
            ? dateFormat(creationDate, 'HH:MM')
            : dateFormat(creationDate, 'longDate');
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

    return (
        <div
            className={styles.resumeCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {resume && (
                <div className={styles.editContainer} style={{ display: isHovered ? 'flex' : 'none' }}>
                    <Link to={`/your-creations/edit/${resume.id}`} className={styles.editBtn}>
                        <img src="./images/pen-solid.svg" alt="edit" />
                    </Link>
                    <Link
                        className={styles.editBtn}
                        to="/create/template"
                        state={{ from: resume }}
                    >
                        <img src="./images/eye-solid.svg" alt="view" />
                    </Link>
                </div>
            )}
            <h3>{resume ? resume.fileName : 'Loading...'}</h3>
            <p>{dateFormatted}</p>
        </div>
    );
};

export default ResumeCard;
