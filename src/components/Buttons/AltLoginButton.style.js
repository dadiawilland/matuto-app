import colors from '../../helpers/colors';

const styles = () => ({
  containerBtnAltLogin: {
    backgroundColor: colors.transparent,
    borderRadius: 6,
    display: 'flex',
    width: 'fit-content',
    paddingInline: 24,
    paddingBlock: 4,
    border: '1px solid #141414',
    color: colors.gray2,
    filter: 'grayscale(100%)',
    ':hover': {
      backgroundColor: colors.black2,
      color: colors.white,
      filter: 'none'
    }
  },
  btnFont: {
    alignSelf: 'center',
    fontSize: 12,
    textDecoration: 'none',
    display: 'inline-table'
  },
  imgIcon: {
    alignSelf: 'center',
    height: 12,
    position: 'absolute',
    marginLeft: -18,
    ':hover': {
      filter: 'none'
    }
  }
});

export default styles;
