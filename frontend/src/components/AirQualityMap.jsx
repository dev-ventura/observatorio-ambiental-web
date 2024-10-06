import { Menu } from "./Menu";
import WrapperAQ from "./WrapperAQ";
import AirQualityLegend from "./AirQualityLegend";
import './AirQualityMap.css';

const AirQualityMap = () => {
  return (
    <>
    <div className="page">
      <div>
        <Menu />
      </div>
      <div>
        <WrapperAQ />
        <AirQualityLegend />
      </div>
    </div>
  </>
  )
}

export default AirQualityMap;