import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = (isDisabled) => ({
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
    containerCardContent: {
        marginTop: 260,
        // flexGrow: 1,
        width: '100%',
        // width: 860,
        display: 'flex',
        justifyContent: 'center'

        // justifyContent: 'space-evenly's
    },
    containerPriceList: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    containerButton: {
        alignSelf: 'center',
        margin: '0 auto',
        backgroundColor: isDisabled ? colors.gray3 : colors.red,
        border: isDisabled ? '1px solid #9D9D9D' : '1px solid #EA5C55',
        ':hover': {
            backgroundColor: isDisabled ? colors.gray3 : colors.red4,
            color: isDisabled ? '1px solid #9D9D9D' : colors.white,
        },
    }
})

export default styles