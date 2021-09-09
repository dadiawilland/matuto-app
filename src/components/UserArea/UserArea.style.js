import colors from "../../helpers/colors"

const styles = () => ({
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
    imgIcon: {
        height: 60,
        width: 60,
        borderRadius: 32,
        alignSelf: 'center'
    },
})

export default styles