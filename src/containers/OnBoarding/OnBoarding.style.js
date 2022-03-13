import colors from "../../helpers/colors"

const styles = () => ({
    containerSignIn: {
        height: '100%',
        display: 'flex',
        // paddingRight: 62,
        minHeight: '100vh',
        // width: '100%',
    },
    containerMessage: {
        backgroundColor: colors.red6,
        border: '2px solid ' + colors.red2,
        margin: 12.5,
        padding: 12.5,
        borderRadius: 6,
        color: colors.red,
        fontSize: 13,
        lineHeight: 1.25,
        maxHeight: 75,
        overflow: 'auto',
    },
    containerOnboardingErrorMessage: {
        top: 100,
        maxWidth: 565,
        position: 'absolute',
        height: 125,
        width: 'calc(100% - 400px)',
    },
    containerLeft: {
        backgroundColor: colors.red3,
        height: 'auto',
        display: 'flex',
        width: 400,
        flexDirection: 'column'
    },
    containerRight: {
        backgroundColor: colors.white,
        height: 'auto',
        display: 'flex',
        width: 'calc(100% - 400px)',
        justifyContent: 'center',
    },
    copyFont: {
        fontSize: 40,
        color: colors.white,
        fontWeight: 200,
        alignSelf: 'center',
        marginTop: 210,
        paddingLeft: 32,
        paddingRight: 32
    },
    imgBg: {
        width: 320,
        height: 320,
        position: 'fixed',
        bottom: 0,
        alignSelf: 'center'
    }
})

export default styles