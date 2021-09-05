import colors from "../../helpers/colors"

const styles = () => ({
    containerBtnSignIn: {
        backgroundColor: colors.transparent,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
        paddingInline: 24,
        paddingBlock: 8,
        border: '1px solid #EA5C55',
        color: colors.red,
        ':hover': {
            backgroundColor: colors.red,
            color: colors.white,
        },
    },
    btnFont: {
        alignSelf: 'center',
        fontSize: 12,
        textDecoration: 'none',
        display: 'inline-table'
    }
})

export default styles