import colors from '../../helpers/colors';

const styles = () => ({
  containerCheckbox: {
    flexDirection: 'row',
    display: 'flex',
    marginBottom: 19
  },
  containerBreak: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBlock: 23
  },
  containerBtnAltLogin: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerErrorMessage: {
    width: '100%',
    height: 'fit-content',
    backgroundColor: colors.red6,
    padding: 12,
    borderRadius: 6,
    fontSize: 12,
    color: colors.red4
  },
  btnFont: {
    alignSelf: 'center',
    fontSize: 12,
    textDecoration: 'none',
    display: 'inline-table'
  },
  breakLines: {
    width: '40%',
    height: 1,
    backgroundColor: colors.gray2,
    opacity: 0.5,
    alignSelf: 'center'
  },
  checkboxField: {
    marginRight: 4,
    alignSelf: 'center'
  },
  breakFont: {
    color: colors.gray2,
    fontSize: 12
  },
  checkboxFieldFont: {
    fontSize: 8,
    alignSelf: 'center',
    color: colors.gray2
  }
});

export default styles;
