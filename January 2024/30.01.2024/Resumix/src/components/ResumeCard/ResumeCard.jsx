import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import styles from './ResumeCard.module.css';
import dateFormat from 'dateformat';

const ResumeCard = ({ resume }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [dateFormatted, setDateFormatted] = useState('');

    useEffect(() => {
        if (resume) {
            const creationDate = new Date(resume.creationDate.seconds * 1000);
            const isToday = isDateToday(creationDate);

            if (isToday) {
                setDateFormatted(dateFormat(creationDate, 'HH:mm'));
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
            {resume && (
                <Link
                    to={{
                        pathname: `/your-creations/edit/${resume.id}`,
                    }}
                    className={styles.editContainer}
                    style={{ display: isHovered ? 'flex' : 'none' }}
                >
                    <div className={styles.editBtn}>
                        <img src="./images/pen-solid.svg" alt="pen edit logo" />
                    </div>
                </Link>
            )}
            <h3>{resume ? resume.fileName : "Loading..."}</h3>
            <p>{dateFormatted}</p>
        </div>
    );
};

export default ResumeCard;
