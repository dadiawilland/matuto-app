import colors from "../../helpers/colors"

const styles = () => ({
    containerCard: {
        height: 400,
        width: 270,
        display: 'flex',
        justifyContent: 'center',
        paddingInline: 12,
        paddingBlock: 12,
        cursor: 'pointer'
    },
    containerInnerCard: {
        height: 384,
        width: 256,
        backgroundColor: colors.red3,
        borderRadius: 18,
        boxShadow: '0px 2px 10px #00000060',
        borderCollapse: 'collapse',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: 16,
        paddingInline: 16,
        alignItems: 'center',
    },
    imgIcon: {
        height: 16,
        widtht: 16,
        alignSelf: 'center'
        // width: 160,
    },
    fontTitle: {
        fontSize: 18,
        width: '100%',
        color: colors.white,
        textAlign: 'center',
        marginTop: 41,
        marginBottom: 190
    },
    containerButton: {
        // position: 'absolute',
        backgroundColor: colors.red,
        boxShadow: '0px 2px 10px #00000020',
        width: 32,
        height: 32,
        borderRadius: 16,
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center'
    }
})

export default styles