import colors from '../../helpers/colors';

const styles = (isDisabled) => ({
  containerOption: {
    display: 'flex',
    width: 'fit-content',
    height: 'fit-content',
    marginBlock: 19,
    cursor: 'pointer',
    zIndex: 999999
  },
  containerNumber: {
    height: 60,
    width: 60,
    borderRadius: 30,
    border: 'solid 2px ' + (isDisabled ? colors.gray : colors.green2),
    backgroundColor: isDisabled ? colors.gray5 : colors.yellow3,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 5
  },
  containerDescription: {
    height: 44,
    width: 300,
    borderRadius: 16,
    backgroundColor: (isDisabled ? colors.gray5 : colors.green2) + '95',
    padding: 10,
    boxShadow: '0px 2px 10px #00000020',
    display: 'flex',
    alignItems: 'center'
  },
  fontNumber: {
    alignSelf: 'center',
    fontSize: 24,
    color: isDisabled ? colors.gray3 : colors.green
  },
  fontContainer: {
    fontSize: 16,
    color: isDisabled ? colors.gray3 : colors.black
  }
});

export default styles;
