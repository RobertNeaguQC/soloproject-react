import twit from "../images/Twitter Icon.png";
import face from "../images/Facebook Icon.png";
import insta from "../images/Instagram Icon.png";
import git from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="icon" src={twit} alt="" />
      <img src={face} alt="" className="icon" />
      <img src={insta} alt="" className="icon" />
      <img src={git} alt="" className="icon" />
    </footer>
  );
}
