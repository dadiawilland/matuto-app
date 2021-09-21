import colors from "../../helpers/colors"

const styles = () => ({
    containerTable: {
        // width: 1080,
        // display: 'flex',
        maxWidth: '100%',
        // justifyContent: 'center'
        marginTop: 22,
        padding: 0
        // margin: '22 auto'
    },
    table: {
        boxShadow: 'none',
        // backgroundColor: colors.white,
        // bottomBorder: 'none'
    },
    tableHeader: {
        fontSize: 13,
        // boxShadow: '0px 4px 5px #00000010',
        backgroundColor: colors.gray5,
        // boxShadow: '0 px 0px -2px #00000010',
        paddingBlock: 10,
        color: colors.black2,
        border: 'none',
        fontWeight: 500,
    },
    tableRow: {
        borderBottom: '1px solid #F1F1F3',
        color: colors.black2,
        fontSize: 10,
        fontWeight: 200,
        height: 30
    },
    tableCell: {
        border: 'none',
        // paddingBlock: 10,
        // height: 30
    },
})

export default styles