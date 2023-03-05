import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import pro1 from "./../images/videos/spotifyclonecom.gif";
import pro1 from "../images/Project img/spotify proj.png"
import pro2 from "../images/Project img/Rb proj.png"
import pro3 from "../images/Project img/blumercary proj.png"
import pro4 from "../images/Project img/food proj.png"
// import pro3 from "./../images/videos/gif3.gif"


const Projects = () => {
  return (
    <>
      <div id="project-parent">
        <div id="projects">
          <br/> <br /> 
          <h1>Projects</h1>
        </div>
        <div id="display">
          <div id="play" >
            <img src={pro1} alt="p1"  id="video-links"/>
            <h5 style={{textAlign:"center",marginLeft:"20%"}}>Spotify clone</h5>
            <div id="link">
            <p> <a href="https://github.com/ritikraj07/Project_Spotify.com"><FaGithub className="icon" /></a></p>
              <p className="icon">|</p>
              <p> <a href="https://starlit-salmiakki-6e2eb0.netlify.app/html/"> <FaExternalLinkAlt className="icon" /></a></p>

            </div>

          </div>

          <div id="play" >
             <img src={pro2} alt="p1"  id="video-links2"/>
             <h5 style={{textAlign:"center",marginRight:"15%"}}>Royal Brothers clone</h5>
            <div id="link2">
            <p> <a href="https://github.com/Arshadiqubal17/royalBrothersclone"><FaGithub className="icon" /></a></p>
              <p className="icon">|</p>
              <p> <a href="https://royalbrothers-project.vercel.app/"> <FaExternalLinkAlt className="icon" /></a></p>

            </div>
          </div>
          <div id="play" >
            <img src={pro3} alt="p1"  id="video-links3"/>
            <h5 style={{textAlign:"center",marginLeft:"20%"}}>bluemercury clone</h5>
            <div id="link3">
            <p> <a href="https://github.com/suryathink/bluemercuryClone"><FaGithub className="icon" /></a></p>
              <p className="icon">|</p>
              <p> <a href="https://suryathink.github.io/bluemercuryClone/"> <FaExternalLinkAlt className="icon" /></a></p>
              
            </div>
          </div>

          <div id="play" >
            <img src={pro4} alt="p1"  id="video-links2"/>
            <h5 style={{textAlign:"center",marginRight:"15%"}}>Food App clone</h5>
            <div id="link2">
              <p> <a href="https://github.com/amitsisodiya371/Food-app-clone"><FaGithub className="icon" /></a></p>
              <p className="icon">|</p>
              <p> <a href="https://willowy-zabaione-710cfc.netlify.app/"> <FaExternalLinkAlt className="icon" /></a></p>

            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Projects;