import colors from "../../helpers/colors"

const common = () => ({
    containerForm: {
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'column',
        paddingInline: 19,
        // width: 300,
        maxWidth: 390,
        // marginTop: 250
        margin: 'auto'
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
    formTitleFont: {
        paddingBlock: 12,
        marginBottom: 32,
        fontSize: 24,
        color: colors.red2,
        fontWeight: 600,
        alignSelf: 'center',
    },
})

export default common