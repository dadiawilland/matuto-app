import colors from '../../helpers/colors';

const styles = (isActive) => ({
  containerSearchFilter: {
    backgroundColor: colors.white2,
    width: 'fit-content',
    paddingInline: 35,
    paddingBlock: 7,
    border: isActive ? '1px solid #EA5C5570' : '1px solid #97979750',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    filter: isActive ? 'none' : 'grayscale(100%)',
    ':hover': {
      filter: 'none',
      border: '1px solid #EA5C5570'
    }
  },
  searchFilterIconImg: {
    alignSelf: 'center',
    height: 16,
    position: 'absolute',
    marginLeft: -24
  },
  fontSearchFilter: {
    alignSelf: 'center',
    fontSize: 12,
    textDecoration: 'none',
    display: 'inline-table',
    color: colors.red
  }
});

export default styles;
