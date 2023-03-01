// import "../images/Amit_Resume.pdf";
import resume from "../Resume_pdf/Amit Sisodiya Resume.pdf"
function Resume(props) {  
    return (
      <div id="myresume">
      <h1>Resum</h1>
    
      <a href={resume} target='_blank' id="resume-link-1">
        <button  type="button" >Download Resume</button>
        </a>

    
    
     <br/>
    </div>
    );
  }
  
  
  export default Resume;