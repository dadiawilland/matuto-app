import colors from "../../helpers/colors"
import bg1 from '../../assets/level-1-bg.jpg'
import bg2 from '../../assets/level-2-bg.jpg'
import bg3 from '../../assets/level-3-bg.jpg'
import bg4 from '../../assets/level-4-bg.jpg'

const styles = (isOpen) => ({
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
        position: 'absolute',
        width: '100%',
        height: 800,
        left: 0,
        top: 0,
        // width: 860,
        // display: 'flex',
        // justifyContent: 'start',
        // flexDirection: 'row',
        backgroundColor: colors.black,


        // justifyContent: 'space-evenly's
    },
    containerLevel1: {
        cursor: isOpen ? 'default' : 'pointer',
        left: 0,
        width:isOpen ? '50%' : '25%',
        height: '100%',
        backgroundColor: colors.white,
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        clipPath: isOpen ? 'polygon(0px 0px, 100% 0px, 85% 100%, 0% 100%)' :'polygon(0 0, 100% 0, 75% 100%, 0% 100%)',
        position: 'absolute',
        transition: 'width 0.2s ease-out',
        zIndex: isOpen ? 99999 : 1,
        // ':hover': {
        //     width: isOpen ? '25%' : '50%',
        //     clipPath: isOpen ? 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' : 'polygon(0px 0px, 100% 0px, 85% 100%, 0% 100%)',
        //     zIndex: isOpen ? 1 : 99999,
        // },
        
    },
    containerLevel2: {
        cursor: 'pointer',
        cursor: 'pointer',
        left: 'calc(50% - 31.2%)',
        width: isOpen ? '59.5%' : '35.5%',
        height: '100%',
        backgroundColor: colors.white,
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)',
        clipPath: isOpen ? 'polygon(10% 0px, 100% 0px, 89% 100%, 0% 100%)' : 'polygon(17% 0px, 100% 0px, 80% 100%, 0% 100%)',
        transition: 'width 0.2s ease-out',
        position: 'absolute',
        zIndex: isOpen ? 99999 : 1,
        // ':hover': {
        //     // left: 'calc(50% - 47.2%)',
        //     width: isOpen ? '35.5' : '59.5%',
        //     clipPath: isOpen ? 'polygon(17% 0px, 100% 0px, 80% 100%, 0% 100%)' : 'polygon(10% 0px, 100% 0px, 89% 100%, 0% 100%)',
        //     zIndex: isOpen ? 1 : 99999,
        // },
    }
    ,containerLevel3: {
        cursor: 'pointer',
        right: 'calc(50% - 32.5%)',
        width: isOpen ? '60.5%' : '35.5%',
        height: '100%',
        backgroundColor: colors.white,
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)',
        clipPath: isOpen ? 'polygon(10% 0px, 98% 0px, 88% 100%, 0% 100%)' : 'polygon(20% 0px, 97% 0px, 79% 100%, 0% 100%)',
        position: 'absolute',
        transition: 'width 0.2s ease-out',
        zIndex: isOpen ? 99999 : 1,
        // ':hover': {
        //     // left: 'calc(50% - 47.2%)',
        //     width: isOpen ? '35.5' :'60.5%',
        //     clipPath: isOpen ? 'polygon(20% 0px, 97% 0px, 79% 100%, 0% 100%)' : 'polygon(10% 0px, 98% 0px, 88% 100%, 0% 100%)',
        //     zIndex: isOpen ? 1 : 99999,
        // },
    },
    containerLevel4: {
        cursor: 'pointer',
        right: 0,
        width: isOpen ? '50%' : '25%',
        height: '100%',
        backgroundColor: colors.white,
        backgroundImage: `url(${bg4})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        clipPath: isOpen ? 'polygon(14% 0%, 100% 0px, 100% 100%, 0% 100%)' : 'polygon(25% 0%, 100% 0, 100% 100%, 0% 100%)',
        position: 'absolute',
        transition: 'width 0.2s ease-out',
        zIndex: isOpen ? 99999 : 1,
        // ':hover': {
        //     // left: 'calc(50% - 47.2%)',
        //     width: isOpen ? '25%'  :'50%',
        //     clipPath: isOpen ? 'polygon(25% 0%, 100% 0, 100% 100%, 0% 100%)' : 'polygon(14% 0%, 100% 0px, 100% 100%, 0% 100%)',
        //     zIndex: isOpen ? 1 : 99999,
        // },
    },
    fontTitle: {
        display: 'block',
        fontSize: 24,
        margin: 0,
        lineHeight: 1.4,
        // fontWeight: 300,
        color: colors.black,
    },
    containerTitle1: {
        display: 'block',
        marginLeft: 46,
        // alignSelf: 'center',
        marginTop: 172
    },
    containerTitle2: {
        display: 'block',
        marginLeft: 96,
        // alignSelf: 'center',
        marginTop: 172
    },
    containerTitle3: {
        display: 'block',
        marginLeft: 104,
        // alignSelf: 'center',
        marginTop: 172
    },
    containerTitle4: {
        display: 'block',
        marginLeft: 96,
        // alignSelf: 'center',
        marginTop: 172
    },
    containerOptionsList: {
        display: 'flex',
        marginLeft: 46,
        // height: '100%',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    containerOption: {
        display: 'flex',
        width: 'fit-content',
        height: 'fit-content',
        marginBlock: 19,
        cursor: 'pointer'
    },
    containerNumber: {
        height: 60,
        width: 60,
        borderRadius: 30,
        border: 'solid 2px ' + colors.green2,
        backgroundColor: colors.yellow3,
        display: 'flex',
        justifyContent: 'center',
        marginRight: 5
    },
    containerDescription: {
        height: 44,
        width: 300,
        borderRadius: 16,
        backgroundColor: colors.green2 + '95',
        padding: 10,
        boxShadow: '0px 2px 10px #00000020',
        display: 'flex',
        alignItems: 'center'
    },
    fontNumber: {
        alignSelf: 'center',
        fontSize: 24,
        color: colors.green
    },
    fontDescription: {
        fontSize: 16,
        color: colors.black
    }
})

export default styles