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

  useDebugValue(`minWidth:${minWidth} maxWidth:${maxWidth} | ${isWithinRange ? '🟢' : '🔴'}`);

  return isWithinRange;
};

export default useWithinRange;