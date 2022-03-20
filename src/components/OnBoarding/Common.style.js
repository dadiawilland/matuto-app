import colors from "../../helpers/colors"

const common = () => ({
    containerForm: {
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'column',
        paddingInline: 19,
        // width: 300,
        maxWidth: 390,
        marginTop: 225,
        width: '100%'
        // margin: 'auto'
    },
    containerInputField: {
        marginBottom: 18,
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
    formTitleFont: {
        paddingBlock: 12,
        marginBottom: 32,
        fontSize: 24,
        color: colors.red2,
        fontWeight: 600,
        alignSelf: 'center',
    },
    btnInlineFont: {
        fontSize: 12,
        color: colors.black2,
        textAlign: 'center',
        marginBlock: 8
    },
    btnInlineLinkFont: {
        width: 'fit-content',
        alignSelf: 'center',
        textDecoration: 'underline',
        fontSize: 12,
        color: colors.red2,
        cursor: 'pointer',
        textAlign: 'center',
    },
})

export default common