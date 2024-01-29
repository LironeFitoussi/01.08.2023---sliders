import styles from './TemplateChoose.module.css';
import { useLocation } from 'react-router-dom'
import Template1 from '../../components/Templates/Template1/Template1'
import Template2 from '../../components/Templates/Template2/Template2';

export default function TemplateChoose() {
    const location = useLocation()
    const { from } = location.state
    console.log(from);
    return (
        <section>
            <h1>Choose Your Template</h1>
            <Template1 data={from} />
            <Template2 data={from} />
            {/* <Template3 data={from} /> */}
        </section>
    )
}