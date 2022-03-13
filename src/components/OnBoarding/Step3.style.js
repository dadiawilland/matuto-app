import colors from "../../helpers/colors"

const styles = (isSelected) => ({
  containerForm: {
    display: 'flex',
    flexDirection: 'column',
    paddingInline: 19,
    marginTop: 225
    // margin: 'auto'
  },
  fontTitle: {
    fontSize: 26,
    color: colors.gray7,
    marginLeft: 15,
    marginBottom: 12
  },
  containerSurvey: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 747,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 12
  },
  fontSubTitle: {
    fontSize: 16,
    fontWeight: 200,
    color: colors.gray7,
    marginLeft: 15,
  },
  containerOption: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    width: 201,
    height: 51,
    backgroundColor: colors.black,
    borderRadius: 8,
    padding: 12,
    margin: 12,
    backgroundColor: isSelected ? colors.green4 : colors.green6,
    WebkitTransition: 'background 0.5s', /* For Safari 3.0 to 6.0 */
    transition: 'background 0.5s', /* For modern browsers */
  },
  fontText: {
    fontSize: 18,
    color: colors.white,
    alignSelf: 'center',
  }
})
export default styles