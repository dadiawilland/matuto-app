import colors from '../../helpers/colors';

const styles = () => ({
  containerFilter: {
    backgroundColor: colors.white2,
    width: 'fit-content',
    paddingInline: 8,
    marginRight: 8,
    marginBlock: 8,
    paddingBlock: 6,
    border: '1px solid #EA5C5570',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  filterIconImg: {
    alignSelf: 'right',
    height: 6,
    // position: 'absolute',
    marginLeft: 8,
    cursor: 'pointer'
  },
  fontFilter: {
    alignSelf: 'center',
    fontSize: 12,
    textDecoration: 'none',
    display: 'inline-table',
    color: colors.red
  }
});

export default styles;
