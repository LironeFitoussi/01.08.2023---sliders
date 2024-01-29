import React from 'react';

const EducationInput = ({ education, educationIndex, resumeData, setResumeData }) => {
    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prevState => {
            const updatedEducation = [...prevState.education];
            updatedEducation[educationIndex] = {
                ...updatedEducation[educationIndex],
                [name]: value
            };
            return { ...prevState, education: updatedEducation };
        });
    };

    const handleSkillChange = (e, skillIndex) => {
        const { value } = e.target;
        setResumeData(prevState => {
            const updatedEducation = [...prevState.education];
            updatedEducation[educationIndex].skills[skillIndex] = value;
            return { ...prevState, education: updatedEducation };
        });
    };

    const handleAddSkill = () => {
        setResumeData(prevState => {
            const updatedEducation = [...prevState.education];
            updatedEducation[educationIndex].skills.push('');
            return { ...prevState, education: updatedEducation };
        });
    };

    return (
        <section>
            <div>
                <label htmlFor={`institution-${educationIndex}`}>Institution</label>
                <input 
                    type="text" 
                    id={`institution-${educationIndex}`}
                    name="institute"
                    value={education.institute}
                    onChange={handleEducationChange}
                />
            </div>
            <div>
                <label htmlFor={`profession-${educationIndex}`}>Profession</label>
                <input 
                    type="text" 
                    id={`profession-${educationIndex}`}
                    name="orientation"
                    value={education.orientation}
                    onChange={handleEducationChange}
                />
            </div>
            <div>
                <p>Years</p>
                <label htmlFor={`startDate-${educationIndex}`}>From</label>
                <input 
                    type="date" 
                    id={`startDate-${educationIndex}`}
                    name="dateStart"
                    value={education.dateStart}
                    onChange={handleEducationChange}
                />
                <label htmlFor={`endDate-${educationIndex}`}>To</label>
                <input 
                    type="date" 
                    id={`endDate-${educationIndex}`}
                    name="dateEnd"
                    value={education.dateEnd}
                    onChange={handleEducationChange}
                />
            </div>
            <div>
                {education.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                        <input 
                            type="text" 
                            value={skill}
                            onChange={(e) => handleSkillChange(e, skillIndex)}
                            placeholder="Skills"
                        />
                    </div>
                ))}
                <button type='button' onClick={handleAddSkill}> + Add Skills</button>
            </div>
        </section>
    );
};

export default EducationInput;
