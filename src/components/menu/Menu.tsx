import { menu } from "../../data";
import "../menu/menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <span className="title">What to do?</span>
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.icon} alt="" className="icon" />
          <span className="icontitle">{item.title}</span>
        </div>
      ))}
      <div className="description">
        <div className="descriptionitem">
          {/* <img src="/view.svg" alt="" className="icon" /> */}
          <span className="description-title">Description</span>
        </div>
        <div className="descriptiontext">
          {menu.map((item) => (
            <span className="description-text" key={item.id}>
              {item.description}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
