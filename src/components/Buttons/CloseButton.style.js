import colors from "../../helpers/colors"

const styles = () => ({
    containerClosebtn: {
        backgroundColor: colors.red,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        height: 18,
        width: 18,
        borderRadius: 9,
        // width: 'fit-content',
        // paddingInline: 10,
        // paddingBlock: 4,
        border: '1px solid #EA5C55',
        color: colors.red,
        cursor: 'pointer',
    },
    btnFont: {
        alignSelf: 'center',
        fontSize: 14,
        textDecoration: 'none',
        display: 'inline-table',
        cursor: 'pointer',
    },
    filterIconImg: {
        alignSelf: 'center',
        height: 6,
        filter: 'brightness(10) grayscale(100%)',
        cursor: 'pointer',
    },
})

export default styles