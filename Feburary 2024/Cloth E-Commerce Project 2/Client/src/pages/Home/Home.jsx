import styles from './Home.module.css';

// import components
import Navbar from "../../components/Navbar/Navbar"
import Announcement from '../../components/Announcement/Announcement';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
export default function Home () {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories />
    </div>
  )
}
