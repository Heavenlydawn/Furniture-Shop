import Menus from "./Menus";
import Contact from "./Contact";
import Form from "./Form";
import {menu, account, stayConnected} from "../../data/footerMenus"

const ItemsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-items-center gap-9 md:gap-13">
      <Contact />
      <div className="max-w-menu">
      <Menus Links={menu} title="Menu" />
      </div>
      <div className="max-w-account">
        <Menus Links={account} title="Account" />
      </div>
      <div className="max-w-connect">
        <Menus Links={stayConnected} title="Stay Connected" />
      </div>
      <Form />
    </div>
  );
};

export default ItemsContainer;