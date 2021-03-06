import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  fill?: string
  secondaryfill?: string
  width?: string
  height?: string
  title?: string
  className?: string
}

const LogoLinkedin: React.FC<Props> = (props) => {
  const fill = props.fill || 'currentColor'
  const secondaryfill = props.secondaryfill || fill
  const width = props.width || '100%'
  const height = props.height || '100%'
  const title = props.title || 'logo linkedin'
  const className = props.className || ''

  return (
    <svg
      style={{ strokeWidth: '3px' }}
      className={className}
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={secondaryfill}>
        <path
          d="M61.3,0H2.7C1.2,0,0,1.2,0,2.7v58.7C0,62.8,1.2,64,2.7,64h58.7c1.5,0,2.7-1.2,2.7-2.7V2.7 C64,1.2,62.8,0,61.3,0z M19,54.5H9.5V24H19V54.5z M14.2,19.8c-3,0-5.5-2.5-5.5-5.5c0-3,2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5 C19.7,17.4,17.3,19.8,14.2,19.8z M54.5,54.5H45V39.7c0-3.5-0.1-8.1-4.9-8.1c-4.9,0-5.7,3.9-5.7,7.8v15.1h-9.5V24H34v4.2h0.1 c1.3-2.4,4.4-4.9,9-4.9c9.6,0,11.4,6.3,11.4,14.5V54.5z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

LogoLinkedin.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}

export default LogoLinkedin
