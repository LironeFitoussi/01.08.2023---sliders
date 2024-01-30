import styles from './ExperienceInput.module.css'
import Button from '../../components/Mini Components/Button'
import Input from '../Mini Components/Input/Input';
import TimeInput from '../TimeInput/TimeInput';

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
            <Input
                htmlFor="company"
                name="company"
                value={experience.company}
                changeFunction={handleExperienceChange}
            >
                Company
            </Input>
            <Input
                htmlFor="position"
                name="position"
                value={experience.position}
                changeFunction={handleExperienceChange}
            >
                Position
            </Input>
            <TimeInput
                startValue={experience.dateStart}
                endValue={experience.dateEnd}
                changeFunction={handleExperienceChange}
            />
            <div className={styles.achievements}>
                <ul>
                    {experience.achievements.map((achievement, index) => (
                        <li>
                            <input className={styles.achievementInput} key={index}
                                type="text"
                                value={achievement}
                                onChange={(e) => handleAchievementChange(index, e.target.value)}
                                placeholder="Achievement"
                            />
                        </li>
                    ))}
                </ul>
                <Button clickFunction={handleAddAchievement}> + Add Achievements</Button>
            </div>
        </section>
    );
};

export default ExperienceInput;
