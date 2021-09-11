import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerHome: {
        height: '100%',
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
        position: 'absolute',
        top: 28,
        left: 98,
    },
})

export default styles