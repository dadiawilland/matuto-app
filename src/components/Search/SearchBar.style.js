import colors from "../../helpers/colors"

const styles = () => ({
    containerSearchBar: {
        // width: '100%',
        maxWidth: 1080,
        height: 'auto',
        backgroundColor: colors.red5 + 50,
        borderRadius: 8,
        paddingInline: 13,
        // paddingBlock: 6,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    containerSearchInput: {
        marginRight: 16,
        marginBlock: 8,
    },
    containerFilterBtn: {
        marginRight: 16,
        // marginBlock: 8,
    },
})

export default styles