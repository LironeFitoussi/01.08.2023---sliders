import styles from './CreateResume.module.css'
import OpenAI from "openai";

import { useState, useContext, useEffect } from 'react'
import ExperienceInput from '../../components/ExperienceInput/ExperienceInput'
import EducationInput from '../../components/EducationInput/EducationInput'
import SkillInput from '../../components/SkillInput/SkillInput'
import Button from '../../components/Mini Components/Button'
import Input from '../../components/Mini Components/Input/Input'

import { Link } from 'react-router-dom'


import userDataProvider from '../../context/UserData';

export default function CreateResume() {
    const { currentUser } = useContext(userDataProvider);
    const openai = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true
    });

    const [resumeData, setResumeData] = useState({
        fileName: '',
        creationDate: new Date(), // Format the date
        fullName: '',
        position: '',
        aboutMe: '',
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

    // useEffect(() => {
    //     console.log(resumeData);
    // }, [resumeData]);
    const makeApiAiCall = async () => {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "Summarize content you are provided to a about section in a resume so i  will start like the user talking about himself freely like an about me section without pricising this is an about me section, limit to 50 words"
                },
                {
                    "role": "user",
                    "content": resumeData.aboutMe
                }
            ],
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1,
        });

        setResumeData(prevState => ({
            ...prevState,
            aboutMe: response.choices[0].message.content
        }));
    }
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Resume Creator Wizard</h1>
            <div className={styles.projectName}>
                <h3>Project Name:</h3>
                <input type="text" name='fileName' onChange={handlePersonalDataChange} required />
            </div>
            <div>
                <textarea value={resumeData.aboutMe} name="aboutMe" cols="30" rows="10" onChange={handlePersonalDataChange}></textarea>
                <button onClick={makeApiAiCall}>Genrate Ai</button>
            </div>
            <div className={styles.resumeForm}>
                <div className={styles.headerContainer}><span className={styles.stepIcon}>1</span> <h2>Add Your Personal Data</h2></div>

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
                <div className={styles.headerContainer}><span className={styles.stepIcon}>2</span> <h2>Add Your Experience</h2></div>
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
                <div className={styles.headerContainer}><span className={styles.stepIcon}>3</span> <h2>Add Your Education</h2></div>
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
                <div className={styles.headerContainer}><span className={styles.stepIcon}>4</span> <h2>Add Your Skills</h2></div>

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
                <Link
                    style={{
                        background: 'white',
                        color: '#1ea5fc',
                        fontWeight: '700',
                        padding: '1rem'
                    }}
                    to="/create/template"
                    state={{ from: resumeData }}
                >
                    Continue To template
                </Link>
            </div>
        </section>
    )
}
