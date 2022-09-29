import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const HomeSvgComponent = (props: SvgProps) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.965.562A2.4 2.4 0 0 1 12.5 0a2.4 2.4 0 0 1 1.535.562l10.48 8.701c.94.784.42 2.392-.77 2.392H22.5V22.33c0 .708-.264 1.387-.733 1.887-.468.5-1.104.782-1.767.782H5a2.422 2.422 0 0 1-1.768-.782 2.764 2.764 0 0 1-.732-1.887V11.655H1.254c-1.191 0-1.709-1.61-.769-2.39L10.965.564V.562ZM4.53 9.286c.287.247.469.625.469 1.048V22.33h15V10.334c0-.423.182-.801.468-1.048L12.5 2.67 4.53 9.286Z"
      fill="#fff"
    />
  </Svg>
);

export default HomeSvgComponent;
