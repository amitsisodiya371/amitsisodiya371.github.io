import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import pro1 from "./../images/videos/spotifyclonecom.gif";
import pro1 from "../images/Project img/spotify proj.png"
// import pro2 from "./../images/videos/gif2.gif"
// import pro3 from "./../images/videos/gif3.gif"


const Projects = () => {
  return (
    <>
      <div id="project-parent">
        <div id="projects">
          <h1>Projects</h1>
        </div>
        <div id="display">
          <div id="play" >
            <img src={pro1} alt="p1"  id="video-links"/>
            <div id="link">
              <p><FaGithub className="icon" /></p>
              <p className="icon">|</p>
              <p><FaExternalLinkAlt className="icon" /></p>
            </div>

          </div>

          <div id="play" >
             {/* <img src={pro2} alt="p1"  id="video-links2"/> */}
            <div id="link2">
              <p><FaGithub className="icon" /></p>
              <p className="icon">|</p>
              <p><FaExternalLinkAlt className="icon" /></p>
            </div>
          </div>
          <div id="play" >
            {/* <img src={pro3} alt="p1"  id="video-links3"/> */}
            <div id="link3">
              <p><FaGithub className="icon" /></p>
              <p className="icon">|</p>
              {/* <p> <a href="https://wondrous-stroopwafel-729c2a.netlify.app"> <FaExternalLinkAlt className="icon" /></a></p> */}

            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Projects;