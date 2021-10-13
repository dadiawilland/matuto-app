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
    containerInputFields: {
        marginBottom: 19
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
        marginRight: 18
    },
    containerPaymentBtnRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    containerPriceField: {
        backgroundColor: colors.red2 + 40,
        paddingBlock: 24,
        paddingInline: 24,
        borderRadius: 12,
        marginBottom: 19,
    },
    containerSkipBtn: {
        cursor: 'pointer',
        backgroundColor: colors.gray,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
        paddingInline: 24,
        paddingBlock: 4,
        color: colors.white,
        alignSelf: 'center',
        margin: '0 auto',
        marginBottom: 9,
        ':hover': {
            backgroundColor: colors.gray3,
        },
    },
    skipBtnFont: {
        alignSelf: 'center',
        fontSize: 10,
        textDecoration: 'none',
        display: 'inline-table',
        color: colors.black2
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
    },
    priceFieldFont: {
        fontSize: 14,
        color: colors.red,
        fontWeight: 500
    }
    
})

export default styles