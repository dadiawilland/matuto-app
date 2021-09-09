import colors from "../../helpers/colors"

const styles = () => ({
    containerHeader: {
        height: 100,
        display: 'flex',
        padding: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        width: '100%',
        boxSizing: 'border-box'
    },
    containerLink: {
        textDecoration: 'none'
    },
    containerBtn: {
        display: 'flex',
        alignSelf: 'center'
    },
    imgLogo: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    btnFont: {
        fontSize: 16,
        fontWeight: 300,
        color: colors.black2,
        ':hover': {
            color: colors.red,
        },
        marginLeft: 12,
        marginRight:12,
    },
    containerIconActive: {
        backgroundColor: colors.white,
        width: 400,
        height: '100%',
        // borderRadius: 32,
        display: 'flex',
        // justifyContent: 'center',
        position: 'fixed',
        top: 0,
        right: 0,
        transition: 'width 0.2s ease-out',
        ':hover': {
            backgroundColor: colors.white,
            cursor: 'pointer'
        },
    },
    imgIconActive: {
        height: 60,
        width: 60,
        borderRadius: 32,
        left: -32,
        top: 17,
        position: 'absolute',
        border: '2px solid #FFFFFF',
        // alignSelf: 'center'
    },
    containerIcon: {
        backgroundColor: colors.red2,
        width: 64,
        height: 64,
        borderRadius: 32,
        display: 'flex',
        justifyContent: 'center',
        // transition: 'width 0.1s ease-in',s
        ':hover': {
            backgroundColor: colors.white,
            cursor: 'pointer'
        },
    },
    imgIcon: {
        height: 60,
        width: 60,
        borderRadius: 32,
        alignSelf: 'center'
    },
})

export default styles