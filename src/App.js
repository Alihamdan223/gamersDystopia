import './App.css';
import { useEffect, useState, useRef } from "react";
import TheHeader from "./TheHeader"; 
import SubHeader from "./SubHeader";  
import MainMenu from "./MainMenu"; 

const testImages = [
   "https://wallpapercave.com/wp/wp4162217.jpg",
   "https://cdn.wallpapersafari.com/54/82/TFmZvP.jpg",
   "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg:large",
   "https://images5.alphacoders.com/133/thumb-1920-1332400.jpeg",
   "https://images5.alphacoders.com/134/1340329.png",
   "https://images3.alphacoders.com/130/1306288.jpeg"
];

const titles = [
  "https://www.evilcontrollers.com/media/catalog/product/optimized/b/0/b0fe5a3d1b2b00b48eb071e60adfb830f97b9c8e77897721347d6f9e34183d2a/xbox-series-x-background-image_1.png", 
  "https://us.aimcontrollers.com/wp-content/uploads/2020/10/2-White-Matt-M.png",
  "https://m2.me-retail.com/pub/media/catalog/product/r/z/rz06-04010100-r3m1-wolverine-v2-chroma-_8_.png",
  "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-edge-listing-thumb-01-en-23aug22?$facebook$"
]; 

function App() {

  const [data] = useState(testImages); 
  const [dataIndex, setDataIndex] = useState(0); 
  const index = useRef(null);
  const [controllers] = useState(titles); 

  useEffect(() => {
    index.current = setInterval(() => {
      setDataIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => {
      if(index.current) {
        clearInterval(index.current); 
      }
    }
  }, []);

  return (
   <div>
    <TheHeader data={data} dataIndex={dataIndex} /> 
    <SubHeader controllers={controllers} />
    <MainMenu />
  </div>
  );
}

export default App;
