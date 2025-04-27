import './App.css'
import useWindowSize from './hooks/useWindowSize';
import useWithinRange from './hooks/useWithinRange'
// import { Small, Medium, Big } from './beanHeads';

function App() {
  const {width, height} = useWindowSize();
  const isBigWidth = useWithinRange(1000, Infinity);
  const isMediumWidth = useWithinRange(700, 999);
  const isSmallWidth = useWithinRange(0, 699);

  return (
    <>
      <div>
        ({width}) X ({height})
      </div>
      <div>
        {/* {isBigWidth && <Big />}
        {isMediumWidth && <Medium />}
        {isSmallWidth && <Small />} */}
      </div>
    </>
  );
};

export default App;
