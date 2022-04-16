import colors from '../../helpers/colors';

const styles = () => ({
  containerField: {
    height: 52,
    flexDirection: 'column',
    display: 'flex',
    marginBottom: 24
  },
  containerInputField: {
    height: 32,
    border: 0,
    fontSize: 12,
    fontWeight: 500,
    paddingLeft: 6,
    paddingRight: 6,
    color: colors.black2,
    letterSpacing: 0.5,
    fontFamily: 'Poppins',
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid #E8E8EA'
  },
  inputFieldFont: {
    fontSize: 12,
    height: 20,
    fontWeight: 200,
    color: colors.black2
  },
  inputFieldError: {
    height: 32,
    fontSize: 12,
    fontWeight: 500,
    paddingLeft: 6,
    paddingRight: 6,
    color: colors.black2,
    letterSpacing: 0.5,
    fontFamily: 'Poppins',
    outline: 'none',
    // backgroundColor: colors.white,
    borderTop: '0.5px solid ' + colors.red6,
    borderRight: '0.5px solid ' + colors.red6,
    borderLeft: '0.5px solid ' + colors.red6,
    borderBottom: '2px solid ' + colors.red7
  },
  fontError: {
    fontSize: 12,
    color: colors.red2,
    position: 'absolute',
    marginTop: 54,
    fontWeight: 500
  }
});

export default styles;
