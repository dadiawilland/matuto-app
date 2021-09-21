import colors from "../../helpers/colors"

const styles = (isActive) => ({
    containerSearchInput: {
        backgroundColor: colors.white2,
        width: 320,
        height: 32,
        border: isActive ? '1px solid #97979770' : '1px solid #97979750',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center'
    },
    containerSearchField: {
        // height: '100%',
        width: 292,
        borderRadius: 6,
        border: 0,
        fontSize: 12,
        fontWeight: 400,
        paddingLeft: 6,
        paddingRight: 6,
        color: colors.black2,
        letterSpacing: 0.5,
        fontFamily: 'Poppins',
        border: 'none',
        outline: 'none',
    },
    searchIconImg: {
        width: 12,
        filter: isActive ? 'none' :'brightness(10) grayscale(100%)',
        alignSelf: 'center',
        paddingInline: 8
    },
})

export default styles