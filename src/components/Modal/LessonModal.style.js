import colors from "../../helpers/colors"

const styles = () => ({
    containerModal: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: colors.gray + 20,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 9999999
    },
    containerForm: {
        position: 'absolute',
        width: '80%',
        minWidth: 1080,
        height: 607.5,
        backgroundColor: colors.yellow2,
        borderRadius: 2,
        boxShadow: '0 2px 10 #00000020',
        alignSelf: 'center',
        // marginLeft: 160,
        // padding: 32,
        display: 'flex',
        // justifyContent: 'start',
        flexDirection: 'column',
        overflowY: 'auto',
        justifyContent: 'center'
    },
    containerPdf: {
        width: 840,
        alignSelf: 'center',
        height: 472.5,
        outline: 'none',
        border: 'none',
        borderRadius: 2,
        background: colors.white2,
        alignSelf: 'center',
        // border: '1px solid' + colors.gray2,
        boxShadow: '0 4px 10px #00000020',
    },
    containerCloseButton: {
        top: 10,
        left: 10,
        position: 'absolute',
        zIndex: 9999
    },
    containerSubmitButton: {
        alignSelf: 'center',
        cursor: 'pointer',
        width: 64,
        height: 32,
        borderRadius: 2,
        backgroundColor: colors.red,
        display: 'flex',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        position: 'absolute',
    },
    imgBg: {
        width: 18,
        height: 9,
        alignSelf: 'center'
    },
    fontSubmitButton: {
        color: colors.white,
        fontSize: 12,
        alignSelf: 'center',
        marginRight: 5
    },
    fontTitle: {
        fontSize: 20,
        fontWeight: 600,
        top: 0,
        right: 0,
        textAlign: 'center',
        width: '100%',
        position: 'absolute',
        color: colors.white,
        padding: 5,
        backgroundColor: colors.red
    }
})

export default styles