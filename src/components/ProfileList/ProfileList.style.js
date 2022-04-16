import colors from '../../helpers/colors';

const styles = () => ({
  containerCardList: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // alignSelf: 'center'
    width: 1080,
    flexWrap: 'wrap',
    '@media screen and (max-width: 1300px)': {
      maxWidth: 882
    },
    '@media screen and (max-width: 1080px)': {
      maxWidth: 588
    },
    '@media screen and (max-width: 710px)': {
      maxWidth: 294
    }
  },
  containerCardContent: {
    marginTop: 20,
    // flexGrow: 1,
    width: '100%',
    // width: 860,
    display: 'flex',
    justifyContent: 'center'
    // justifyContent: 'space-evenly's
  }
});

export default styles;
