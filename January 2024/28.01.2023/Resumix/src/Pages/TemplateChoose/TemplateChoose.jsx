import styles from './TemplateChoose.module.css';
import { useRef } from 'react';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import { useLocation } from 'react-router-dom';
import Template1 from '../../components/Templates/Template1/Template1';

export default function TemplateChoose() {
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
    return (
        <section className={styles.templatesContainer}>
            <h1>Choose Your Template</h1>
            <div ref={targetRef} id='TemplatePrint' className={styles.templateComp}>
                <Template1 data={from} />
            </div>
            <button onClick={() => generatePDF(targetRef, { filename: 'page.pdf' })}>Download PDF</button>
        </section>
    )
}
