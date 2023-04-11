import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import pro1 from "./../images/videos/spotifyclonecom.gif";
import pro1 from "../images/Project img/spotify proj.png";
import pro2 from "../images/Project img/Rb proj.png";
import pro3 from "../images/Project img/blumercary proj.png";
import pro4 from "../images/Project img/food proj.png";
// import pro3 from "./../images/videos/gif3.gif"

const Projects = () => {
  return (
    <>
      <div id="project-parent">
        <div id="projects">
          <br /> <br />
          <h1>Projects</h1>
        </div>
        <div id="display">
          <div id="play">
            <img src={pro1} alt="p1" id="video-links" />
            <p
              style={{
                textAlign: "justify",
                marginLeft: "30%",
                border: "2px solid red",
                padding:"10px",
                width: "60%",
                // fontWeight:"500px"
              }}
            >
              Spotify is a digital music, podcast, and
              video service that gives you access to millions of songs and other
              content from creators all over the world. Basic functions such as
              playing music are totally free or choose
              to Spotify Premium.
              <br />
              The tech stack is used here is <span style={{ color:"orangered"}}> Html, Css and Javascript</span>
            </p>
            <div id="link">
              <p>
                {" "}
                <a href="https://github.com/ritikraj07/Project_Spotify.com">
                  <FaGithub className="icon" />
                </a>
              </p>
              <p className="icon">|</p>
              <p>
                {" "}
                <a href="https://starlit-salmiakki-6e2eb0.netlify.app/html/">
                  {" "}
                  <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>

          <div id="play">
            <img src={pro2} alt="p1" id="video-links2" />
            <p
              style={{
                textAlign: "justify",
                marginLeft: "10%",
                border: "2px solid red",
                padding:"10px",
                width: "60%",
              }}
            >
              RoyalBrothers is a bike rental website where you can select your
              city Then pickup point and dropping point and then you can book and choose
              your ride and enjoy the city tour with your favourite Bikes.
              collections.
              <br />
              The tech stack is used here is <span style={{ color:"orangered"}}> Html, Css, Reactjs, ChakraUI, Nodejs and Mongodb.</span>
            </p>
            <div id="link2">
              <p>
                {" "}
                <a href="https://github.com/Arshadiqubal17/royalBrothersclone">
                  <FaGithub className="icon" />
                </a>
              </p>
              <p className="icon">|</p>
              <p>
                {" "}
                <a href="https://rb-bike-riders.vercel.app/">
                  {" "}
                  <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>
          <div id="play">
            <img src={pro3} alt="p1" id="video-links3" />
            <p
              style={{
                textAlign: "justify",
                marginLeft: "30%",
                padding:"10px",
                border: "2px solid red",
                width: "60%",
              }}
            >
              BlueMercury is one of world's finest e-commerce website 
              dealing in a various types of cosmetics, skin-care products and select
              other services. <br />
              The tech stack is used here is <span style={{ color:"orangered"}}> Html, Css and Javascript</span>
            </p>
            <div id="link3">
              <p>
                {" "}
                <a href="https://github.com/suryathink/bluemercuryClone">
                  <FaGithub className="icon" />
                </a>
              </p>
              <p className="icon">|</p>
              <p>
                {" "}
                <a href="https://suryathink.github.io/bluemercuryClone/">
                  {" "}
                  <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>

          <div id="play">
            <img src={pro4} alt="p1" id="video-links2" />
            <p
              style={{
                textAlign: "justify",
                marginLeft: "10%",
                padding:"10px",
                border: "2px solid red",
                width: "60%",
              }}
            >
              As an on-demand food delivery application allows your customers to
              get delivered their ordered foods in their city,
              home, office they are.
              <br />
              The tech stack is used here is <span style={{ color:"orangered"}}> Html, Css and Javascript</span>
            </p>
            <div id="link2">
              <p>
                {" "}
                <a href="https://github.com/amitsisodiya371/Food-app-clone">
                  <FaGithub className="icon" />
                </a>
              </p>
              <p className="icon">|</p>
              <p>
                {" "}
                <a href="https://willowy-zabaione-710cfc.netlify.app/">
                  {" "}
                  <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
