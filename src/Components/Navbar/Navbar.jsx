function Navbar(props) {

    var divStyle = {
        padding: "20px",
        backgroundColor: "black",
        textAlign: "right",
      };
      var aStyle = {
        color: "white",
        marginRight: "50px",
        textDecoration: "none",
      };
      
    return (
    <div id="nav-menu" style={divStyle}>
         
      <a style={aStyle} href="#" class="nav-link home">
        Home
      </a>
      <a style={aStyle} href="#" class="nav-link about">
      About
      </a>
      <a style={aStyle} href="#"  class="nav-link skills">
      Skills
      </a>
      <a style={aStyle} href="#" class="nav-link projects">
      Projects
      </a>

      <a style={aStyle} href="#"  class="nav-link contact">
      Contact
      </a>

      <a style={aStyle}  class="nav-link resume"   target='_blank' id="resume-button-1">
      Resume 
      </a>
      </div>
    );
  }
  
  export default Navbar;