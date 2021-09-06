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
    containerIcon: {
        backgroundColor: colors.red2,
        width: 64,
        height: 64,
        borderRadius: 32,
        display: 'flex',
        justifyContent: 'center',
        ':hover': {
            backgroundColor: colors.red,
            cursor: 'pointer'
        },
    },
    imgLogo: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    imgIcon: {
        height: 60,
        width: 60,
        borderRadius: 32,
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
    }
})

export default styles