 function Home(props) {
    return (
    <div id="home" >
         
        <h2 id="user-detail-name">Amit Sisodiya</h2>
        <p id="user-detail-intro">Hello I am Amit Sisodiya</p>
        <img class="home-img" src="https://avatars.githubusercontent.com/u/98457822?v=4"></img>
        <button id="resume-button-2" src="">Resume Downlaod</button>
        <h3>📊 Github Stats</h3>
        <p align="center">
        <img align="center"  id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=amitsisodiya371&theme=dark" /> <br/>
        <br/>
          </p>
          <img align="center" id="github-top-langs" src="https://github-readme-stats.vercel.app/api?username=amitsisodiya371&show_icons=true&locale=en&theme=dark"/>
          <br />
          <br />
          <br />
          {/* <img align="center" id="github-stats-card" src="https://github-readme-stats.vercel.app/api/top-langs/?username=amitsisodiya371&layout=compact"/> */}
      </div>
    );
  }
  
  export default Home;