import colors from "../../helpers/colors"

const styles = (isSelected) => ({
    containerGrid: {
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: colors.black,
        // width: 390,
        // width: 'calc(100% - 400px)',
        height: 'auto',
        flexFlow: 'wrap',
        marginBottom: 19
    },
    containerForm: {
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'column',
        paddingInline: 19,
        // width: 300,
        maxWidth: 'calc(100% - 400px)',
        // marginTop: 250
        margin: 'auto'
    },
    containerSurvey: {

    },
    containerOption: {

    },
    containerAvatar: {
        display: 'flex',
        minWidth: 180,
        height: 215,
        margin: 7.5,
        borderRadius: 2,
        backgroundColor: isSelected ? colors.red7 : colors.red7 + '30',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: colors.red7,
            '-webkit-transition': 'background 0.5s', /* For Safari 3.0 to 6.0 */
            transition: 'background 0.5s' /* For modern browsers */
        },
    },
    fontTitle: {

    },
    fontSubTitle: {

    },
    imgAvatar: {
        height: 180,
        margin: '0 auto',
        alignSelf: 'center'
    }
})

export default styles