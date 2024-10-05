import Globito from "./components/Globito";
import { Menu } from "./components/Menu";

const App = () => {
  return (
    <>
      <div className="page">
        <div>
          <Menu />
        </div>
        <div>
          <Globito />
        </div>
      </div>
    </>
  );
};

export default App;
