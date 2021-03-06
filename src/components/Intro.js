import "./intro.css";
import Me from "../img/me.png";

const Intro = () => {
  return (
    <div className="i" id="home">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tsering Pemba</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Graphic Designer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop modern websites, web services and
            online stores. I design for user experience and develop
            for better interaction.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;