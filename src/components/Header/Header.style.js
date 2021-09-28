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
        boxSizing: 'border-box',
        zIndex: 999999
    },
    containerLink: {
        textDecoration: 'none',
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
})

export default styles