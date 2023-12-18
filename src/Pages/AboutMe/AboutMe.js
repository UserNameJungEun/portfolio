import "./AboutMe.css";

import AboutMe_Skills from "./Component/AboutMe_Skills";

function AboutMe() {
  return (
    <section className="AboutMe w1400">
      <article className="AboutMe_AllPage">
        <div className="AboutMe_GridContainer">
          <div className="Grid_item Grid_Box1">
            <div className="AboutMe_ImgBox"></div>
            <div className="AboutMe_ImgBox2"></div>
          </div>

          <div className="Grid_item Grid_Box2">
            <h1 className="AboutMe_SubTtitle">입사 후 포부 자리</h1>
          </div>

          <div className="Grid_item Grid_Box3">
            <h3>김정은</h3>
            <h3 className="AboutMe_NameBox1">Kim jung Eun</h3>
            <div className="AboutMe_Nameline"></div>
            <ul className="AboutMe_NameBox2">
              <li>1988.03.31(INTJ/INFJ)</li>
              <li>010-4662-9296</li>
              <li>shokju12@nate.com</li>
            </ul>
          </div>

          <div className="Grid_item Grid_Box4">
            <div>
              <h3 className="AboutMe_SubTtitle">
                학력사항 <span>(Education)</span>
              </h3>

              <div className="AboutMe_ThreeBox245">
                <ul>
                  <li>그린컴퓨터아카데미 수료</li>
                  <li>국립 안동대학교 졸업</li>
                  <li>가톨릭상지대학교 졸업</li>
                  <li>성희여자고등학교 졸업</li>
                </ul>
              </div>
            </div>
            <div className="SubLine"></div>

            <div>
              <h3 className="AboutMe_SubTtitle">
                경력사항 <span>(Work Experience)</span>
              </h3>

              <div className="AboutMe_ThreeBox245">
                <ul>
                  <li>2015~2023 (주)** 입사 후 퇴사</li>
                  <li>안동대학교 산학협력단</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Grid_item Grid_Box5">
            <h3 className="AboutMe_SubTtitle Subpadding">
              능력사항 <span>(Skills)</span>
            </h3>
            <div>
              <AboutMe_Skills></AboutMe_Skills>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
