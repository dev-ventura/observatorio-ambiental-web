import Globito from "./Globito";
import { Menu } from "./Menu";

const Principal = () => {
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

export default Principal;