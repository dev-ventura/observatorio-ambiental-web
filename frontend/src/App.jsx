import Globito from "./components/Globito";
import WrapperGlobe from "./components/WrapperGlobe"
import { Menu } from "./components/Menu";

const App = () => {
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
  );
};


export default App;
