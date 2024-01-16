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
          <img src="/view.svg" alt="" className="icon" />
          <span className="description-title">Description</span>
        </div>

        <span className="description-text">
          Explore the musical landscape by discovering the top artists that
          resonate with global listeners. Dive into a curated list showcasing
          the most influential and trending artists across genres. Whether
          you're seeking new favorites or staying updated on the latest musical
          sensations, the "View Top Artists" feature is your gateway to a world
          of musical discovery.
        </span>
      </div>
    </div>
  );
};

export default Menu;
