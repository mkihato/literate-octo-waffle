import "../navbar/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Fusion</span>
      </div>
      <div className="icons">
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/man.jpg" alt="" />
          <span>John</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
