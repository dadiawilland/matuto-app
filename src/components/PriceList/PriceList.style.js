import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
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
    }
})

export default styles