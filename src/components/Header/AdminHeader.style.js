import colors from "../../helpers/colors"

const styles = () => ({
    containerTitle: {
        display: 'flex',
        cursor: 'pointer',
        marginBlock: 11,
    },
    titleImg: {
        width: 30,
        marginRight: 13
    },
    fontTitle: {
        fontSize: 22,
        color: colors.red,
        fontWeight: 500
    },

    containerHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default styles