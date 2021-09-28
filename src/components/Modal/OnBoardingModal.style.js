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
        width: 800,
        height: 'fit-content',
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
    containerOptionsList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBlock: 32
    },
    containerOption: {
        cursor: 'pointer',
        height: 32,
        paddingInline: 16,
        width: 'fit-content',
        borderRadius: 16,
        backgroundColor: colors.white2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 10px #00000010',
        fontSize: 12,
        fontWeight: 200,
        marginBlock: 12,
    },
    fontModalTitle: {
        fontSize: 24,
        fontWeight: 500
    },
    fontModalSubTitle: {
        fontSize: 16,
        color: colors.gray2,
        fontWeight: 200
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
    fontSubmitButton: {
        alignSelf: 'center',
        fontSize: 12,
        color: colors.white2,
    },
    imgBg: {
        width: 18,
        height: 9,
        alignSelf: 'center'
    }
})

export default styles