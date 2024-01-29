import React from 'react';

const ExperienceInput = ({ experience, experienceIndex, setResumeData }) => {
    const handleExperienceChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prevState => {
            const updatedExperience = [...prevState.experience];
            updatedExperience[experienceIndex] = {
                ...updatedExperience[experienceIndex],
                [name]: value
            };
            return { ...prevState, experience: updatedExperience }
        })
    };

    const handleAddAchievement = () => {
        setResumeData(prevState => {
            const updatedExperience = [...prevState.experience];
            updatedExperience[experienceIndex] = {
                ...updatedExperience[experienceIndex],
                achievements: [...updatedExperience[experienceIndex].achievements, '']
            };
            return { ...prevState, experience: updatedExperience }
        });
    };

    const handleAchievementChange = (index, value) => {
        setResumeData(prevState => {
            const updatedExperience = [...prevState.experience];
            updatedExperience[experienceIndex] = {
                ...updatedExperience[experienceIndex],
                achievements: updatedExperience[experienceIndex].achievements.map((achievement, i) =>
                    i === index ? value : achievement
                )
            };
            return { ...prevState, experience: updatedExperience }
        });
    };

    return (
        <section>
            <div>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    name="company"
                    value={experience.company}
                    onChange={handleExperienceChange}
                />
            </div>
            <div>
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    name="position"
                    value={experience.position}
                    onChange={handleExperienceChange}
                />
            </div>
            <div>
                <p>Years</p>
                <label htmlFor="dateStart">From</label>
                <input
                    type="date"
                    name="dateStart"
                    value={experience.dateStart}
                    onChange={handleExperienceChange}
                />
                <label htmlFor="dateEnd">To</label>
                <input
                    type="date"
                    name="dateEnd"
                    value={experience.dateEnd}
                    onChange={handleExperienceChange}
                />
            </div>
            <div>
                {experience.achievements.map((achievement, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={achievement}
                            onChange={(e) => handleAchievementChange(index, e.target.value)}
                            placeholder="Achievement"
                        />
                    </div>
                ))}
                <button type='button' onClick={handleAddAchievement}> + Add Achievements</button>
            </div>
        </section>
    );
};

export default ExperienceInput;
