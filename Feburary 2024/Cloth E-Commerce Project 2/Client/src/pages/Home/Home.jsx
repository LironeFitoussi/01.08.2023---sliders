import styles from './Home.module.css';

// import components
import Navbar from "../../components/Navbar/Navbar"
import Announcement from '../../components/Announcement/Announcement';
import Slider from '../../components/Slider/Slider';
export default function Home () {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
    </div>
  )
}
