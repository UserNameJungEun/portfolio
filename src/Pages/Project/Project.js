import "./Project.css";

import GwangJuImage from "../../Image/GwangJu.png";
import DokdoImage from "../../Image/Dokdo.png";
import DominoImage from "../../Image/Domino.png";

import DicImage from "../../Image/Dic.png";
import ListImage from "../../Image/List.png";

import DocsuriImage from "../../Image/Team_docsuri.png";
import FESTSURIImage from "../../Image/Team_FESTSURI.png";
import iconHTMLImage from "../../Image/iconHTML.png";

function Project() {
  return (
    <section className="Project w1400">
      <article className="ProjectWork">
        <h1>
          Project <span>: 기능구현을 주된 목적으로 한 프로젝트</span>
        </h1>

        <div className="Project_WebClon">
          <div className="Project_AllBox">
            <div className="Project_MiniBox1">
              <img className="Project_2Image" src={DicImage} alt="Dic" />
              <div className="Project_PusBtn">
                <h5>+View Site</h5>
                <h5>+Code review</h5>
              </div>
              <div className="Project_TextList">
                <h1>프론트 엔드 사전</h1>
                <ul>
                  <li>데이터관리(Json)</li>
                  <li>글작성기능</li>
                  <li>수정기능</li>
                  <li>삭제기능</li>
                  <li>검색기능</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Project_AllBox">
            <div className="Project_MiniBox1">
              <img className="Project_2Image" src={ListImage} alt="List" />
              <div className="Project_PusBtn">
                <h5>+View Site</h5>
                <h5>+Code review</h5>
              </div>
              <div className="Project_TextList">
                <h1>공지사항 게시판</h1>
                <ul>
                  <li>데이터관리(Json)</li>
                  <li>공지사항게시판기능 구현</li>
                  <li>공지사항 리스트</li>
                  <li>공지사항 작성 및 수정,삭제기능</li>
                  <li>페이지네이션 기능 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="Team-2">
        <h1>
          Team Project
          <span> : 팀원들과 협력해서 파트별 기능구현으로 프로젝트 </span>
        </h1>
        <div className="Project_2team">
          <div className="Project_AllBox">
            <div className="Project_MiniBox1">
              <img
                className="Project_2Image"
                src={FESTSURIImage}
                alt="FESTSURI"
              />
              <div className="Project_PusBtn">
                <h5>+View Site</h5>
                <h5>+Code review</h5>
              </div>
              <div className="Project_TextList">
                <h1>FESTSURI</h1>
                <ul>
                  <li>소개페이지 & 갤러리 페이지 구현</li>
                  <li>갤러리 사진 및 후기 직접 조사 후 관리</li>
                  <li>세부기능 - Component 제작 후 중복사용 관리 </li>
                  <li>세부기능 - 이미지,후기 등 데이터관리(json)</li>
                  <li>세부기능 - 그리드 디자인 후 모달창 구현</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Project_AllBox">
            <div className="Project_MiniBox1">
              <img
                className="Project_2Image"
                src={DocsuriImage}
                alt="Docsuri"
              />
              <div className="Project_PusBtn">
                <h5>+View Site</h5>
                <h5>+Code review</h5>
              </div>
              <div className="Project_TextList">
                <h1>독:수리</h1>
                <ul>
                  <li>교과학습페이지를 구현</li>
                  <li>수학문제에 대한지문과 이미지를 직접 제작</li>
                  <li>
                    세부기능 - 지문,이미지,힌트,정답,해설 등 데이터관리(json)
                  </li>
                  <li>세부기능 - 모달창과 map을 사용해서 간략한 코드 구성</li>
                  <li>세부기능 - 정답과 힌트와 해설이 상호작용하도록 구성</li>
                  <li>세부기능 - 사용자의 편의와 가독성을 고려한디자인 구성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="webClon-3">
        <h1>
          WebClon
          <span> : 간단한 웹클론 제작으로 기본기를 다지는 프로젝트 </span>
        </h1>

        <div className="Project_3webImage">
          <div className="Project_3web">
            <img
              className="Project_WebMainImage"
              src={GwangJuImage}
              alt="GwangJu CC"
            />
            <div className="Project_titail">
              <div className="Project_TimeComment">
                <div>2023.7.3 ~ 2023.7.31</div>
                <div className="Project_Commentline">1달</div>
              </div>
              <div className="Project_title">
                <h1>광주컨트리클럽</h1>
                <h5>+View Site</h5>
                <h5>+Code review</h5>
              </div>
              <div className="Project_text">
                <p>#배움</p>
                <p>#제작</p>
                <p>#짜릿</p>
                <div className="Project_iconsImage">
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Project_3web">
            <img
              className="Project_WebMainImage"
              src={DokdoImage}
              alt="Dokdo"
            />
            <div className="Project_titail">
              <div className="Project_TimeComment">
                <div>2023.8.1 ~ 2023.8.31</div>
                <div className="Project_Commentline">1달</div>
              </div>
              <div className="Project_title">
                <h1>독도</h1>
                <h5> +View Site</h5>
                <h5> +Code review</h5>
              </div>
              <div className="Project_text">
                <p>#복합</p>
                <p>#기능</p>
                <p>#도전</p>
                <div className="Project_iconsImage">
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Project_3web">
            <img
              className="Project_WebMainImage"
              src={DominoImage}
              alt="Domino"
            />
            <div className="Project_titail">
              <div className="Project_TimeComment">
                <div>2023.7.3 ~ 2023.7.31</div>
                <div className="Project_Commentline">1달</div>
              </div>
              <div className="Project_title">
                <h1>DOMINO</h1>
                <h5> +View Site</h5>
                <h5> +Code review</h5>
              </div>
              <div className="Project_text">
                <p>#발전</p>
                <p>#제작</p>
                <p>#추가</p>
                <div className="Project_iconsImage">
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div>
                    <img
                      className="Project_icon"
                      src={iconHTMLImage}
                      alt="HTML icon"
                    />
                    <p>HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Project;
