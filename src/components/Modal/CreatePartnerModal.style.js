import colors from "../../helpers/colors"

const styles = () => ({
    containerModal: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: colors.gray6,
        display: 'flex',
        justifyContent: 'center'
    },
    containerForm: {
        position: 'absolute',
        width: 800,
        height: 640,
        backgroundColor: colors.white2,
        borderRadius: 6,
        boxShadow: '0 2px 10 #00000020',
        alignSelf: 'center',
        marginLeft: 160,
        paddingBlock: 24,
        display: 'flex',
        // justifyContent: 'start',
        flexDirection: 'column',
        overflowY: 'auto'
    },
    containerFormBody: {
        height: 'fit-content',
        paddingInline: 108,
        // paddingInline: 60    
    },
    containerInputField: {
        marginBottom: 8,
    },
    containerInputFieldRow: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    fontModalTitle: {
        fontSize: 24,
        color: colors.red4,
        textAlign: 'center',
        fontWeight: 500,
        marginBlock: 8
    },
    containerButton: {
        alignSelf: 'center',
        // margin: '0 auto',
        marginTop: 32,
        marginLeft: 588
        // marginLeft: 'auto'
        // left: 0
    },
    closeButtonContainer: {
        top: 10,
        right: 10,
        position: 'absolute',
    },
    containerInputFieldSml: {
        width: 'calc(50% - 9px)'
    },
})

export default styles