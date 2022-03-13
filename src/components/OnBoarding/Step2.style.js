import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerOnBoarding: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 225,
    },
    imgBg: {
        maxWidth: 900,
        width: 'calc(100%)'
    }, 
    containerButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    containerDialogue: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 333,
        margin: '0 auto',
        width: 320,
        padding: 12,
        backgroundColor: colors.green,
        borderRadius: 6,
        boxShadow: '0px 2px 10px #00000010',
    },
    fontDialogue: {
        fontSize: 16,
        color: colors.white2
    }
})

export default styles
