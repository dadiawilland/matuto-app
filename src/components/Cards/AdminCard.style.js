import colors from '../../helpers/colors';

const styles = () => ({
  containerCard: {
    height: 160,
    width: 246,
    display: 'flex',
    justifyContent: 'center',
    paddingInline: 12,
    paddingBlock: 12,
    marginBottom: 24,
    cursor: 'pointer'
  },
  containerInnerCard: {
    height: 160,
    width: 184,
    backgroundColor: colors.white,
    borderRadius: 18,
    boxShadow: '0px 2px 10px #00000010',
    borderCollapse: 'collapse',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingBlock: 16,
    paddingInline: 16,
    alignItems: 'center',
    backgroundColor: colors.white2
  },
  containerUpper: {
    height: 64,
    width: '100%',
    display: 'flex',
    paddingBottom: 17,
    borderBottom: '1px solid #F6F6F6'
  },
  containerLower: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  containerProperty: {
    height: '50%',
    width: '50%',
    paddingBlock: 2
  },
  containerProfileDetails: {
    // backgroundColor: colors.black,
    height: 64,
    width: 98,
    marginLeft: 12,
    wordWrap: 'break-word'
  },
  containerFontContent: {
    height: 150,
    display: 'flex',
    marginBottom: 12
  },
  containerImage: {
    // marginTop: 16,
    height: 64,
    width: 64,
    borderRadius: 32,
    border: '1px solid #141414',
    // width: '100%',
    // backgroundColor: colors.black,
    // alignSelf: 'center'
    display: 'flex',
    justifyContent: 'center'
  },
  // containerBreak: {
  //     width: 100
  // },
  imgIcon: {
    height: 63,
    width: 63,
    borderRadius: '50%',
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
  fontName: {
    fontSize: 12,
    margin: 0
  },
  fontEmail: {
    fontSize: 10,
    margin: 0,
    color: colors.gray2
  },
  fontPropertyTitle: {
    fontSize: 10,
    color: colors.gray2,
    margin: 0
  },
  fontPropertyValue: {
    fontSize: 12,
    margin: 0
  },
  fontPropertyStatusValue: {
    fontSize: 12,
    margin: 0,
    color: colors.green
  }
});

export default styles;
