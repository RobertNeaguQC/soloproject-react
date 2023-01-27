import face from "../images/avatar.png";

export default function Info() {
  return (
    <header className="info">
      <img className="avatar" src={face} alt="face" />
      <div className="textinfo">
        <h2>Robert Neagu</h2>
        <h4>Frontend Developer</h4>
        <a href="/blank">robertneagu.website</a>
        <div className="btn">
          <button className="btnl"><i class="fa fa-envelope"></i>Email</button>
          <button className="btnr"><i class="fa fa-linkedin"></i>Linkedin</button>
        </div>
      </div>
    </header>
  );
}
