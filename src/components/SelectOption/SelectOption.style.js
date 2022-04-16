import colors from '../../helpers/colors';

const styles = (isSelected) => ({
  containerOption: {
    cursor: 'pointer',
    height: 32,
    paddingInline: 16,
    width: 'fit-content',
    borderRadius: 16,
    backgroundColor: isSelected ? colors.red3 : colors.white2,
    color: isSelected ? colors.white : colors.black2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 10px #00000010',
    fontSize: 12,
    fontWeight: 200,
    marginBlock: 12
  }
});

export default styles;
