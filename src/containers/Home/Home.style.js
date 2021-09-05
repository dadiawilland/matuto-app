import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerHome: {
        backgroundImage: `url(${bg})`,
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        paddingLeft: 62,
        paddingRight: 62,
        flexDirection: 'column',
        minHeight: 1080
    },
    headerFont: {
        fontSize: 48,
        color: colors.red,
        lineHeight: 1.1,
        fontWeight: 500,
        marginTop: 175,
        
    },
    subHeaderFont: {
        fontSize: 24,
        lineHeight: 1.5,
        color: colors.black2,
        fontWeight: 300,
        marginTop: 48,
        marginBottom: 96
    }
})

export default styles