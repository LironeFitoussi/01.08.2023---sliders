import styles from './TemplateChoose.module.css';
import { useRef, useContext } from 'react';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import { useLocation } from 'react-router-dom';
import Template1 from '../../components/Templates/Template1/Template1';

import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase'
import userDataProvider from '../../context/UserData';

export default function TemplateChoose() {
    const { currentUser } = useContext(userDataProvider);

    const targetRef = useRef();
    const getTargetElement = () => document.getElementById('TemplatePrint');
    const location = useLocation();
    const { from } = location.state;
    const options = {
        method: 'open',
        resolution: Resolution.HIGH,
        page: {
            margin: Margin.SMALL,
            format: 'letter',
            orientation: 'landscape',
        },
        canvas: {
            mimeType: 'image/png',
            qualityRatio: 1
        },
        overrides: {
            pdf: {
                compress: true
            },
            canvas: {
                useCORS: true
            }
        },
    };

    const handleFormSubmit = async () => {
        try {
            const docRef = await addDoc(collection(db, "resumes"), {
                ...from,
                userId: currentUser.uid
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };


    return (
        <section className={styles.templatesContainer}>
            <h1>Choose Your Template</h1>
            <div ref={targetRef} id='TemplatePrint' className={styles.templateComp}>
                <Template1 data={from} />
            </div>
            <button className={styles.btn} onClick={handleFormSubmit}>
                <i className="fa-regular fa-floppy-disk" style={{ color: '#fff' }}></i> Save Resume
            </button>
            <button className={styles.btn} onClick={() => generatePDF(targetRef, { filename: 'ResumixPro.pdf' })}>
                <i className="fa fa-download" style={{ color: '#fff' }}></i> Download PDF
            </button>
        </section>
    )
}
