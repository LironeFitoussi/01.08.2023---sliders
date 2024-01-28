import styles from './CreateResume.module.css'

import ExperienceInput from '../../components/ExperienceInput/ExperienceInput'
import EducationInput from '../../components/EducationInput/EducationInput'
export default function CreateResume() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Resume Creator Wizard</h1>
            <div className={styles.resumeForm}>
                <h2><span className={styles.stepIcon}>1</span> Add Your Personal Data</h2>
                <form action="">
                    <div className={styles.formInput}>
                        <label htmlFor="">Your full name</label>
                        <input type="text" name='fullName' />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="">Position</label>
                        <input type="text" name='position' />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="">mail</label>
                        <input type="text" name='mail' />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" name='phone' />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="">Location</label>
                        <input type="text" name='location' />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="">Linkedind</label>
                        <input type="text" name='linkedin' />
                    </div>
                </form>
            </div>
            <hr />
            <div className={styles.resumeForm}>
                <h2><span className={styles.stepIcon}>2</span> Add Your Experience</h2>
                <form action="">
                    <ExperienceInput />
                    <button type='button'> + Add Experience </button>
                </form>
            </div>
            <hr />
            <div className={styles.resumeForm}>
                <h2><span className={styles.stepIcon}>3</span> Add Your Education</h2>
                <form action="">
                    <EducationInput />
                    <button type='button'> + Add Education </button>
                </form>
            </div>
            <button>Continue To Design</button>
        </section>
    )
}