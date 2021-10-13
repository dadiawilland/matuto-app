import colors from "../../helpers/colors"

const styles = () => ({
    containerCard: {
        height: 'auto',
        width: 270,
        display: 'flex',
        justifyContent: 'center',
        paddingInline: 12,
        paddingBlock: 12,
        marginBottom: 12,
        cursor: 'pointer'
    },
    containerInnerCard: {
        height: 'auto',
        width: 256,
        backgroundColor: colors.white,
        borderRadius: 18,
        // boxShadow: '0px 2px 10px #00000010',
        borderCollapse: 'collapse',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: 16,
        paddingInline: 16,
        alignItems: 'center'
    },
    containerFontContent: {
        height: 'auto',
        display: 'flex',
        marginBottom: 12,
        whiteSpace: 'pre-line'
    },
    containerImage: {
        marginTop: 16,
        height: 64,
        width: '100%',
        // backgroundColor: colors.black,
        // alignSelf: 'center'
        display: 'flex',
        justifyContent: 'center'
    }, 
    imgIcon: {
        height: 64,
        alignSelf: 'center'
        // width: 160,
    },
    fontTitle: {
        fontSize: 18,
        color: colors.black2,
        textAlign: 'center',
        marginBlock: 12
    },
    fontContent: {
        fontSize: 12,
        color: colors.gray3,
        // maxHeight: 235,
        // lineHeight: 1
    },
    fontPrice: {
        fontSize: 18,
        color: colors.black2,
        textAlign: 'center',
        marginTop: 12,
    },
    fontDescription: {
        fontSize: 12,
        color: colors.gray3,
        whiteSpace: 'pre-line'
    },
    containerButton: {
        // position: 'absolute',
        alignSelf: 'center'
    }
})

export default styles