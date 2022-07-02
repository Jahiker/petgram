import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`

const expandKeyFrames = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  75% {
    transform: scale(0.55);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 1;
  }
`

const fadeIn = ({ time = '1s', type = 'ease' } = {}) => (
  css`animation: ${fadeInKeyframes} ${time} ${type}`
)

const expand = ({ time = '0.7s', type = 'ease' } = {}) => (
  css`animation: ${expandKeyFrames} ${time} ${type}`
)

export { fadeIn, expand }
