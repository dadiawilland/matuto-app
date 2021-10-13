import React from 'react'
import styles from './Home.style'
import NavButton from '../../components/Buttons/NavButton'

const Home = () => {

    return (
        <div style={styles().containerHome}>
            <span style={styles().headerFont}>Lifelong learning is a <br/> journey together.</span>
            <span style={styles().subHeaderFont}>Hone and enhance your soft and hard skills through<br/> a gamified education and work-train program. Earn<br/> vouchers as you gain skills. Land a job. Provide<br/> opportunities and growth for your business and the community.</span>
            <NavButton dest="login" title={'Get started'} />
        </div>
    )
}

export default Home