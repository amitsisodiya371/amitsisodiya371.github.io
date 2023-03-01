 import About from "../About/About";
 import resume from "../Resume_pdf/Amit Sisodiya Resume.pdf"
//  import food from"../Resume_pdf/food proj.png"
 function Home(props) {
    return (
    <div id="home" >
         
         <h2 id="user-detail-name">Amit Sisodiya</h2>
        <p id="user-detail-intro">Hello I am Amit Sisodiya</p>
        <img class="home-img" src="https://avatars.githubusercontent.com/u/98457822?v=4"></img>
        <a href={resume}  target='_blank' id="resume-link-1">
        <button  type="button" >Download Resume</button>
        </a><div>
        <a href='../Resume_pdf/food proj.png'></a>
        </div>
        <About/>
        <h3>📊 Github Stats</h3>
        <p align="center">
        <img align="center"  id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=amitsisodiya371" /> <br/>
        <br/>
          </p>
          <img align="center" id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=amitsisodiya371"/>
          <br />
          <img align="center" id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=amitsisodiya371"/>
          <div class="graph-1">
                    <p align="center"><a href="https://github.com/amitsisodiya371"><img align="center"
                                    src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=amitsisodiya371&amp;theme=dracula&amp;bg_color=0D1117"/></a>
                    </p>
                </div>
    </div>
    );
  }

  
  // export default Home;
  
  export default Home;