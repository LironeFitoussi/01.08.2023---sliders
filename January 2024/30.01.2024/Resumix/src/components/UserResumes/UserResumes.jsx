import styles from './UserResumes.module.css'
import ResumeCard from '../ResumeCard/ResumeCard';

const UserResumes = ({ resumeData }) => {
    return (
        <div className={styles.resumesContainer}>
            {resumeData.map((resume, index) => {
                return (
                    <ResumeCard key={`UR_${index}`} resume={resume} isAdmin={isAdmin} />
                )
            })}
        </div>
    );
};

export default UserResumes
