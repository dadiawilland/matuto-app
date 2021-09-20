import colors from "../../helpers/colors"

const styles = () => ({
    containerBtnAltLogin: {
        backgroundColor: colors.transparent,
        borderRadius: 6,
        display: 'flex',
        cursor: 'pointer',
        width: 'fit-content',
        paddingInline: 24,
        paddingBlock: 4,
        border: '1px solid #E19B21',
        color: colors.gray2,
        filter: 'grayscale(100%)',
        ':hover': {
            backgroundColor: colors.yellow,
            color: colors.white,
            filter: 'none',
            boxSizing: 'border-box',
        },
    },
    btnFont: {
        alignSelf: 'center',
        fontSize: 12,
        textDecoration: 'none',
        display: 'inline-table'
    },
    imgIcon: {
        alignSelf: 'center',
        height: 12,
        position: 'absolute',
        marginLeft: -18,
        ':hover': {
            filter: 'none',
        },
    }
})

export default styles