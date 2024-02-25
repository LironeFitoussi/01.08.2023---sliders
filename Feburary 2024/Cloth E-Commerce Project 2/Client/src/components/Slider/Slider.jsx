import styles from './Slider.module.css';
import styled from "styled-components"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sliderItems } from '../../data'; // Fixed import statement
import { useState } from 'react';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const Arrow = styled.div`
        width: 50px;
        height: 50px;
        background-color: rgba(252, 252, 252, 0.322);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        top: 0; 
        bottom: 0;
        margin: auto;
        left: ${props => props.direction === 'left' ? '10px' : 'auto'};
        right: ${props => props.direction === 'right' ? '10px' : 'auto'};
        z-index: 50;
    `;

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    };



    return (
        <div className={styles.container}>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <KeyboardArrowLeftIcon />
                </Arrow>
                <div className={styles.wrapper} style={{  transform: `translateX(${slideIndex * -100}vw)`}}>
                    {sliderItems.map(item => (
                        <div className={styles.slide} style={{backgroundColor:`#${item.bg}`}} key={item.id}>
                        <div className={styles.imgContainer}>
                            <img className={styles.image} src={item.img} alt="" />
                        </div>
                        <div className={styles.infoContainer}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.description}>{item.desc}</p>
                            <button className={styles.button}>SHOP NOW</button>
                        </div>
                    </div>
                    ))}
                    
                </div>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <KeyboardArrowRightIcon />
                </Arrow>
        </div>
    );
}
