import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerHome: {
        height: '100%',
        display: 'flex',
        paddingInline: 62,
        flexDirection: 'column',
        minHeight: 1080
    },
    containerCard: {
        height: 400,
        width: 270,
        display: 'flex',
        justifyContent: 'center',
        paddingInline: 12,
        paddingBlock: 12
    },
    containerInnerCard: {
        height: 384,
        width: 256,
        backgroundColor: colors.white,
        borderRadius: 18,
        boxShadow: '0px 2px 10px #00000010',
        borderCollapse: 'collapse',
        alignSelf: 'center'
    },
    containerCardContent: {
        marginTop: 120,
        // flexGrow: 1,
        width: '100%',
        // width: 860,
        display: 'flex',
        justifyContent: 'center'

        // justifyContent: 'space-evenly's
    },
    containerCardList: {
        // width: '100%',
        display: 'flex',
        flexDirection: 'row',
        // alignSelf: 'center'
        maxWidth: 1180,
        flexWrap: 'wrap',
        '@media screen and (max-width: 1300px)': {
            maxWidth: 882,
        },
        '@media screen and (max-width: 1080px)': {
            maxWidth: 588,
        },
        '@media screen and (max-width: 710px)': {
            maxWidth: 294,
        }
    },
    headerFont: {
        fontSize: 48,
        color: colors.red,
        lineHeight: 1.1,
        fontWeight: 500,
        position: 'absolute',
        top: 28,
        left: 98,
    },
})

export default styles