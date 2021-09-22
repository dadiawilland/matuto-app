import colors from "../../helpers/colors"

const styles = () => ({
    containerSideNav: {
        minWidth: 160,
        backgroundColor: colors.gray4,
        // height: '100%',
        borderRight: '1px solid #E8E8EA',
        display: 'flex',
        // justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column'
    },
    containerIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.red,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 24
    },
    containerNavBtnList: {
        display: 'flex',
        justifyContent: 'center',
        marginBlock: 60,
        flexDirection: 'column'
    },
    imgLogo: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    },
})

export default styles