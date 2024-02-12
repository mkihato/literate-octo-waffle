import { menu } from "../../data";
import "../menu/menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <span className="title">What to do?</span>
      {/* {menu.map((item) => (
        <button className="item" key={item.id}>
          <img src={item.icon} alt="" className="icon" />
          <span className="icontitle">{item.title}</span>
        </button>
      ))} */}
      {menu.map((item) => (
        <button className={item.class} key={item.id}>
          <img src={item.icon} alt="" className="btn-icon" />
          <span>{item.title}</span>
        </button>
      ))}
      <div className="description">
        <div className="descriptionitem">
          <span className="description-title">Description</span>
        </div>
        <div className="descriptiontext">
          {/* {menu.map((item) => (
            <span className="description-text">{item.description}</span>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
