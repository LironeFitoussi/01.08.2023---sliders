import React from 'react';
import styles from './Template1.module.css';

const Template1 = ({ data }) => {
    console.log(data);
    const { fullName, position, contact, experience, education, skills } = data;

    return (
        <div className={styles.resume}>
            <div className={styles.header}>
                <h1>{fullName}</h1>
                <h2>{position}</h2>
                <hr />
                <div className={styles.contact}>
                    <p><b>Email:</b> {contact.mail}</p>
                    <p><b>Phone:</b> {contact.number}</p>
                    <p><b>Location:</b> {contact.location}</p>
                    <p><b>LinkedIn:</b> {contact.linkedin}</p>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Experience</h2>
                <hr />
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
                <hr />
                {education.map((edu, index) => (
                    <div key={index} className={styles.education}>
                        <h3>{edu.institute}</h3>
                        <p>{edu.orientation}</p>
                        <p>{edu.dateStart} - {edu.dateEnd}</p>
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
                <hr />
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

export default Template1;
