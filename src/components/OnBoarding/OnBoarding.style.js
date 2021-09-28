import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerOnBoarding: {
        // flexGrow: 1,
        width: '100%',
        // width: 860,
        display: 'flex',
        justifyContent: 'center'

        // justifyContent: 'space-evenly's
    },
    imgBg: {
        marginTop: 100,
        width: 900,
        height: 600
    }, 
    containerButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        margin: '0 auto',
        // top: 380
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