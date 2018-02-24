export const zIndexBase = 999

export const theme = {
  transitionTime: '.666s',
  backgroundColor: '#2B303B',
  bodyFontFamily: `'Raleway', sans-serif`,
  spacer: '1px solid black',
  sideNavbar: {
    width: '50px',
    backgroundColor: '#21252D',
    color: '#727781',
    zIndex: zIndexBase,
  },
  statusbar: {
    backgroundColor: '#21252D',
    height: '25px',
    zIndex: zIndexBase + 1,
  },
  workspace: {
    backgroundColor: '#21252D',
    header: {
      height: '40px',
      zIndex: zIndexBase + 1,
    },
  },
}
