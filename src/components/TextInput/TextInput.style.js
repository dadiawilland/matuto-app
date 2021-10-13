import colors from "../../helpers/colors"

const styles = () => ({
    containerField: {
        height: 52,
        flexDirection: 'column',
        display: 'flex',
    },
    containerInputField: {
        height: 32,
        borderRadius: 6,
        border: 0,
        fontSize: 12,
        fontWeight: 500,
        paddingLeft: 6,
        paddingRight: 6,
        color: colors.black2,
        letterSpacing: 0.5,
        fontFamily: 'Poppins',
        border: 'none',
        outline: 'none',
        borderBottom: '1px solid #E8E8EA'
    },
    inputFieldFont: {
        fontSize: 12,
        height: 20,
        fontWeight: 200,
        color: colors.black2
    },
    inputFieldError: {
        height: 32,
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 500,
        paddingLeft: 6,
        paddingRight: 6,
        color: colors.black2,
        letterSpacing: 0.5,
        fontFamily: 'Poppins',
        backgroundColor: colors.red6,
        border: 'none',
        borderBottom: '0.5px solid #E8694C',
        // borderColor: colors.red
    }
})

export default styles