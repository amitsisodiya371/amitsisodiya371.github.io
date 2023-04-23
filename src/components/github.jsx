import "./github.css";
import GitHubCalendar from "react-github-calendar";
export function Github() {
  return (
    <div
      style={{
        backgroundColor: "black",
        marginBottom: "-20px",
        textAlign: "center",
        boxShadow: " rgb(121, 18, 18) 0px 22px 70px 4px;",
      }}
    >
      <br />
      <br />
      <h1>Github Status</h1>
      <br /> <br />
      <div class="graph-1">
        <a href="https://github.com/amitsisodiya371">
          <img
            align="center"
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=amitsisodiya371&amp;theme=dracula&amp;bg_color=0D1117"
          />
          <br />
          <br />
        </a>
      </div>
      <div id="graph23">
        <a href="https://github.com/amitsisodiya371">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=amitsisodiya371&theme=tokyonight"
          />
        </a>
        <a href="https://github.com/amitsisodiya371">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=amitsisodiya371&theme=tokyonight"
          />
        </a>
      </div>
      <div id="g-lang">
        <div> <a href="https://github.com/amitsisodiya371">
          <GitHubCalendar
            username="amitsisodiya371"
            className="react-activity-calendar"
          /> </a>
        </div>
        <div id="lang">
        <a href="https://github.com/amitsisodiya371">
          <img 
            align="center"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=amitsisodiya371&layout=compact&theme=tokyonight"
          />
          </a>
        </div>
      </div>
    </div>
  );
}
