import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ProfileSvgComponent = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.045 9.09a4.545 4.545 0 1 1-9.09.001 4.545 4.545 0 0 1 9.09 0Zm-2.272 0a2.272 2.272 0 1 1-4.545.001 2.272 2.272 0 0 1 4.545 0Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 0C5.597 0 0 5.597 0 12.5S5.597 25 12.5 25 25 19.403 25 12.5 19.403 0 12.5 0ZM2.273 12.5c0 2.375.81 4.561 2.168 6.298a10.21 10.21 0 0 1 8.133-4.025 10.211 10.211 0 0 1 8.059 3.93A10.227 10.227 0 1 0 2.273 12.5ZM12.5 22.727a10.185 10.185 0 0 1-6.445-2.286 7.944 7.944 0 0 1 6.519-3.395 7.943 7.943 0 0 1 6.465 3.318 10.186 10.186 0 0 1-6.539 2.363Z"
      fill="#fff"
    />
  </Svg>
);

export default ProfileSvgComponent;