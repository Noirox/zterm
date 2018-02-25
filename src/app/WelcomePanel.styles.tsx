import {css, keyframes,} from 'glamor';

export const blinkAnim = keyframes('blink', {
  '0% ': {opacity: 1.0},
  '50%': {opacity: 0.0},
  '100%': {opacity: 1.0},
});

const icon = css({
  margin: '0 auto',
  marginTop: '50px',
  width: '34px',
  height: '28px',
  backgroundColor: '#434242',
  border: 'solid 2px whitesmoke',
  borderRadius: '7%',
  textAlign: 'center',
  fontWeight: '600',
  '&:before, &:after': {
    position: 'absolute',
    width: 0,
    height: 0,
    color: 'whitesmoke',
    fontSize: '16px'
  },
  ':before': {
    fontSize: '16px',
    content: '>',
    marginLeft: '-12px',
    marginTop: '3px'
  },
  '&:after': {
    fontSize: '20px',
    content: '_',
    marginTop: '0px',
    marginLeft: '-2px',
    animation: `${blinkAnim} 1.1s linear infinite`,
  },
});
//
// const icon = css({
//   margin: '0 auto',
//   marginTop: '50px',
//   width: '80px',
//   height: '55px',
//   backgroundColor: '#434242',
//   border: 'solid 3px #afbbc2',
//   borderRadius: '7%',
//   textAlign: 'center',
//   '&:before, &:after': {
//     position: 'absolute',
//     width: 0,
//     height: 0,
//     color: 'whitesmoke',
//     fontSize: '22px'
//   },
//   ':before': {
//     fontSize: '18px',
//     content: '>',
//     marginLeft: '-25px',
//     marginTop: '28px'
//   },
//   '&:after': {
//     content: '_',
//     marginTop: '20px',
//     marginLeft: '-10px',
//     animation: `${blinkAnim} 1s linear infinite`,
//   },
// });

const title = css({
  fontSize: '16px',
  margin: '0 auto',
  marginTop: '5px',
  width: '107px',
  height: '45px',
  paddingLeft: '12px',
  fontFamily: `'Raleway', sans-serif`,
  textTransform: 'uppercase',
  fontWeight: '600',
});

export const wrapper = css({
  userSelect: 'none',
});

export const yateIconStyles = {
  blinkAnim,
  icon,
  title,
  wrapper,
};
