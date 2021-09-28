import colors from "../../helpers/colors"
import bg from '../../assets/home-bg.jpg'

const styles = () => ({
    containerCardList: {
        // width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 120,
        // alignSelf: 'center'
        width: 1176,
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
        // marginTop: 120,
        // flexGrow: 1,
        width: '100%',
        // width: 860,
        display: 'flex',
        justifyContent: 'center'

        // justifyContent: 'space-evenly's
    },
})

export default styles