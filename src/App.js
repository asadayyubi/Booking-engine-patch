import "./App.css";
import "./custom.css";
import Patch from "./Componenets/Patch/Patch";
import MobilePatch from "./Componenets/MobileDevice/MobilePatch";
import { useEffect, useRef, useState } from "react"

import MobileButton from "./Componenets/MobileDevice/MobileButton";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dataFromHtml, setDataFromHtml] = useState({});
  // for testing start
  const [colorCode,setColorCode] = useState("");
  const spanRef = useRef(null);

  useEffect(() => {
    const spanElement = document.getElementById("root");
    if (spanElement) {
      const typeId = spanElement.dataset.typeid;
      const brand_id = spanElement.dataset.brandid;
      const colorcode = spanElement.dataset.colorcode;

      console.log(typeId, brand_id, colorcode, "value raw");
      setColorCode(colorcode)
      setDataFromHtml({ typeId, brand_id, colorcode });
      console.log(dataFromHtml, "data from html value from state");
    }
  }, []);

  useEffect(() => {
    // Update the windowWidth state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <div className="App">
      {/* <Patch />
      <MobilePatch /> */}
      {windowWidth <= 650 ? <MobileButton colorCode={colorCode}/> : <Patch colorCode={colorCode}/>}

    </div>
  );
}

export default App;
