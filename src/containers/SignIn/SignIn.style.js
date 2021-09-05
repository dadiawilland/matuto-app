import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerSignIn: {
        height: '100%',
        display: 'flex',
        paddingRight: 62,
        minHeight: 1080,
        width: '100%',
    },
    containerLeft: {
        backgroundColor: colors.red3,
        height: 'auto',
        display: 'flex',
        width: 400,
        flexDirection: 'column'
    },
    containerRight: {
        backgroundColor: colors.white,
        height: 'auto',
        display: 'flex',
        width: 'calc(100% - 400px)',
        justifyContent: 'center',
    },
    copyFont: {
        fontSize: 40,
        color: colors.white,
        fontWeight: 200,
        alignSelf: 'center',
        marginTop: 210,
        paddingLeft: 32,
        paddingRight: 32
    },
    imgBg: {
        width: 320,
        height: 320,
        position: 'fixed',
        bottom: 0,
        alignSelf: 'center'
    }
})

export default styles