import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  fill?: string
  secondaryfill?: string
  strokewidth?: number
  width?: string
  height?: string
  title?: string
}

const LogoTwitter: React.FC<Props> = (props) => {
  const fill = props.fill || 'currentColor'
  const secondaryfill = props.secondaryfill || fill
  const width = props.width || '100%'
  const height = props.height || '100%'
  const title = props.title || 'logo twitter'

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={secondaryfill}>
        <path
          d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6 c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9 c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2 c1.7,5.2,6.5,9,12.3,9.1c-4.5,3.5-10.2,5.6-16.3,5.6c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.2,0,37.4-20,37.4-37.4 c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

LogoTwitter.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string
}

export default LogoTwitter
