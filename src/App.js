
import './App.css';
import "./custom.css";
import Patch from './Componenets/Patch/Patch';
import MobilePatch from './Componenets/MobileDevice/MobilePatch';
import { useEffect, useState } from 'react';
import MobileButton from './Componenets/MobileDevice/MobileButton';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the windowWidth state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  return (
    <div className="App">
      {/* <Patch />
      <MobilePatch /> */}
      {windowWidth <= 650 ? <MobileButton />:<Patch />  }
    </div>
  );
}

export default App;
