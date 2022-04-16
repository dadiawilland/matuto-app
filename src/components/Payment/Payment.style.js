import colors from '../../helpers/colors';
import bg from '../../assets/home-bg.jpg';

const styles = () => ({
  containerCardContent: {
    marginTop: 260,
    // flexGrow: 1,
    width: '100%',
    // width: 860,
    display: 'flex',
    justifyContent: 'center'

    // justifyContent: 'space-evenly's
  },
  containerPayment: {
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'row',
    // justifyContent: ''
    minHeight: '100vh'
  },
  containerLeft: {
    width: '50%',
    height: '100%',
    // backgroundColor: colors.black,
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh'
  },
  containerRight: {
    width: '50%',
    height: '100%',
    // backgroundColor: colors.red,
    justifyContent: 'flex-start',
    display: 'flex',
    minHeight: '100vh'
  },
  containerButton: {
    alignSelf: 'center',
    margin: '0 auto'
  }
});

export default styles;
