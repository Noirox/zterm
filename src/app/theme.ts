const textColor = '#727781';
const textColorActive = 'whitesmoke';
const bgColor = '#21252D';
const bgColorActive = '#2B303B';

export const zIndexBase = 999;

export const theme = {
  transitionTime: '.666s',
  backgroundColor: bgColorActive,
  backgroundColorBase: bgColor,
  bodyFontFamily: `'Raleway', sans-serif`,
  spacer: '1px solid black',
  textColor: textColor,
  textColorActive: textColorActive,
  sideNavbar: {
    width: '50px',
    backgroundColor: bgColor,
    color: textColor,
    zIndex: zIndexBase,
  },
  statusbar: {
    backgroundColor: bgColor,
    height: '25px',
    zIndex: zIndexBase + 1,
  },
  workspace: {
    backgroundColor: bgColor,
    header: {
      tabWidth: '240px',
      height: '40px',
      zIndex: zIndexBase + 1,
      activeTabBarColor: 'rgba(19, 124, 189, 1)', //'#568af2',
      color: textColorActive,
    },
  },
};

// gutter #01313f
// bg #002B36
