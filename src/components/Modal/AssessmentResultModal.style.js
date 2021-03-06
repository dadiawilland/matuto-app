import colors from "../../helpers/colors"
import bg from '../../assets/modal-assessment-bg.png'

const styles = () => ({
    containerModal: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: colors.gray + 20,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 9999999
    },
    containerForm: {
        position: 'absolute',
        width: '80%',
        minWidth: 1080,
        height: 607.5,
        backgroundColor: colors.yellow3,
        borderRadius: 2,
        border: '1px solid' + colors.green2,
        boxShadow: '0 2px 10px #00000040',
        alignSelf: 'center',
        // marginLeft: 160,
        padding: 32,
        display: 'flex',
        // justifyContent: 'start',
        flexDirection: 'column',
        overflowY: 'auto'
    },
    containerResult: {
        width: 960,
        alignSelf: 'center',
        height: 475,
        outline: 'none',
        border: 'none',
        borderRadius: 2,
        background: colors.white,
        transform: 'scale(1)',
        // border: '1px solid' + colors.gray2,
        boxShadow: '0 4px 10px #00000010',
        padding: 16,
        backgroundImage: `url(${bg})`,
        // height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
        // backgroundAttachment: 'fixed',
    },
    containerCloseButton: {
        top: 10,
        left: 10,
        position: 'absolute',
    },
    containerSubmitButton: {
        alignSelf: 'center',
        cursor: 'pointer',
        width: 64,
        height: 32,
        borderRadius: 4,
        backgroundColor: colors.red,
        display: 'flex',
        // margin: '0 auto',
        justifyContent: 'center',
        right: 10,
        bottom: 10,
        position: 'absolute',
    },
    containerTitle: {
        alignSelf: 'center',
        width: 'fit-content',
        height: 100,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
        // backgroundColor: colors.black,
    },
    containerChoice: {
        width: 260,
        height: 120,
        marginBlock: 5,
        marginInline: 10,
        backgroundColor: colors.white,
        border: '1px solid' + colors.green2,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        padding: 19
    },
    imgTitle: {
        width: 96,
        height: 96,
        marginRight: 5
    },
    imgBg: {
        width: 18,
        height: 9,
        alignSelf: 'center'
    },
    fontTitle: {
        display: 'block',
        fontSize: 24,
        margin: 0,
        lineHeight: 1.4,
        fontWeight: 500,
        color: colors.green2,
    },
    fontSubTitle: {
        fontSize: 18,
        fontWeight: 200,
        marginTop: 12,
        marginBottom: 13,
        alignSelf: 'center',
        marginLeft: -870,
        color: colors.green2,
        fontStyle: 'italic'
    },
    fontChoice: {
        fontSize: 22,
        color: colors.green,
        fontWeight: 300
    },
    fontResultTitle: {
        fontSize: 22,
        marginTop: 96,
        fontWeight: 300
    },
    fontResultSubTitle: {
        fontSize: 42,
        color: colors.green4,
        fontWeight: 500
    },
    fontVoucher: {
        fontSize: 12,
        marginTop: 96,
        fontWeight: 500,
        alignSelf: 'center',
        color: colors.red,
        // margin: '0 auto'
    },
    imgVoucher: {
        marginTop: 12,
        width: 272,
        boxShadow: '0 4px 10px ' + colors.yellow2 + '70',
    }
})

export default styles