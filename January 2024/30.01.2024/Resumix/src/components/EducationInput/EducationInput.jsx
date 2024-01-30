import Button from "../Mini Components/Button";
import Input from "../Mini Components/Input/Input";
import TimeInput from "../TimeInput/TimeInput";
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
            <Input
                htmlFor={`institution-${educationIndex}`}
                id={`institution-${educationIndex}`}
                name="institute"
                value={education.institute}
                changeFunction={handleEducationChange}
            >Institution</Input>
            <Input
                htmlFor={`profession-${educationIndex}`}
                id={`profession-${educationIndex}`}
                name="orientation"
                value={education.orientation}
                changeFunction={handleEducationChange}
            >
                Profession
            </Input>
            <TimeInput
                startValue={education.dateStart}
                endValue={education.dateEnd}
                changeFunction={handleEducationChange}
            />
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
                <Button clickFunction={handleAddSkill}> + Add Skills </Button>
            </div>
        </section>
    );
};

export default EducationInput;
