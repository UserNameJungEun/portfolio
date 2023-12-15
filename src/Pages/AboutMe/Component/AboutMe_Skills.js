import "./AboutMe_Skills.css";

import HTMLImage from "../../../Image/HTML.png";
import CSSImagrom from "../../../Image/CSS.png";
import PowerPointImage from "../../../Image/PowerPoint.png";
import Figmamage from "../../../Image/Figma.png";
import JavaScriptImage from "../../../Image/JavaScript.png";
import NodeImage from "../../../Image/Node.png";
import ReactImage from "../../../Image/React.png";
import ThreejsImage from "../../../Image/Threejs.png";
import ExcelImage from "../../../Image/Excel.png";
import blenderImage from "../../../Image/blender.png";

function AboutMe_Skills() {
  return (
    <section className="AboutMe_Skills">
      <article>
        <div className="Skills_BigBox">
          <div className="Skills_Left">
            <div className="SKills_Twin">
              <h5>HTML</h5>
              <img src={HTMLImage} alt="HTML Skill" />
              <p>94% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>CSS</h5>
              <img src={CSSImagrom} alt="CSS Skill" />
              <p>90% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>JavaScript</h5>
              <img src={JavaScriptImage} alt="JavaScript skill" />
              <p>55% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>Node</h5>
              <img src={NodeImage} alt="Node skill" />
              <p>55% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>React</h5>
              <img src={ReactImage} alt="React skill" />
              <p>60% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>Three.js</h5>
              <img src={ThreejsImage} lat="Threejs skill" />
              <p>15% Loading---</p>
            </div>
          </div>
          <div className="Skills_Right">
            <div className="SKills_Twin">
              <h5>Figma</h5>
              <img src={Figmamage} alt="Figma Skill" />
              <p>88% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>Photoshop</h5>
              <img src={blenderImage} alt="Photoshop SKill" />
              <p>20% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5> Illustrator</h5>
              <img src={blenderImage} alt="Illustrator SKill" />
              <p>20% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>blender</h5>
              <img src={blenderImage} alt="blender SKill" />
              <p>20% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>PowerPoint</h5>
              <img src={PowerPointImage} alt="PowerPoint Skill" />
              <p>90% Loading---</p>
            </div>
            <div className="SKills_Twin">
              <h5>Excel</h5>
              <img src={ExcelImage} alt="Excel Skill" />
              <p>90% Loading---</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutMe_Skills;
