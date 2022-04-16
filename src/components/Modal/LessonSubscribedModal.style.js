import colors from '../../helpers/colors';

const styles = () => ({
  containerModal: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: colors.gray + 20,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 9999999
  },
  containerForm: {
    position: 'absolute',
    width: '80%',
    minWidth: 1080,
    height: 607.5,
    backgroundColor: colors.yellow3,
    borderRadius: 2,
    border: '1px solid' + colors.green2,
    boxShadow: '0 2px 10px #00000040',
    alignSelf: 'center',
    // marginLeft: 160,
    padding: 32,
    display: 'flex',
    // justifyContent: 'start',
    flexDirection: 'column',
    overflowY: 'auto'
  },
  containerPdf: {
    width: 840,
    alignSelf: 'center',
    height: 475,
    outline: 'none',
    border: 'none',
    borderRadius: 2,
    // borderRadius: 12,
    background: colors.white,
    transform: 'scale(1)',
    boxShadow: '0 4px 10px #00000020'
  },
  containerCloseButton: {
    top: 10,
    left: 10,
    position: 'absolute'
  },
  containerSubmitButton: {
    alignSelf: 'center',
    cursor: 'pointer',
    width: 'fit-content',
    // height: 32,
    padding: 10,
    borderRadius: 4,
    backgroundColor: colors.red,
    display: 'flex',
    // margin: '0 auto',
    justifyContent: 'center',
    right: 10,
    bottom: 10,
    position: 'absolute'
  },
  containerTitle: {
    alignSelf: 'center',
    width: 'fit-content',
    height: 100,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
    // backgroundColor: colors.black,
  },
  imgTitle: {
    width: 96,
    height: 96,
    marginRight: 5
  },
  imgBg: {
    width: 18,
    height: 9,
    alignSelf: 'center'
  },
  fontTitle: {
    display: 'block',
    fontSize: 24,
    margin: 0,
    lineHeight: 1.4,
    fontWeight: 500,
    color: colors.green2
  },
  fontSubmitButton: {
    color: colors.white,
    fontSize: 12,
    alignSelf: 'center',
    marginRight: 5
  },
  fontSubTitle: {
    fontSize: 18,
    fontWeight: 200,
    marginTop: 12,
    marginBottom: 13,
    color: colors.green2,
    fontStyle: 'italic',
    alignSelf: 'center',
    marginLeft: -730
  }
});

export default styles;
