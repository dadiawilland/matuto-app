import colors from "../../helpers/colors"

const styles = () => ({
    containerForm: {
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'column',
        paddingInline: 19,
        width: 300,
        marginTop: 250
    },
    containerInputField: {
        marginBottom: 8,
    },
    containerInputFieldRow: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    containerInputFieldSml: {
        width: 'calc(50% - 9px)'
    },
    containerButton: {
        alignSelf: 'center',
        margin: '0 auto',
        marginBottom: 9
    },
    containerPaymentBtn: {
        alignSelf: 'center',
        margin: '0 auto',
        marginBottom: 9,
        marginRight: 9
    },
    containerPaymentBtnRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    formTitleFont: {
        paddingBlock: 12,
        marginBottom: 32,
        fontSize: 24,
        color: colors.red2,
        fontWeight: 600,
        alignSelf: 'center',
    },
    paymentTitleFont: {
        fontSize: 12,
        height: 20,
        fontWeight: 200,
        color: colors.black2
    }
})

export default styles