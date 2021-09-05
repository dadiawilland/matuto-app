import React, {useState, useEffect} from 'react'
import styles from './Home.style'
import {NavLink} from 'react-router-dom'
import NavButton from '../../components/Buttons/NavButton'

const Home = () => {

    useEffect(() => {
        console.log('asdasd')
    });

    return (
        <div style={styles().containerHome}>
            <span style={styles().headerFont}>Lifelong learning is a <br/> journey together.</span>
            <span style={styles().subHeaderFont}>Hone and enhance your soft and hard skills through<br/> a gamified education and work-train program. Earn<br/> vouchers as you gain skills. Land a job. Provide<br/> opportunities and growth for your business and the community.</span>
            <NavButton />
        </div>
    )
}

export default Home