import colors from '../../helpers/colors';

const styles = () => ({
  containerErrorMessage: {
    width: 'auto',
    height: 'fit-content',
    backgroundColor: colors.red6,
    padding: 12,
    // border: '0.5px solid ' + colors.red4,
    borderRadius: 6,
    fontSize: 12,
    color: colors.red4,
    overflowWrap: 'break-word'
  }
});

export default styles;
