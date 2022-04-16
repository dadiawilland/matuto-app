import colors from '../../helpers/colors';

const styles = (isActive) => ({
  containerNavBtn: {
    paddingInline: 20,
    display: 'flex',
    cursor: 'pointer',
    marginBlock: 20
  },
  navBtnImg: {
    height: 16,
    marginRight: 8,
    filter: isActive ? 'none' : 'brightness(0) invert(0)'
  },
  fontNavBtn: {
    userSelect: 'none',
    fontSize: 12,
    color: isActive ? colors.red : colors.black2
  }
});

export default styles;
