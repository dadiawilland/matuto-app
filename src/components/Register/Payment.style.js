import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerForm: {
        backgroundColor: colors.white,
        // height: 300,
        display: 'flex',
        alignSelf: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        paddingInline: 19,
        width: 300,
    },
    containerField: {
        height: 52,
        // borderRadius: 6,
        flexDirection: 'column',
        display: 'flex',
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
    containerBreak: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBlock: 23
    },
    containerBtnAltLogin: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: '100%'
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
    inputFieldFont: {
        fontSize: 12,
        height: 20,
        color: colors.black2
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
    paymentTitleFont: {
        fontSize: 12,
        height: 20,
        fontWeight: 200,
        color: colors.black2
    }
})

export default styles