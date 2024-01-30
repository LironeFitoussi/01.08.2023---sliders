import React from 'react';
import styles from './SkillInput.module.css';

export default function SkillInput({ skill, skillIndex, setResumeData, resumeData }) {
    const handleSkillChange = (propertyName, value) => {
        setResumeData(prevState => {
            const updatedSkills = [...prevState.skills];
            updatedSkills[skillIndex] = {
                ...updatedSkills[skillIndex],
                [propertyName]: value
            };
            return { ...prevState, skills: updatedSkills };
        });
    };

    return (
        <div>
            <input
                type="text"
                value={skill.skill}
                name='skill'
                placeholder='Skill'
                onChange={(e) => handleSkillChange('skill', e.target.value)}
            />
            <input
                type="range"
                value={skill.level}
                min="0" max="10"
                name='level'
                onChange={(e) => handleSkillChange('level', e.target.value)}
            />
        </div>
    );
}
