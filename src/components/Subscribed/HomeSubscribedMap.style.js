import colors from "../../helpers/colors"
import bg from '../../assets/home-subscribed-bg.png'

const styles = (isOpen) => ({
    containerHome: {
        display: 'flex',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 800,
        width: 1640,
        // alignSelf: 'center'
        // width: 1176,
        flexWrap: 'wrap',
        position: 'absolute',
        top: 0,
        left: 0,
        // right: 0,
        margin: '0 auto'
    },
    containerNumber1: {
        cursor: 'pointer',
        height: 124,
        width: 124,
        borderRadius: 62,
        border: 'solid 2px ' + colors.green2,
        backgroundColor: colors.yellow3,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: 670,
        left: 114
    },
    containerNumber2: {
        cursor: 'pointer',
        height: 124,
        width: 124,
        borderRadius: 62,
        border: 'solid 2px ' + colors.gray,
        backgroundColor: colors.gray5,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: 510,
        left: 358
    },
    containerNumber3: {
        cursor: 'pointer',
        height: 124,
        width: 124,
        borderRadius: 62,
        border: 'solid 2px ' + colors.gray,
        backgroundColor: colors.gray5,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: 435,
        left: 785
    },
    containerNumber4: {
        cursor: 'pointer',
        height: 124,
        width: 124,
        borderRadius: 62,
        border: 'solid 2px ' + colors.gray,
        backgroundColor: colors.gray5,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: 287,
        left: 942
    },
    containerNumber5: {
        cursor: 'pointer',
        height: 124,
        width: 124,
        borderRadius: 62,
        border: 'solid 2px ' + colors.gray,
        backgroundColor: colors.gray5,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: 137,
        left: 1290
    },
    fontNumber: {
        alignSelf: 'center',
        fontSize: 44,
        color: colors.green
    },
    fontNumberDisabled: {
        alignSelf: 'center',
        fontSize: 44,
        color: colors.gray3
    },
    fontTitle: {
        fontSize: 24,
        marginTop: 96
    }, 
    fontSubTitle: {
        fontSize: 24,
    }, 
    containerButton: {
        position: 'absolute',
        bottom: 64,
        backgroundColor: colors.red2,
        color: colors.white
    },
    imgIcon: {
        height: 70,
        // width: 24,
        position: 'absolute',
        top: 596,
        left: 155
    },
    containerDescription: {
        height: 44,
        width: 300,
        borderRadius: 16,
        backgroundColor: colors.green2 + '99',
        padding: 10,
        boxShadow: '0px 2px 10px #00000020',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: 524,
        left: 155
    },
    fontDescription: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 500
    }
   
})

export default styles