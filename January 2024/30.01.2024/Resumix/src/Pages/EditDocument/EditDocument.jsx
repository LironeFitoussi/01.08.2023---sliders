import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../config/firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import styles from './EditDocument.module.css'
import Input from '../../components/Mini Components/Input/Input';
import ExperienceInput from '../../components/ExperienceInput/ExperienceInput';
import EducationInput from '../../components/EducationInput/EducationInput';
import Button from '../../components/Mini Components/Button';
import SkillInput from '../../components/SkillInput/SkillInput';

const EditDocument = () => {
    const { id } = useParams();
    const [resumeData, setResumeData] = useState({
        fileName: '',
        creationDate: new Date(),
        fullName: '',
        position: '',
        contact: {
            mail: '',
            number: '',
            location: '',
            linkedin: '',
        },
        experience: [
            {
                company: '',
                position: '',
                dateStart: '',
                dateEnd: '',
                achievements: []
            }
        ],
        education: [
            {
                institute: '',
                orientation: '',
                skills: ['']
            }
        ],
        skills: [
            {
                skill: '',
                level: 5
            }
        ]
    });

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const resumeDocRef = doc(db, 'resumes', id);
                const resumeDocSnapshot = await getDoc(resumeDocRef);

                if (resumeDocSnapshot.exists()) {
                    setResumeData(resumeDocSnapshot.data());
                } else {
                    console.log('Document not found!');
                }
            } catch (error) {
                console.error('Error fetching document: ', error);
            }
        };

        fetchResume();
    }, [id]);

    useEffect(() => {
        console.log(resumeData);
    }, [resumeData])

    const saveChanges = async () => {
        try {
            const resumeDocRef = doc(db, 'resumes', id);
            await setDoc(resumeDocRef, resumeData);
            console.log('Document successfully updated!');
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    const handlePersonalDataChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prevState => ({
            ...prevState,
            contact: {
                ...prevState.contact,
                [name]: value
            }
        }));
    };

    const addExperience = () => {
        setResumeData(prevState => ({
            ...prevState,
            experience: [...prevState.experience, {
                company: '',
                position: '',
                dateStart: '',
                dateEnd: '',
                achievements: ['']
            }]
        }));
    };

    const addSkill = () => {
        setResumeData(prevState => ({
            ...prevState,
            skills: [...prevState.skills, {
                skill: '',
                level: 5
            }]
        }));
    };

    const addEducation = () => {
        setResumeData(prevState => ({
            ...prevState,
            education: [...prevState.education, {
                institute: '',
                orientation: '',
                skills: ['']
            }]
        }));
    };

    return (
        <main>
            {resumeData && (<>
                <h1>This is Edit Document</h1>
                <section className={styles.container}>
                    <h1 className={styles.title}>Resume Editor Wizard</h1>
                    <div className={styles.projectName}>
                        <h3>Project Name:</h3>
                        <input type="text" name='fileName' value={resumeData.fileName} onChange={handlePersonalDataChange} required />
                    </div>
                    <div className={styles.resumeForm}>
                        <div className={styles.headerContainer}><span className={styles.stepIcon}>1</span> <h2>Edit Your Personal Data</h2></div>

                        <form action="">
                            <Input
                                htmlFor="fullName"
                                name="fullName"
                                value={resumeData.fullName}
                                changeFunction={handlePersonalDataChange}
                            >
                                Your full name
                            </Input>
                            <Input
                                htmlFor="position"
                                name="position"
                                value={resumeData.position}
                                changeFunction={handlePersonalDataChange}
                            >
                                Position
                            </Input>
                            <Input
                                htmlFor="mail"
                                name="mail"
                                value={resumeData.contact.mail}
                                changeFunction={handleContactChange}
                            >
                                Mail
                            </Input>
                            <Input
                                htmlFor="number"
                                name="number"
                                value={resumeData.contact.number}
                                changeFunction={handleContactChange}
                            >
                                Phone Number
                            </Input>
                            <Input
                                htmlFor="location"
                                name="location"
                                value={resumeData.contact.location}
                                changeFunction={handleContactChange}
                            >
                                Location
                            </Input>
                            <Input
                                htmlFor="linkedin"
                                name="linkedin"
                                value={resumeData.contact.linkedin}
                                changeFunction={handleContactChange}
                            >
                                Linkedin
                            </Input>
                        </form>

                    </div>
                    <hr />
                    <div className={styles.resumeForm}>
                        <div className={styles.headerContainer}><span className={styles.stepIcon}>2</span> <h2>Edit Your Experience</h2></div>
                        <form action="">
                            {resumeData.experience.map((exp, index) => (
                                <ExperienceInput
                                    key={`exp_${index}`}
                                    experience={exp}
                                    experienceIndex={index}
                                    resumeData={resumeData}
                                    setResumeData={setResumeData}
                                />
                            ))}
                            <Button clickFunction={addExperience}> + Add Experience </Button>
                        </form>
                    </div>

                    <div className={styles.resumeForm}>
                        <div className={styles.headerContainer}><span className={styles.stepIcon}>3</span> <h2>Edit Your Education</h2></div>
                        <form action="">
                            {resumeData.education.map((edu, index) => (
                                <EducationInput
                                    key={`edu_${index}`}
                                    education={edu}
                                    educationIndex={index}
                                    resumeData={resumeData}
                                    setResumeData={setResumeData}
                                />
                            ))}
                            <Button clickFunction={addEducation}> + Add Education </Button>
                        </form>
                    </div>
                    <div className={styles.resumeForm}>
                        <div className={styles.headerContainer}><span className={styles.stepIcon}>4</span> <h2>Edit Your Skills</h2></div>

                        <form>
                            {resumeData.skills.map((skill, index) => (
                                <SkillInput
                                    key={`skill_${index}`}
                                    skill={skill}
                                    skillIndex={index}
                                    resumeData={resumeData}
                                    setResumeData={setResumeData}
                                />
                            ))}
                            <Button clickFunction={addSkill}> + Add Skill </Button>
                        </form>
                    </div>
                    <div style={{
                        padding: '2vh 0 ',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <button
                            style={{
                                cursor: 'pointer',
                                border: 'none',
                                background: 'white',
                                color: '#1ea5fc',
                                fontWeight: '700',
                                padding: '1rem'
                            }}
                            onClick={saveChanges}
                        >
                            Save Changes
                        </button>
                    </div>
                </section>
            </>)}
        </main>
    );
};

export default EditDocument;
