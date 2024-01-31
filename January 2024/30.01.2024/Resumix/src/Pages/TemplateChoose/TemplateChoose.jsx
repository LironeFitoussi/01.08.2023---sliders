import React, { useRef, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Template1 from '../../components/Templates/Template1/Template1';
import Template2 from '../../components/Templates/Template2/Template2';
import Template3 from '../../components/Templates/Template3/Template3';
import Template4 from '../../components/Templates/Template4/Template4';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import userDataProvider from '../../context/UserData';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import styles from './TemplateChoose.module.css';
import Button2 from '../../components/Mini Components/Button2'

export default function TemplateChoose() {
    const { currentUser } = useContext(userDataProvider);
    const [selectedTemplate, setSelectedTemplate] = useState('1');
    const targetRef = useRef();
    const location = useLocation();
    const { from } = location.state || {};
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleFormSubmit = async () => {
        if (!isSubmitted) {
            setIsSubmitted(true);
            try {
                const docRef = await addDoc(collection(db, "resumes"), {
                    ...from,
                    userId: currentUser.uid
                });
                console.log("Document written with ID: ", docRef.id);
                setIsSaved(true);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        } else {
            alert("Form already submitted.");
        }
    };

    let selectedComponent;
    switch (selectedTemplate) {
        case '1':
            selectedComponent = <Template1 data={from} />;
            break;
        case '2':
            selectedComponent = <Template2 data={from} />;
            break;
        case '3':
            selectedComponent = <Template3 data={from} />;
            break;
        case '4':
            selectedComponent = <Template4 data={from} />;
            break;
        default:
            selectedComponent = null;
            break;
    }

    console.log(selectedTemplate);
    return (
        <section className={styles.templatesContainer}>
            <h1>Choose Your Template</h1>
            <div>
                <Button2 clickFunction={() => setSelectedTemplate('1')}>1</Button2>
                <Button2 clickFunction={() => setSelectedTemplate('2')}>2</Button2>
                <Button2 clickFunction={() => setSelectedTemplate('3')}>3</Button2>
                <Button2 clickFunction={() => setSelectedTemplate('4')}>4</Button2>
            </div>
            <div ref={targetRef} id='TemplatePrint' className={styles.templateComp}>
                {selectedComponent}
            </div>
            {from.id ? null : (
                <button className={`${styles.btn} ${isSaved ? styles.saved : ''}`} onClick={handleFormSubmit}>
                    {isSaved ? (
                        'Resume Saved Successfully'
                    ) : (
                        <span style={{ color: '#fff' }}><i className="fa-regular fa-floppy-disk" style={{ color: '#fff' }}></i> Save Resume</span>
                    )}
                </button>
            )}
            <button className={styles.btn} onClick={() => generatePDF(targetRef, { filename: 'ResumixPro.pdf' })}>
                <i className="fa fa-download" style={{ color: '#fff' }}></i> Download PDF
            </button>
        </section>
    )
}
