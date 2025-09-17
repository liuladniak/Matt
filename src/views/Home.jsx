import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import Hashtags from "../components/Hashtags";

const Home = () => {
  const hashtagsHome = ["TravelTech", "EndToEnd", "Prototype"];

  return (
    <div className="home-container " id="home">
      <Helmet>
        <title>Foolhardy Purple Anteater</title>
        <meta property="og:title" content="Foolhardy Purple Anteater" />
      </Helmet>
      <div className="home-code-desktop">
        <Header />

        <div className="home-group9">
          <div className="home-section-hero">
            <div className="home-hero grid-container">
              <div className="box box1">
                <div className="home-frame103">
                  <img src="/external/IMG_BCB282204788-11.png" />
                </div>
              </div>
              <div className="home-frame91 box box2">
                <div className="home-hi-cta">
                  <span className="home-text17">
                    <span className="home-text18">👋🏻 Hi!&nbsp;</span>
                    <span className="home-text19">I’m Matt</span>
                  </span>
                </div>
              </div>
              <span className="home-text20 box box3">
                <span className="home-text21">A diverse UX designer,</span>
                <br></br>
                <span className="home-text23">making&nbsp;</span>
                <span className="home-text24">complex</span>
                <span className="home-text25"> interactions feel&nbsp;</span>
                <span className="home-text26">simple.</span>
              </span>

              <div className="box box4">
                <div className="home-socials1">
                  <div className="home-resume1">
                    <img
                      src="/external/resume3014-7ool-200w.png"
                      alt="Resume3014"
                      className="home-resume2"
                    />
                    <span className="home-text27">My Resume</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/uxmattzaim/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/external/linkedin3014-aht-200h.png"
                      alt="LinkedIn3014"
                      className="home-linked-in1"
                    />
                  </a>
                  <img
                    src="/external/vector3014-s2by.svg"
                    alt="Vector3014"
                    className="home-vector1"
                  />
                  <img
                    src="/external/vector3015-r7wf.svg"
                    alt="Vector3015"
                    className="home-vector2"
                  />
                </div>
              </div>
              <a href="/#work" className="box box5">
                <div className="home-frame61">
                  <div className="home-frame3">
                    <span className="home-text28">See My Works</span>
                    <img
                      src="/external/laptopwithcursor3015-fpzf-200h.png"
                      alt="Laptopwithcursor3015"
                      className="home-laptopwithcursor"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="home-text71-2">
          <span className=""> &#8595;</span>
        </div>
        <div className="home-section">
          <div className="home-frame92">
            <div className="home-research">
              <div className="home-group3">
                <span className="home-text29">Researching</span>
              </div>
              <div className="home-frame87">
                <img
                  src="/external/sql3016-9fu-200h.png"
                  alt="SQL3016"
                  className="home-sql"
                />
                <img
                  src="/external/combochart3016-gfp-200h.png"
                  alt="ComboChart3016"
                  className="home-combo-chart"
                />
              </div>
            </div>
            <div className="home-design">
              <div className="home-group11">
                <span className="home-text30">Designing</span>
              </div>
              <div className="home-frame810">
                <img
                  src="/external/figma3016-zszl-200h.png"
                  alt="Figma3016"
                  className="home-figma"
                />
                <img
                  src="/external/adobecreativecloud3016-txmb-200h.png"
                  alt="AdobeCreativeCloud3016"
                  className="home-adobe-creative-cloud"
                />
                <img
                  src="/external/adobexd3016-cl18-200h.png"
                  alt="AdobeXD3016"
                  className="home-adobe-xd"
                />
              </div>
            </div>
            <div className="home-coding">
              <div className="home-frame2">
                <span className="home-text31">Coding</span>
              </div>
              <div className="home-frame811">
                <img
                  src="/external/html3017-zjn3-200h.png"
                  alt="HTML3017"
                  className="home-html"
                />
                <img
                  src="/external/wordpress3017-yc3-200h.png"
                  alt="WordPress3017"
                  className="home-word-press"
                />
              </div>
            </div>
          </div>
          <div className="home-frame92-mob">
            <div className="home-group3-mob">
              <span className="home-text29">Researching</span>
              <span className="home-text30">Designing</span>
              <span className="home-text31">Coding</span>
            </div>
            <div className="home-frame87-mob">
              <img
                src="/external/sql3016-9fu-200h.png"
                alt="SQL3016"
                className="home-sql"
              />
              <img
                src="/external/combochart3016-gfp-200h.png"
                alt="ComboChart3016"
                className="home-combo-chart"
              />
              <img
                src="/external/figma3016-zszl-200h.png"
                alt="Figma3016"
                className="home-figma"
              />
              <img
                src="/external/adobecreativecloud3016-txmb-200h.png"
                alt="AdobeCreativeCloud3016"
                className="home-adobe-creative-cloud"
              />
              <img
                src="/external/adobexd3016-cl18-200h.png"
                alt="AdobeXD3016"
                className="home-adobe-xd"
              />
              <img
                src="/external/html3017-zjn3-200h.png"
                alt="HTML3017"
                className="home-html"
              />
              <img
                src="/external/wordpress3017-yc3-200h.png"
                alt="WordPress3017"
                className="home-word-press"
              />
            </div>
          </div>
        </div>
        <div id="about" className="home-section-bio">
          <div className="home-frame812">
            <span className="home-text32">
              <span className="home-text33">from&nbsp;</span>
              <span className="home-text34">Cultural Academics&nbsp;</span>

              <span className="home-text35">⟶</span>
              <span className="home-text36"> Digital Arts</span>
              <br></br>
              <span className="home-text38">to&nbsp;</span>
              <span className="home-text39">User Experience</span>
            </span>
          </div>
          <span className="home-text40">
            <span className="home-text41">Over</span>
            <span className="home-text42">
              {" "}
              10 years of experience in cultural research, digital design, and
              multimedia storytelling. I bring a wide range of skills and
              a&nbsp;
            </span>
            <span className="home-text43">hands-on</span>
            <span className="home-text44"> flair to the table.&nbsp;</span>
            <br></br>
            <br></br>
            <span className="home-text47">
              Grounded in Sociology, Literary methods and&nbsp;
            </span>
            <span className="home-text48">HCI</span>
            <span className="home-text49">
              {" "}
              principles; I craft ethical, user-first experiences that harmonize
              data, empathy, and creativity.
            </span>
          </span>
          <div className="home-frame12">
            <span className="home-text50">TL; DR:</span>
          </div>
          <div className="home-frame83">
            <span className="home-text51 HeadingH2">
              <span className="home-text52">✤ ︎I’m a&nbsp;</span>
              <span className="home-text53">seasoned</span>
              <span> professional who is:</span>
            </span>
            <div className="prj-icons prj-icons--home">
              <div className="prj-icon-wrp prj-icon-wrp--home">
                <div className="prj-icon__img-frame">
                  <img src="/external/University.png" alt="" />
                </div>
                <span className="prj-icons__title">Scholarly</span>
              </div>
              <div className="prj-icon-wrp prj-icon-wrp--home">
                <div className="prj-icon__img-frame prj-icon__img-frame--home">
                  <img src="/external/DevelopmentSkill2.png" alt="" />
                </div>
                <span className="prj-icons__title prj-icons__title--home">
                  Analytical
                </span>
              </div>
              <div className="prj-icon-wrp prj-icon-wrp--home">
                <div className="prj-icon__img-frame">
                  <img src="/external/Service2.png" alt="" />
                </div>
                <span className="prj-icons__title">Creative</span>
              </div>
            </div>
          </div>
          <div className="home-frame84">
            <span className="home-text55 HeadingH2">
              <span className="home-text56">✤ ︎A critical&nbsp;</span>
              <span className="home-text57">thinker</span>
              <span> who does:</span>
            </span>
            <div className="home-frame62">
              <div className="home-frame62-wrp">
                <div className="frame62-icon-wrp">
                  <div className="frame62-icon__img-frame">
                    <img src="external/magnifyingglass.png" />
                  </div>
                  <span className="frame62-icon__title">Discover</span>
                </div>
              </div>

              <div className="frame62-think">
                <img
                  className="frame62-think__icon--2"
                  src="external/Arrow3.png"
                />
              </div>

              <div className="home-frame62-wrp">
                <div className="frame62-icon-wrp">
                  <div className="frame62-icon__img-frame">
                    <img src="external/Creativity.png" />
                  </div>
                  <span className="frame62-icon__title">Define</span>
                </div>
              </div>

              <div className="frame62-think">
                <img
                  className="frame62-think__icon--3"
                  src="external/Arrow3.png"
                />
              </div>

              <div className="home-frame62-wrp">
                <div className="frame62-icon-wrp">
                  <div className="frame62-icon__img-frame">
                    <img src="external/Paintbrush.png" />
                  </div>
                  <span className="frame62-icon__title">Design</span>
                </div>
              </div>

              <div className="frame62-think">
                <img
                  className="frame62-think__icon--4"
                  src="external/Frame99.png"
                />
              </div>

              <div className="home-frame62-wrp">
                <div className="frame62-icon-wrp">
                  <div className="frame62-icon__img-frame">
                    <img src="external/PieChart.png" />
                  </div>
                  <span className="frame62-icon__title">Validate</span>
                </div>
              </div>

              <div className="frame62-think">
                <img
                  className="frame62-think__icon--5"
                  src="external/Checkmark.png"
                />
              </div>
            </div>
          </div>
          <div className="home-frame85">
            <span className="home-text59">
              <span className="home-text60">So far so good?..</span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <span className="home-text66"></span>
              <br></br>
              <span className="home-text68">See my&nbsp;</span>

              <span className="home-text70">recent works</span>
              <span className="home-text71"> below</span>

              <span className="home-text71-1"> &#8595;</span>
            </span>
          </div>
        </div>
        <div id="work" className="home-section-projects">
          <div className="home-frame45">
            <div className="home-frame44">
              <div className="home-project11">
                <div className="home-frame39">
                  <div className="home-frame24">
                    <div className="home-frame22">
                      <div className="home-top">
                        <Hashtags
                          hashtags={hashtagsHome}
                          className="home-hashtags"
                        />
                        <div className="home-frame94">
                          <a href="/project" className="home-text75">
                            <span className="home-text76">
                              Your Go-to Room Booking App
                            </span>
                          </a>
                          <Tags classNameTag="hometags" />
                        </div>
                      </div>
                      <div className="home-frame813">
                        <span className="home-text85">HomiGo</span>
                        <span className="text-body">
                          Every step from search to checkout is crystal-clear:
                          you see exact costs, flexible cancellation options. No
                          more app-hopping! Just a smooth, one-stop booking
                          journey.
                        </span>
                      </div>
                      <a href="/project" className="home-frame73">
                        <div className="home-frame69">
                          <span className="home-text87">View Case Study</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="home-frame67">
                    <img
                      src="/external/rectangle163011-2c4w-600w.png"
                      alt="Rectangle163011"
                      className="home-rectangle16"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="home-frame86">
          <div className="home-frame88">
            <span className="home-text88">Thanks!</span>
            <div className="home-text89">
              <p className="home-text89-span">
                <span className="home2-text86">⇢&nbsp;</span>
                <span className="home-text90-icon">👨‍💻&nbsp;</span>
                <span className="home-text90">See my&nbsp;</span>
                <span className="home-text91">Non-UX&nbsp;</span>
              </p>
              <p className="home-text89-span">
                <span className="home2-text86">⇢&nbsp;</span>
                <span className="home-text93-icon">✉️&nbsp;</span>
                <span className="home-text93">Copy my&nbsp;</span>
                <span className="home-text94">E-mail&nbsp;</span>
              </p>
              <p className="home-text89-span">
                <span className="home2-text86">⇢&nbsp;</span>
                <span className="home-text96-icon">📃&nbsp;</span>
                <span className="home-text96">View my&nbsp;</span>
                <span className="home-text97">Resume&nbsp;</span>
              </p>
            </div>
          </div>
          <div className="home-frame89">
            <div className="home-frame104">
              <img src="/external/fda7b325493b3b634a9d4b111ba8ca850771d5cf.png" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
