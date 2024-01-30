import React, { useEffect, useState } from 'react';
import styles from './ResumeCard.module.css';
import dateFormat from 'dateformat';

const ResumeCard = ({ resume }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [dateFormatted, setDateFormatted] = useState('');

    useEffect(() => {
        if (resume) {
            const creationDate = new Date(resume.creationDate.seconds * 1000); // Convert to milliseconds
            const isToday = isDateToday(creationDate);

            if (isToday) {
                setDateFormatted(dateFormat(creationDate, 'HH:MM'));
            } else {
                setDateFormatted(dateFormat(creationDate, 'longDate'));
            }
        }
    }, [resume]);

    const isDateToday = (date) => {
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
            <div
                className={styles.editContainer}
                style={{ display: isHovered ? 'flex' : 'none' }}
            >
                <div className={styles.editBtn}>
                    <img src="./images/pen-solid.svg" alt="pen edit logo" />
                </div>
            </div>
            <h3>{resume.fileName}</h3>
            <p>{dateFormatted}</p>
        </div>
    );
};

export default ResumeCard;
