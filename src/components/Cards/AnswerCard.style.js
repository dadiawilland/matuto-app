import colors from "../../helpers/colors"

const styles = (isSelected) => ({
    containerChoice: {
        cursor: 'pointer',
        width: 260,
        height: 60,
        marginBlock: 45,
        marginInline: 10,
        backgroundColor: isSelected ? colors.green2 : colors.yellow3,
        // border: '1px solid' + colors.red,
        borderRadius: 6,
        display: 'flex',
        boxShadow: isSelected ? 'none' : '0 2px 10px #00000020',
        justifyContent: 'center',
        padding: 19
    },
    fontChoice: {
        fontSize: 16,
        color: isSelected ? colors.white2 : colors.black2 + 70,
        // color: colors.gray2,
        fontWeight: 300
    }
})

export default styles