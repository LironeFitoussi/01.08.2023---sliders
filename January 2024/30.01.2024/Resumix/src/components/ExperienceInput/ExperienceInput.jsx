import styles from './ExperienceInput.module.css'
import Button from '../../components/Mini Components/Button'
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
            <div className={styles.formInput}>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    name="company"
                    value={experience.company}
                    onChange={handleExperienceChange}
                />
            </div>
            <div className={styles.formInput}>
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    name="position"
                    value={experience.position}
                    onChange={handleExperienceChange}
                />
            </div>
            <div className={styles.formInput}>
                <h3 style={{ margin: '0', color: 'white' }}>Duration</h3>
                <section className={styles.durationDates}>
                    <div>
                        <label htmlFor="dateStart">From</label>
                        <input
                            type="date"
                            name="dateStart"
                            value={experience.dateStart}
                            onChange={handleExperienceChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dateEnd">To</label>
                        <input
                            type="date"
                            name="dateEnd"
                            value={experience.dateEnd}
                            onChange={handleExperienceChange}
                        />
                    </div>
                </section>
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
                <Button clickFunction={handleAddAchievement}> + Add Achievements</Button>
            </div>
        </section>
    );
};

export default ExperienceInput;
