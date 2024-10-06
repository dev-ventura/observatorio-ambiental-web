import { Menu } from "./Menu";
import WrapperGlobe from "./WrapperGlobe";
const FireMap = () => {
  return (
    <>
      <div className="page">
        <div>
          <Menu />
        </div>
        <div>
          <WrapperGlobe />
        </div>
      </div>
    </>
  )
}

export default FireMap;