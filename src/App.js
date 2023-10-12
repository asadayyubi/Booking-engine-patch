import "./App.css";
import "./custom.css";
import Patch from "./Componenets/Patch/Patch";
import MobilePatch from "./Componenets/MobileDevice/MobilePatch";
import { useEffect, useRef, useState } from "react";

import MobileButton from "./Componenets/MobileDevice/MobileButton";
import { blue } from "@mui/material/colors";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dataFromHtml, setDataFromHtml] = useState({});
  // for testing start
  const [colorCode, setColorCode] = useState("");
  const [btnColor, setBtnColor] = useState("");
  const [brandId, setBrandId] = useState("");
  const spanRef = useRef(null);

  useEffect(() => {
    const spanElement = document.getElementById("root");
    if (spanElement) {
      const typeId = spanElement.dataset.typeid;
      const brand_id = spanElement.dataset.brandid;
      const colorcode = spanElement.dataset.colorcode;
      const btncolor = spanElement.dataset.btncolor;

      console.log(typeId, brand_id, colorcode, "value raw");
      setColorCode(colorcode);
      setBtnColor(btncolor);
      setBrandId(+brand_id);
      setDataFromHtml({ typeId, brand_id, colorcode, btncolor });
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
      {/* <div style={{height:"500px" , background:"blue"}}>
upper div
      </div> */}
      {windowWidth <= 650 ? (
        <MobileButton
          colorCode={colorCode}
          btnColor={btnColor}
          brandId={brandId}
        />
      ) : (
        <Patch colorCode={colorCode} btnColor={btnColor} brandId={brandId} />
      )}
      {/* <div style={{height:"1500px" , background:"green"}}>
lower div
</div> */}
    </div>
  );
}

export default App;
