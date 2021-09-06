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
        marginBottom: 8
    },
    containerCheckbox: {
        flexDirection: 'row',
        display: 'flex',
        marginBottom: 19
    },
    containerButton: {
        alignSelf: 'center',
        margin: '0 auto',
        marginBottom: 9
    },
    containerBreak: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBlock: 23
    },
    containerBtnAltLogin: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnFont: {
        alignSelf: 'center',
        fontSize: 12,
        textDecoration: 'none',
        display: 'inline-table'
    },
    breakLines: {
        width: '40%',
        height: 1,
        backgroundColor: colors.gray2,
        opacity: 0.5,
        alignSelf: 'center'
    },
    checkboxField: {
        marginRight: 4,
        alignSelf: 'center'
    },
    breakFont: {
        color: colors.gray2,
        fontSize: 12
    },
    checkboxFieldFont: {
        fontSize: 8,
        alignSelf: 'center',
        color: colors.gray2
    },
    formTitleFont: {
        paddingBlock: 12,
        marginBottom: 32,
        fontSize: 24,
        color: colors.red2,
        fontWeight: 600,
        alignSelf: 'center',
    },
    signUpFont: {
        fontSize: 12,
        color: colors.black2,
        textAlign: 'center',
        marginBlock: 8
    },
    signUpLinkFont: {
        color: colors.red2,
    },
})

export default styles