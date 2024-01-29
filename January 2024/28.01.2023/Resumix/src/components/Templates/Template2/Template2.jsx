import React from 'react';
import styles from './Template2.module.css';

const Template2 = ({ data }) => {
    const { fullName, position, contact, experience, education, skills } = data;

    return (
        <div className={styles.resume}>
            <div className={styles.header}>
                <h1>{fullName}</h1>
                <h2>{position}</h2>
                <div className={styles.contact}>
                    <p>Email: {contact.mail}</p>
                    <p>Phone: {contact.number}</p>
                    <p>Location: {contact.location}</p>
                    <p>LinkedIn: {contact.linkedin}</p>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Experience</h2>
                {experience.map((exp, index) => (
                    <div key={index} className={styles.experience}>
                        <h3>{exp.position}</h3>
                        <p>{exp.company}</p>
                        <p>{exp.dateStart} - {exp.dateEnd}</p>
                        <ul>
                            {exp.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className={styles.section}>
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index} className={styles.education}>
                        <h3>{edu.institute}</h3>
                        <p>{edu.orientation}</p>
                        <ul>
                            {edu.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className={styles.section}>
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>
                            {skill.skill} - Level {skill.level}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Template2;
