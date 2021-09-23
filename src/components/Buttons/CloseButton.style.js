import colors from "../../helpers/colors"

const styles = () => ({
    containerClosebtn: {
        backgroundColor: colors.transparent,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
        paddingInline: 10,
        paddingBlock: 4,
        border: '1px solid #EA5C55',
        color: colors.red,
        ':hover': {
            backgroundColor: colors.red,
            color: colors.white,
        },
        cursor: 'pointer',
    },
    btnFont: {
        alignSelf: 'center',
        fontSize: 14,
        textDecoration: 'none',
        display: 'inline-table',
        cursor: 'pointer',
    }
})

export default styles