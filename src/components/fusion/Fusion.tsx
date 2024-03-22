import "../fusion/fusion.scss";

const Fusion = () => {
  return (
    <div className="fusion">
      <div className="user-card">
        <img src="/noavatar.png" alt="" />
        <span>User 1</span>

        <button className="button-33">Invite</button>
      </div>
      <div className="invitee-card">
        <img src="/noavatar.png" alt="" />
        <span>Friend</span>
        <button className="button-34">FUSE</button>
      </div>
    </div>
  );
};

export default Fusion;
