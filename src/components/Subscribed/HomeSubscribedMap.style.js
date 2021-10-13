import colors from "../../helpers/colors"
import bg from '../../assets/home-subscribed-bg.png'

const styles = (isDisabled) => ({
    containerHome: {
        display: 'flex',
       

        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundImage: `url(${bg}) `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // width: 1366,
        // '@media screen and (max-width: 1366px)': {
            // maxWidth: 882,
            // backgroundColor: 'black',

            // width: 1366
        // },
        // alignSelf: 'center'
        // width: 1176,
        flexWrap: 'wrap',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // right: 0,
        margin: '0 auto'
    },
    containerLine: {
        width: '100%',
        height: 12,
        position: 'absolute',
        backgroundColor: colors.green5,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        zIndex: 1
    },
    containerNumberList: {
        width: '80%',
        height: 'fit-content',
        // backgroundColor: colors.green,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
    },
    containerNumber: {
        cursor: 'pointer',
        height: 124,
        width: 124,
        borderRadius: 62,
        border: 'solid 2px ' + (isDisabled ? colors.gray : colors.green2),
        backgroundColor: isDisabled ? colors.gray5 : colors.yellow3,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 999
        // position: 'absolute',
        // top: 670,
        // left: 114
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
        color: isDisabled ? colors.gray3 : colors.green
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
        top: 'calc(50% - 124px)',
        left: 'calc(10% + 40px)'
    },
    containerDescription: {
        height: 44,
        maxWidth: 300,
        width: 'fit-content',
        borderRadius: 16,
        backgroundColor: colors.green2 + '99',
        padding: 10,
        boxShadow: '0px 2px 10px #00000020',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: 'calc(50% - 188px)',
        left: 'calc(10% + 40px)'
    },
    fontDescription: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 500
    }
   
})

export default styles