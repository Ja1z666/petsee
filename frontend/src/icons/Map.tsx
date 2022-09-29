import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const MapSvgComponent = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      d="m24.309 4.313-7.5-4.166a1.15 1.15 0 0 0-.56-.147c-.194 0-.385.05-.559.147L8.75 4.003 1.809.147A1.146 1.146 0 0 0 .592.208C.412.333.262.507.158.713.054.92 0 1.153 0 1.39v18.054c0 .526.268 1.007.691 1.243l7.5 4.166a1.149 1.149 0 0 0 1.119 0l6.94-3.857 6.941 3.856a1.138 1.138 0 0 0 1.215-.06c.369-.254.594-.7.594-1.182V5.556c0-.526-.267-1.007-.691-1.243ZM10 6.414l5-2.777v14.948l-5 2.778V6.414ZM2.5 3.637l5 2.777v14.95l-5-2.779V3.637Zm20 17.726-5-2.777V3.636l5 2.778v14.95Z"
      fill="#fff"
    />
  </Svg>
);

export default MapSvgComponent;