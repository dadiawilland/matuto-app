import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerBtnAltLogin: {
        backgroundColor: colors.transparent,
        borderRadius: 6,
        display: 'flex',
        // justifyContent: 'center',
        width: 'fit-content',
        paddingInline: 24,
        paddingBlock: 4,
        border: '1px solid #141414',
        color: colors.gray2,
        filter: 'grayscale(100%)',
        ':hover': {
            backgroundColor: colors.black2,
            color: colors.white,
            filter: 'none',
        },
    },
    btnFont: {
        alignSelf: 'center',
        fontSize: 12,
        textDecoration: 'none',
        display: 'inline-table'
    },
    imgIcon: {
        // width: 12,
        alignSelf: 'center',
        // filter: 'grayscale(100%)',
        height: 12,
        position: 'absolute',
        marginLeft: -18,
        // right: 20,
        ':hover': {
            filter: 'none',
        },
    }
})

export default styles