import "../recommended/recommended.scss";

const Recommended = () => {
  return (
    <div className="recommended">
      <h2>Recommended Artists</h2>
      <div className="recommendedArtists">
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Chris Brown</span>
        </div>
      </div>
      <div className="recommendedTracks">
        <h2>Recommended Tracks</h2>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
        <div className="item">
          <img src="/noavatar.png" alt="" className="icon" />
          <span>Troubled waters</span>
          <span>Chris Brown</span>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
