
import React from 'react'
import scale from './scale'
import breakpoints from './breakpoints'

const Box = ({
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  fill,
  col,
  sm,
  md,
  lg,
  ...props
}) => {

  let width

  if (typeof window != undefined) {
    if (sm && window.matchMedia(breakpoints.sm).matches) {
      width = (sm / 12 * 100) + '%'
    } else if (md && window.matchMedia(breakpoints.md).matches) {
      width = (md / 12 * 100) + '%'
    } else if (lg && window.matchMedia(breakpoints.lg).matches) {
      width = (lg / 12 * 100) + '%'
    } else if (sm || md || lg) {
      // Should this be 100%?
      width = null
    } else {
      width = col ? (col / 12 * 100) + '%' : null
    }
  } else {
    width = col ? (col / 12 * 100) + '%' : null
  }

  const style = {
    boxSizing: 'border-box',
    flex: fill ? '1 1 auto' : null,
    padding: p ? scale[p] : null,
    paddingTop:    py ? scale[py] : (pt ? scale[pt] : null),
    paddingBottom: py ? scale[py] : (pb ? scale[pb] : null),
    paddingLeft:   px ? scale[px] : (pl ? scale[pl] : null),
    paddingRight:  px ? scale[px] : (pr ? scale[pr] : null),
    width: width,
    flexBasis: width
  }

  return <div
    {...props}
    style={style}
    className='Box' />
}

const { bool, oneOf } = React.PropTypes

Box.propTypes = {
  fill: bool,
  col: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  p: oneOf([0, 1, 2, 3, 4]),
  px: oneOf([0, 1, 2, 3, 4]),
  py: oneOf([0, 1, 2, 3, 4]),
  pt: oneOf([0, 1, 2, 3, 4]),
  pb: oneOf([0, 1, 2, 3, 4]),
  pl: oneOf([0, 1, 2, 3, 4]),
  pr: oneOf([0, 1, 2, 3, 4]),
}

export default Box

