import colors from "../../helpers/colors"

const styles = (isActive) => ({
    containerIconActive: {
        backgroundColor: colors.white,
        width: 400,
        height: '100%',
        // borderRadius: 32,
        display: 'flex',
        // justifyContent: 'center',
        position: 'fixed',
        top: 0,
        right: 0,
        transition: 'width 0.2s ease-out',
        ':hover': {
            backgroundColor: colors.white,
            cursor: 'pointer'
        },
    },
    containerArea: {
        width: '100%',
        height: '100%',
        // backgroundColor: colors.black,
        paddingBlock: 8,
        paddingInline: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        // justifyContent: 'center'
    },
    containerSearch: {
        width: 272,
        height: 16,
        borderRadius: 6,
        boxShadow: '0 2px 10px #00000010',
        backgroundColor: colors.white,
        display: 'flex',
        padding: 16
        // justifyContent: 'center'
    },
    containerMessages: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
    },
    containerChatPink:{
        width: 'fit-content',
        maxWidth: 210,
        height: 'auto',
        padding: 8,
        overflowWrap: 'break-word',
        backgroundColor: colors.red3,
        fontSize: 12,
        color: colors.white,
        borderRadius: 16,
        marginBlock: 4
    },
    containerChatBlack:{
        width: 'fit-content',
        maxWidth: 210,
        height: 'auto',
        padding: 8,
        alignSelf: 'flex-end',
        overflowWrap: 'break-word',
        backgroundColor: colors.black2,
        fontSize: 12,
        color: colors.white,
        borderRadius: 16,
        marginBlock: 4
    },
    containerUser: {
        alignSelf: 'start',
        display: 'flex'
    },
    containerIcons: {
        width: 272,
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'start',
        marginBlock: 8
    },
    containerTextArea: {
        width: 272,
        height: 32,
        // paddingBlock: 8,
        paddingInline: 12,
        borderRadius: 24,
        border: 'solid 2px #E8E8EA',
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        color: colors.gray3,
        position: 'absolute',
        bottom: 16
    },
    containerMessageIcon: {
        width: 48,
        height: 48,
        left: -47,
        top: 90,
        position: 'absolute',
        backgroundColor: isActive ? colors.red : colors.white,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        display: 'flex',
        justifyContent: 'center'
    },
    containerWalletIcon: {
        width: 48,
        height: 48,
        left: -47,
        top: 138,
        position: 'absolute',
        backgroundColor: isActive ? colors.red : colors.white,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        display: 'flex',
        justifyContent: 'center'
    },
    imgVoucher: {
        width: 272,
        height: 96,
        alignSelf: 'center',
        marginTop: 12,
    },
    imgWallet: {
        height: 24,
        width: 24,
        alignSelf: 'center',
        filter: isActive ? 'brightness(0) invert(1)' : 'none',
    },
    imgMessage: {
        height: 24,
        width: 24,
        alignSelf: 'center',
        filter: isActive ? 'brightness(0) invert(1)' : 'none',
    },
    imgUserIcn: {
        height: 30,
        width: 30,
        borderRadius: 16,
        marginInline: 6,
        border: '2px solid #E8E8EA'
    },
    imgUser: {
        height: 46,
        width: 46,
        borderRadius: 24,
        border: '2px solid #E8E8EA'
    },
    imgSearch: {
        height: 16,
        width: 16,
        alignSelf: 'center',
        filter: 'brightness(10) grayscale(100%)',
    },  
    imgIconActive: {
        height: 60,
        width: 60,
        borderRadius: 32,
        left: -32,
        top: 17,
        position: 'absolute',
        border: '2px solid #FFFFFF',
        // alignSelf: 'center'
    },
    containerIcon: {
        backgroundColor: colors.red2,
        width: 64,
        height: 64,
        borderRadius: 32,
        display: 'flex',
        justifyContent: 'center',
        ':hover': {
            backgroundColor: colors.white,
            cursor: 'pointer'
        },
    },
    userFont: {
        fontSize: 16,
        alignSelf: 'center',
        marginLeft: 8
    },
    imgIcon: {
        height: 60,
        width: 60,
        borderRadius: 32,
        alignSelf: 'center'
    },
})

export default styles