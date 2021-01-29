import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  fill?: string
  secondaryfill?: string
  strokewidth?: number
  width?: string
  height?: string
  title?: string
  className?: string
}

const Letter: React.FC<Props> = (props) => {
  const fill = props.fill || 'currentColor'
  const secondaryfill = props.secondaryfill || fill
  const width = props.width || '100%'
  const height = props.height || '100%'
  const title = props.title || 'logo-twitter'
  const className = props.className || ''

  return (
    <svg
      className={className}
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={secondaryfill}>
        <path
          d="M32,0.8c-17.7,0-32,14.3-32,32c0,14.1,9.2,26.1,21.9,30.4
	c1.6,0.3,2.2-0.7,2.2-1.5c0-0.8,0-2.8,0-5.4c-8.9,1.9-10.8-4.3-10.8-4.3c-1.5-3.7-3.6-4.7-3.6-4.7c-2.9-2,0.2-1.9,0.2-1.9
	c3.2,0.2,4.9,3.3,4.9,3.3c2.9,4.9,7.5,3.5,9.3,2.7c0.3-2.1,1.1-3.5,2-4.3c-7.1-0.8-14.6-3.6-14.6-15.8c0-3.5,1.2-6.3,3.3-8.6
	c-0.3-0.8-1.4-4.1,0.3-8.5c0,0,2.7-0.9,8.8,3.3c2.6-0.7,5.3-1.1,8-1.1c2.7,0,5.5,0.4,8,1.1c6.1-4.1,8.8-3.3,8.8-3.3
	c1.7,4.4,0.6,7.7,0.3,8.5c2.1,2.2,3.3,5.1,3.3,8.6c0,12.3-7.5,15-14.6,15.8c1.1,1,2.2,2.9,2.2,5.9c0,4.3,0,7.7,0,8.8
	c0,0.9,0.6,1.9,2.2,1.5C54.8,58.9,64,46.9,64,32.8C64,15.1,49.7,0.8,32,0.8z"
        ></path>
      </g>
    </svg>
  )
}

Letter.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokewidth: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}

export default Letter