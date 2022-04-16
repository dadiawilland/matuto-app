import colors from '../../helpers/colors';

const styles = () => ({
  containerCard: {
    height: 400,
    width: 270,
    display: 'flex',
    justifyContent: 'center',
    paddingInline: 12,
    paddingBlock: 12,
    marginBottom: 12
  },
  containerInnerCard: {
    height: 384,
    width: 256,
    backgroundColor: colors.white,
    borderRadius: 18,
    boxShadow: '0px 2px 10px #00000010',
    borderCollapse: 'collapse',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingBlock: 16,
    paddingInline: 16,
    alignItems: 'center'
  },
  containerFontContent: {
    height: 150,
    display: 'flex',
    marginBottom: 12
  },
  containerImage: {
    marginTop: 16,
    height: 128,
    width: '100%',
    // backgroundColor: colors.black,
    // alignSelf: 'center'
    display: 'flex',
    justifyContent: 'center'
  },
  imgIcon: {
    height: 128,
    alignSelf: 'center'
    // width: 160,
  },
  fontTitle: {
    fontSize: 18,
    color: colors.black2,
    textAlign: 'center',
    marginBlock: 12
  },
  fontContent: {
    fontSize: 12,
    color: colors.gray3
    // maxHeight: 235,
    // lineHeight: 1
  },
  containerButton: {
    // position: 'absolute',
    alignSelf: 'center'
  }
});

export default styles;
