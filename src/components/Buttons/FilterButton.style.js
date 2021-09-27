import colors from "../../helpers/colors"

const styles = (isActive) => ({
    containerSearchFilter: {
        backgroundColor: colors.white2,
        width: 'fit-content',
        // paddingInline: 35.5,
        // paddingBlock: 7,
        height: 34,
        width: 120,
        justifyContent: 'center',
        // border: isActive ? '1px solid #FEFEFE' : '1px solid #97979750',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        // filter: isActive ? 'none' : 'grayscale(100%)',
        ':hover': {
            filter: 'none',
            // border: '1px solid #EA5C5570',
            // borderLeft: '1px solid #EA5C5570',
            // borderTop: '1px solid #EA5C5570',
            // borderBottom: '1px solid #FEFEFE'
        },
        marginBottom: 0,
        borderBottomRightRadius: isActive ? 0 : 6,
        borderBottomLeftRadius: isActive ? 0 : 6,
        borderTop: isActive ?  '1px solid #EA5C5570' : '1px solid #97979750',
        borderLeft: isActive ?  '1px solid #EA5C5570' : '1px solid #97979750',
        borderRight: isActive ?  '1px solid #EA5C5570' : '1px solid #97979750',
        borderBottom: isActive ?  '1px solid #FEFEFE00' : '1px solid #97979750'
    },
    searchFilterIconImg: {
        alignSelf: 'center',
        height: 16,
        // position: 'absolute',
        filter: isActive ? 'none' : 'grayscale(100%)',
        marginRight: 12,
    },
    fontSearchFilter: {
        alignSelf: 'center',
        fontSize: 12,
        textDecoration: 'none',
        // display: 'inline-table',
        color: isActive ? colors.red : colors.gray2
    },
    itemList: {
        display: isActive ? 'inline-block' : 'none',
        height: 'fit-content',
        paddingTop: 3,
        paddingBottom: 1.5,
        width: 120,
        
        zIndex: 999999,
        backgroundColor: colors.white2,
        position: 'absolute',
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderLeft: '1px solid #EA5C5570',
        borderRight: '1px solid #EA5C5570',
        borderBottom: '1px solid #EA5C5570'
    },
    fontItem: {
        alignSelf: 'center',
        fontSize: 10,
        textDecoration: 'none',
        color: colors.red,
        // ':hover': {
        //     color: colors.white2
        // },
    },
    item: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        height: 34,
        // paddingInline: 35,
        // paddingBlock: 5,
        borderTop: '1px solid #EA5C5570',
            // borderBottom: '1px solid #EA5C5570',
        ':hover': {
            backgroundColor: colors.white
        },
    }
})

export default styles