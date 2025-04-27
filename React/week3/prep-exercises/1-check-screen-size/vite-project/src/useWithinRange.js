import { useDebugValue } from "react";
import useWindowSize from "./useWindowSize";

function useWithinRange(minWidth, maxWidth) {
  const {width, height} = useWindowSize();
  let isWithinRange = false;
  
  if ((width >= minWidth) && (width <= maxWidth)) {
    isWithinRange = true;
  } else {
    isWithinRange = false;
  };

  useDebugValue(`width:${width} X height:${height} | ${isWithinRange ? '🟢' : '🔴'}`);

  return {isWithinRange};
};

export default useWithinRange;