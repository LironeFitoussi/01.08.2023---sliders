import styles from './CreateResume.module.css'
import { useEffect, useState, useContext } from 'react'
import ExperienceInput from '../../components/ExperienceInput/ExperienceInput'
import EducationInput from '../../components/EducationInput/EducationInput'
import SkillInput from '../../components/SkillInput/SkillInput'
import { Link } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase'
import userDataProvider from '../../context/UserData';

export default function CreateResume() {
    const { currentUser } = useContext(userDataProvider);
    // console.log(currentUser);
    const [resumeData, setResumeData] = useState({
        fileName: '',
        creationDate: new Date().getDate(),
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

    const addSkill = () => {
        setResumeData(prevState => ({
            ...prevState,
            skills: [...prevState.skills, {
                skill: '',
                level: 5
            }]
        }));
    };

    const handleFormSubmit = async () => {
        const docRef = await addDoc(collection(db, "resumes"), {
            ...resumeData,
            userId: currentUser.uid
        });
        console.log("Document written with ID: ", docRef.id);
    };

    // useEffect(() => {
    //     console.log(resumeData);
    // }, [resumeData])

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Resume Creator Wizard</h1>
            <h3>Project Name: <input type="text" name='fileName' onChange={handlePersonalDataChange} /></h3>
            <div className={styles.resumeForm}>
                <h2><span className={styles.stepIcon}>1</span> Add Your Personal Data</h2>
                <form action="">
                    <div className={styles.formInput}>
                        <label htmlFor="fullName">Your full name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={resumeData.fullName}
                            onChange={handlePersonalDataChange}
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            name="position"
                            value={resumeData.position}
                            onChange={handlePersonalDataChange}
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="mail">Mail</label>
                        <input
                            type="text"
                            name="mail"
                            value={resumeData.contact.mail}
                            onChange={handleContactChange}
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="number">Phone Number</label>
                        <input
                            type="text"
                            name="number"
                            value={resumeData.contact.number}
                            onChange={handleContactChange}
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={resumeData.contact.location}
                            onChange={handleContactChange}
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="linkedin">Linkedin</label>
                        <input
                            type="text"
                            name="linkedin"
                            value={resumeData.contact.linkedin}
                            onChange={handleContactChange}
                        />
                    </div>
                </form>
            </div>
            <hr />
            <div className={styles.resumeForm}>
                <h2><span className={styles.stepIcon}>2</span> Add Your Experience</h2>
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
                    <button type='button' onClick={addExperience}> + Add Experience </button>
                </form>
            </div>
            <hr />
            <div className={styles.resumeForm}>
                <h2><span className={styles.stepIcon}>3</span> Add Your Education</h2>
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
                    <button type='button' onClick={addEducation}> + Add Education </button>
                </form>
            </div>
            <div className={styles.resumeForm}>
                <h2><span className={styles.stepIcon}>4</span> Add Your Skills</h2>
                <form>
                    {resumeData.skills.map((skill, index) => (
                        <SkillInput
                            key={`skill_${index}`}
                            skill={skill}
                            skillIndex={index} // Corrected prop name
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                        />
                    ))}
                    <button type='button' onClick={addSkill}> + Add Skill </button>
                </form>
            </div>
            <button onClick={handleFormSubmit}>
                <Link to="/create/template" state={{ from: resumeData }}>
                    Countinue To template
                </Link>
            </button>
        </section>
    )
}
