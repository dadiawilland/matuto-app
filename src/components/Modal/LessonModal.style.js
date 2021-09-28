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
        height: 704,
        backgroundColor: colors.yellow2,
        borderRadius: 12,
        boxShadow: '0 2px 10 #00000020',
        alignSelf: 'center',
        // marginLeft: 160,
        padding: 32,
        display: 'flex',
        // justifyContent: 'start',
        flexDirection: 'column',
        overflowY: 'auto'
    },
    containerPdf: {
        width: 840,
        alignSelf: 'center',
        height: 475,
        outline: 'none',
        border: 'none',
        borderRadius: 2,
        background: colors.white2,
        transform: 'scale(1)',
        // border: '1px solid' + colors.gray2,
        boxShadow: '0 4px 10px #00000020',
    },
    containerCloseButton: {
        top: 10,
        left: 10,
        position: 'absolute',
    },
    containerSubmitButton: {
        alignSelf: 'center',
        cursor: 'pointer',
        width: 64,
        height: 32,
        borderRadius: 4,
        backgroundColor: colors.red,
        display: 'flex',
        // margin: '0 auto',
        justifyContent: 'center',
        right: 10,
        bottom: 10,
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
        fontWeight: 200,
        marginTop: 12,
        marginBottom: 60,
        alignSelf: 'center',
        fontWeight: 300
        // marginLeft: -370,
    }
})

export default styles