import React, { useState } from 'react';
import styles from './ResumeCard.module.css';
import dateFormat from 'dateformat';

const ResumeCard = ({ resume }) => {
    const [isHovered, setIsHovered] = useState(false);

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
            <p>{dateFormat(resume.creationDate.seconds, 'longDate')}</p>
        </div>
    );
};

export default ResumeCard;
