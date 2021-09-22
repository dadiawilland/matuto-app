import colors from "../../helpers/colors"

const styles = () => ({
    containerAdmin: {
        height: '100%',
        display: 'flex',
        // paddingInline: 62,
        flexDirection: 'row',
        minHeight: '100vh',
        // backgroundColor: '#000000'
        backgroundColor: colors.white2
    },
    containerContent: {
        width: '100%',
        maxWidth: 1080,
        minHeight: 1080,
        paddingInline: 64,
        paddingBlock: 20,
        margin: '0 auto',
        // display: 'flex',
        // justifyContent: 'row'
        
    },
})

export default styles