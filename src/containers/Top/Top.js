import React from 'react'
import styles from './Top.style'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavButton from '../../components/Buttons/NavButton'

const Home = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={styles().containerHome}>
            <span style={styles().headerFont}>Free Courses</span>
            {/* <span style={styles().headerFont}>Lifelong learning is a <br/> journey together.</span>
            <span style={styles().subHeaderFont}>Hone and enhance your soft and hard skills through<br/> a gamified education and work-train program. Earn<br/> vouchers as you gain skills. Land a job. Provide<br/> opportunities and growth for your business and the community.</span>
            <NavButton dest="register" /> */}
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                {/* <div>Item 4</div> */}
            </Carousel>;
        </div>
    )
}

export default Home