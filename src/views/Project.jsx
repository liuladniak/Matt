import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hashtags from "../components/Hashtags";
import Tags from "../components/Tags";
const hashtagsProject = ["End-to-end", "TravelTech", "Prototype"];
const Project = () => {
  return (
    <div className="project">
      <Header />
      <main className="project__main">
        <div className="project__hero">
          <h1 className="project__heading">
            Designing a “Go-to” Room Booking App
          </h1>
          <p className="project__hero-desc text-body lh-150 project__text--intro">
            <strong>HomiGo</strong> is a mobile-first hotel booking app designed
            to reduce friction and decision fatigue in the travel search
            experience. From research to prototyping, I led the end-to-end UX
            process — identifying user pain points in existing platforms and
            translating those insights into a streamlined, intuitive product.
          </p>
          <button className="project__hero-cta">
            <div className="home-frame3">
              <span className="home-text28">Go To Prototype</span>
              <img
                src="/external/laptopwithcursor3015-fpzf-200h.png"
                alt="Laptopwithcursor3015"
                className="home-laptopwithcursor"
              />
            </div>
          </button>
          <div className="project__tags">
            {" "}
            <Hashtags hashtags={hashtagsProject} className="project-hashtags" />
            <Tags className="project__tags-list" />
          </div>
          <div className="project__hero-images">
            <div className="project__hero-image--small">
              <img src="/external/frame1.png" />
            </div>
          </div>
        </div>

        <div className="prj-desc">
          <div className="project__list-group">
            <div className="project__list-item">
              <div className="project__list-header">
                <div className="prj-lists-icon">
                  <img src="/external/Vector1.png" />
                </div>
                <h3 className="prj-lists-title">Tools</h3>
              </div>
              <ul className="prj-list">
                <li className="prj-list-item">Paper Sketching</li>
                <li className="prj-list-item">Sticky Notes</li>
                <li className="prj-list-item">Notion</li>
                <li className="prj-list-item">Sheets / Excel</li>
                <li className="prj-list-item">Figma</li>
                <li className="prj-list-item">FigJam</li>
                <li className="prj-list-item">Miro</li>
                <li className="prj-list-item">Photoshop</li>
              </ul>
            </div>
            <div className="project__list-item">
              <div className="project__list-header">
                <div className="prj-lists-icon">
                  <img src="/external/Vector2.png" />
                </div>
                <h3 className="prj-lists-title">Deliverables</h3>
              </div>
              <ul className="prj-list">
                <li className="prj-list-item">Market Report </li>
                <li className="prj-list-item">Competitive Benchmarking</li>
                <li className="prj-list-item">Usability Tests</li>
                <li className="prj-list-item">Affinity Map</li>
                <li className="prj-list-item">User Journey Map</li>
                <li className="prj-list-item">Flow Diagram</li>
                <li className="prj-list-item">Model Site Map</li>
                <li className="prj-list-item">Interaction Design Diagram</li>
                <li className="prj-list-item">Sketches & Wireframes</li>
                <li className="prj-list-item">Interactive Prototype</li>
              </ul>
            </div>
            <div className="project__list-item">
              <div className="project__list-header">
                <div className="prj-lists-icon prj-lists-icon--3">
                  <img src="/external/Vector3.png" />
                </div>
                <h3 className="prj-lists-title">Outcomes</h3>
              </div>
              <ul className="prj-list">
                <li className="prj-list-item">Lorem</li>
                <li className="prj-list-item">Lorem</li>
                <li className="prj-list-item">Lorem</li>
              </ul>
            </div>
          </div>
          <div className="prj-desc-cols">
            <div className="prj-desc-col">
              <h3 className="prj-col__heading heading-xl lh-150 text-underline">
                Challenge
              </h3>
              <p className="text-body lh-150 project__text--left">
                The room booking experience remains clunky across even the most
                well-known platforms — with frictions in flow, unclear options,
                and profit-first design patterns that neglect user diversity.
              </p>
            </div>
            <div className="prj-desc-col">
              <h3 className="prj-col__heading heading-xl lh-150 text-underline">
                Goal
              </h3>
              <p className="text-body lh-150 project__text--right">
                I wanted to craft a lean, frictionless booking flow for a very
                specific group: budget-conscious professionals who travel for
                both business and leisure — users who want speed, clarity, and
                confidence without noise.
              </p>
            </div>
          </div>
          <div className="prj-wid">
            <h3 className="prj-col__heading heading-xl lh-150 text-underline">
              What I Did
            </h3>
            <p className="text-body lh-150 project__text--wide">
              Over six weeks, I benchmarked 40+ platforms, synthesized real user
              feedback from 8+ sources, mapped journeys and flows, then designed
              and prototyped the product, following a 4-step workflow:
            </p>
            <div className="prj-wid-img">
              <img src="/external/diagram.svg" />
            </div>
          </div>
          <div className="prj-toc">
            <h4 className="prj-toc-title">Table of Contents</h4>
            <div className="prj-toc-wrp">
              <ol className="prj-toc-list">
                <li className="prj-toc-list-item">
                  <a href="#discover">Discovering the Problem Space</a>
                </li>
                <li className="prj-toc-list-item">
                  <a href="#define">Defining the Right Questions</a>
                </li>
                <li className="prj-toc-list-item">
                  <a href="#design">Designing the Solution</a>
                </li>
                <li className="prj-toc-list-item">
                  <a href="#validate">Validating the Outcome</a>
                </li>
              </ol>
            </div>
          </div>
          <div id="discover" className="discover">
            <div className="discover-header">
              <div className="discover-icon-wrp">
                <div className="discover-icon-bg">
                  <img
                    className="discover-icon"
                    src="external/magnifyingglass.png"
                  />
                </div>
              </div>
              <div className="discover-title">
                <h2 className="discover-title-main">
                  <span className="discover-title-nr">01 |</span> Discover:
                </h2>
                <h3 className="heading-xl lh-175 text-underline-thick">
                  Understanding The Problem Space
                </h3>
              </div>
            </div>

            <div className="dvr-desc dvr-desc-text dvr-desc--mobile">
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-1">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
              In this section, I began analyzing the hotel booking experience by
              exploring the market and target user behavior. My goal was to
              uncover established design conventions, friction points and unmet
              user needs in the industry.
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--desk">
              <p className="dvr-desc-text">
                In this section, I began analyzing the hotel booking experience
                by exploring the market and target user behavior. My goal was to
                uncover established design conventions, friction points and
                unmet user needs in the industry.
              </p>
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-1">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="dvr-sticky">
              <div className="dvr-sticky-img-wrp">
                <img
                  className="dvr-sticky-img"
                  src="external/Frame112.png"
                  alt=""
                />
              </div>
              <span className="dvr-sticky-caption">
                To ground my understanding, I ran a competitive benchmark
                between Airbnb (direct vendor) and Vrbo (aggregate).
              </span>
            </div>
            <div className="dvr-section--1">
              <div className="dvr-section-text-wrp">
                <p className="text-body lh-150">
                  First, I built a Notion database of 40+ booking platforms
                  including agencies, hotels, and aggregators worldwide.
                </p>
                <p className="text-body lh-150">
                  This let me compare both popular and alternative companies,
                  the problems they tackled with and the solutions they implied,
                  noting levels of their efficiency.
                </p>
              </div>
              <div className="dvr-section-img-wrp">
                <div className="dvr-section-img"></div>
                <span className="dvr-section-img-caption">
                  Table is based on user reviews and website traffic data.
                </span>
              </div>
            </div>
            <div className="section section--wide">
              <p className="text-body lh-150">
                To ground my understanding, I ran a <i>competitive benchmark</i>{" "}
                between Airbnb (direct vendor) and Vrbo (aggregate); comparing
                and running heuristic evaluation for each screen on{" "}
                <span className="text-body--strong">
                  both desktop and mobile.
                </span>
              </p>
            </div>
            <div className="dvr-section--3">
              <img className="dvr-section3-img" src="external/frame113.png" />
              <span className="dvr-section-img-caption">
                Evaluating screen states during Comparing phase of the user flow
                on Vrbo. Adequacy levels color coded.
              </span>
            </div>
            <div className="dvr-section--4">
              <div className="dvr-section4-img-wrp">
                <div className="dvr-section-img"></div>
                <span className="dvr-section-img-caption">
                  User choice was due to good match with my target persona.
                </span>
              </div>
              <div className="dvr-section4-text-wrp">
                <p className="text-body lh-150">
                  I then went on and conducted 2 moderated Usability Tests with
                  a suitable participant from my target persona group.
                </p>
              </div>
            </div>
            <div className="dvr-section--1">
              <div className="dvr-section-text-wrp">
                <p className="text-body lh-150">
                  I also reviewed 6+ other Usability Tests conducted by my
                  peers.
                </p>
                <p className="text-body lh-150">
                  I studied and crafted a comprehensive report based on
                  participants’ feedback. Then cleaned and structured this
                  qualitative database for usability metrics.
                </p>
              </div>
              <div className="dvr-section-img-wrp">
                <div className="dvr-section-img"></div>
                <span className="dvr-section-img-caption">
                  Crafting a Note Taking report on Notion for all UTs so far.
                </span>
              </div>
            </div>
            <div className="dvr-section--6">
              <p className="text-body lh-150">
                I compiled all my notes with insights and user quotes into an
                Affinity Map on Miro, surfacing recurring pain points, key
                trust-builders, user expectations, and the actions that pushed
                users to finalize a booking — or aband on it.
              </p>
            </div>
            <div className="dvr-section--5">
              <div className="dvr-section5-img-wrp">
                <img
                  className="dvr-section-img"
                  src="external/frame114.png"
                  alt=""
                />
                <span className="dvr-section-img-caption">
                  I chose this participant as their profile was a good match for
                  the target audience.
                </span>
              </div>
              <div className="dvr-section5-img-wrp">
                <img
                  className="dvr-section-img"
                  src="external/frame115.png"
                  alt=""
                />
                <span className="dvr-section-img-caption">
                  I chose this participant as their profile was a good match for
                  the target audience.
                </span>
              </div>
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--6 dvr-desc--mobile">
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-2">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
              Users don’t just want options — they want guidance. Simplicity and
              transparency build trust.
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--6 dvr-desc--desk">
              <div className="dvr-desc-text-wrp">
                <h4 className="dvr-desc-text-title">Key Insight:</h4>
                <p className="dvr-desc-text">
                  Users don’t just want options — they want guidance. Simplicity
                  and transparency build trust.
                </p>
              </div>
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-2">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div id="define" className="define discover-header">
              <div className="discover-icon-wrp">
                <div className="discover-icon-bg">
                  <img
                    className="discover-icon"
                    src="external/Creativity.png"
                  />
                </div>
              </div>
              <div className="discover-title">
                <h2 className="discover-title-main">
                  <span className="discover-title-nr">02 |</span> Define:
                </h2>
                <h3 className="heading-xl lh-175 text-underline-thick">
                  Asking the Right Questions
                </h3>
              </div>
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--mobile">
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-3">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
              In this section, I translated research findings into structured
              flows and layouts, shaping the app’s information architecture.
              This phase shows how I turned raw insights into a user-centered
              framework.
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--desk">
              <p className="dvr-desc-text">
                In this section, I translated research findings into structured
                flows and layouts, shaping the app’s information architecture.
                This phase shows how I turned raw insights into a user-centered
                framework.
              </p>
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-3">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <p className="quote">
              “How does the user feeling affect each step while booking a hotel?
            </p>
            <div className="section section--compact">
              <p className="text-body lh-150">
                Drawing on my research findings, I modeled the average
                hotel/room booking journey of a budget-conscious traveler. I
                identified emotional triggers, hesitation points, and areas
                where users looped or dropped off. This helped me build a
                simplified User Journey Map that mapped closely to user intent.
              </p>
            </div>
            <div className="dvr-section--7">
              <img className="dvr-section3-img" src="external/frame116.png" />
              <span className="dvr-section-img-caption">
                Action-to-emotion mapping revealed the average User Journey for
                our target group.
              </span>
            </div>
            <div className="section section--compact">
              <p className="text-body lh-150">
                Data revealed that the main problem across the range of key
                platforms was{" "}
                <span className="text-body--accent">
                  a connectivity issue between undefined user steps
                </span>
                . Poor, delayed or unclarified flow steps lead to intense
                friction, especially from searching to reviewing listings. This
                resulted in low conversion or drop-out.
              </p>
            </div>
            <p className="quote">
              “Can we clarify these steps for users to ensure a connective
              booking experience?
            </p>
            <div className="section section--compact">
              <p className="text-body lh-150">
                At this point, I crafted and committed to{" "}
                <span className="text-body--accent">
                  a 5-step user flow structure
                </span>
                . The decision was based on reducing friction, increasing
                clarity, and removing distractions from landing to booking. This
                comprised the backbone of our entire UX structure.
              </p>
            </div>
            <div className="dvr-section--7">
              <img className="dvr-section3-img" src="external/frame117.png" />
              <span className="dvr-section-img-caption">
                Curated a 5-Step user flow structure to resolve the problem of
                poor transitions.
              </span>
            </div>
            <div className="section section--compact">
              <p className="text-body lh-150">
                With this method, I took the pen and paper and mapped sticky
                notes on my office wall to visualize pacing and interaction
                rhythm. Screen states and actions were also materialized in this
                session.
              </p>
            </div>

            <div className="dvr-section--8">
              <img className="dvr-section8-img" src="external/frame108.png" />
              <span className="dvr-section-img-caption">
                User Research findings applied on the sitemap, shaping overall
                decisions before commencing design.
              </span>
            </div>
            <div className="section section--compact">
              <p className="text-body lh-150">
                Once refined, I transferred these into digital format, and
                reiterated until it was adequately clear. This way the user
                interface and screen logic were being pre-structured.
              </p>
            </div>
            <div className="dvr-section--9">
              <div className="dvr-section9-img">
                <img src="external/frame118.png" alt="" />
              </div>
              <div className="dvr-section9-img">
                <img src="external/frame119.png" alt="" />
              </div>
              <div className="dvr-section9-img">
                <img src="external/frame120.png" alt="" />
              </div>
              <div className="dvr-section9-img">
                <img src="external/frame121.png" alt="" />
              </div>
            </div>
            <div className="dvr-section dvr-section--10">
              <p className="dvr-section10-text">
                from <span className="text-body--strong lh-150">Stickies</span>{" "}
                <span className="text-body--accent-thin">⟶</span> to{" "}
                <span className="text-body--strong lh-150">Flow Diagram</span>
              </p>
            </div>
            <div className="dvr-section--9">
              <div className="dvr-section9-img">
                <img src="external/frame122.png" alt="" />
              </div>
              <div className="dvr-section9-img">
                <img src="external/frame123.png" alt="" />
              </div>
              <div className="dvr-section9-img">
                <img src="external/frame124.png" alt="" />
              </div>
              <div className="dvr-section9-img">
                <img src="external/frame125.png" alt="" />
              </div>
            </div>
            <div className="section section--compact">
              <p className="text-body lh-150">
                During this process, the design path already began forming, and
                the decisions it posed began outlining our solutions. This lead
                me into preparing a comprehensive sitemap, to ensure we are
                mapping all potential connections between many possible site
                components.
              </p>
            </div>
            <div className="dvr-section--8">
              <img className="dvr-section8-img" src="external/frame126.png" />
              <span className="dvr-section-img-caption">
                User Research findings applied on the sitemap, shaping overall
                decisions before commencing design.
              </span>
            </div>
            <div className="section section--compact">
              <p className="text-body lh-150">
                This lead me into preparing a comprehensive sitemap, to ensure
                we are mapping potential connections between many possible site
                components.
              </p>
            </div>
            <div className="dvr-section--7">
              <img className="dvr-section3-img" src="external/frame110.png" />
              <span className="dvr-section-img-caption">
                User Research findings applied on the sitemap, shaping overall
                decisions before commencing design.
              </span>
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--6 dvr-desc--mobile">
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-2">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
              Users don’t just want options — they want guidance. Simplicity and
              transparency build trust.
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--6 dvr-desc--desk">
              <div className="dvr-desc-text-wrp">
                <h4 className="dvr-desc-text-title">Key Insight:</h4>
                <p className="dvr-desc-text">
                  Users don’t just want options — they want guidance. Simplicity
                  and transparency build trust.
                </p>
              </div>
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-2">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="design" className="design">
            <div className="discover-header">
              <div className="discover-icon-wrp">
                <div className="discover-icon-bg">
                  <img
                    className="discover-icon"
                    src="external/Paintbrush.png"
                  />
                </div>
              </div>
              <div className="discover-title">
                <h2 className="discover-title-main">
                  <span className="discover-title-nr">03 |</span> Design:
                </h2>
                <h3 className="heading-xl lh-175 text-underline-thick">
                  Building & Iterating the Solution
                </h3>
              </div>
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--mobile">
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-3">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
              In this section, I brought the concept to life through wireframes
              and prototyping. I focused on clarity, simplicity, and
              mobile-friendliness — refining the interface based on usability
              feedback and design rationale.
            </div>
            <div className="dvr-desc dvr-desc-text dvr-desc--desk">
              <p className="dvr-desc-text">
                In this section, I brought the concept to life through
                wireframes and prototyping. I focused on clarity, simplicity,
                and mobile-friendliness — refining the interface based on
                usability feedback and design rationale.
              </p>
              <div className="dvr-desc-icon-wrp dvr-desc-icon-wrp-3">
                <div className="dvr-desc-icon-bg">
                  <img
                    className="dvr-desc-icon"
                    src="external/developmentskill.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="dvr-section dvr-section--11">
              <p className="dvr-section10-text">
                from <span className="text-body--strong lh-150">Sketches</span>{" "}
                <span className="text-body--accent-thin">⟶</span> to{" "}
                <span className="text-body--strong lh-150">Design System</span>
              </p>
            </div>
            <div className="dvr-section-text-wrp dsn10">
              <p className="text-body lh-150">
                With structure in place, I began ideating layouts by hand on
                paper. These sketches were scanned into Figma.
              </p>
              <p className="text-body lh-150">
                Before passing onto wireframing, I took on an unorthodox method
                and used a drawing tablet to turn these into a quick,
                sketch-based design system directly on the digital screen.
              </p>
              <p className="text-body lh-150">
                To my surprise, this improved my overall time efficiency;
                bridging digitalizing process in a smoother fashion.
              </p>
            </div>
            <div className="dvr-section--2">
              <p className="text-body lh-150">
                🧪 Interface Crafting & Iteration <br /> I translated these
                low-fi designs into mid-fidelity wireframes in Figma, refining
                layout logic, micro-interactions, and visual flow. Throughout
                the process, I continuously made small refinements based on
                interaction clarity and hierarchy.
              </p>
            </div>
            <div className="dvr-section--2">
              <p className="text-body lh-150">
                ♻️ Lessons Through Iteration <br /> Not everything worked — some
                early versions lacked clarity or feedback. These iterations
                helped me reinforce the booking logic and highlight user trust
                elements more clearly. I discarded and documented what didn’t
                work, and sharpened what did.
              </p>
            </div>
          </div>
          <div id="validate" className="validate">
            <div className="discover-header">
              <div className="discover-icon-wrp">
                <div className="discover-icon-bg">
                  <img className="discover-icon" src="external/PieChart.png" />
                </div>
              </div>
              <div className="discover-title">
                <h2 className="discover-title-main">
                  <span className="discover-title-nr">04 |</span> Validate:
                </h2>
                <h3 className="heading-xl lh-175 text-underline-thick">
                  Testing and Reflecting on Results{" "}
                </h3>
              </div>
            </div>
            <div className="dvr-section--2">
              <p className="text-body lh-150">
                This phase highlights what worked, what didn’t, and what I’d
                improve next time — demonstrating a growth mindset and focus on
                continuous improvement.
              </p>
            </div>
            <div className="section section--compact">
              <p className="text-body lh-150">
                🧪 Testing the Prototype <br /> After completing the
                high-fidelity screens, I created a semi-interactive prototype in
                Figma. I embedded comment-based annotations explaining design
                decisions, flows, and interaction logic. <br /> To validate the
                experience:
                <ul className="text-list lh-150">
                  <li>
                    I shared the prototype with a UX mentor and received
                    recorded video feedback.
                  </li>
                  <li>
                    I reviewed the entire design with a usability lens, focusing
                    on clarity, consistency, and user flow efficiency.
                  </li>
                </ul>
              </p>
            </div>
            <div className="dvr-section-text-wrp dsn10">
              <p className="text-body lh-150">✅ What Worked, What Changed</p>
              <p className="text-body lh-150">
                The 5-step structure resonated with users — they found the
                journey simple, progressive, and goal-oriented. Core booking
                actions (Search → Compare → Book) felt intuitive and easy to
                navigate.
              </p>
              <p className="text-body lh-150">
                However, one recurring friction point was the **guest selector
                component**, which lacked immediate feedback. Users weren’t sure
                if their tap had been registered, especially on mobile. Based on
                this:{" "}
              </p>
              <ul className="text-list lh-150">
                <li>
                  I refined the guest selector UI with stronger visual feedback
                  and confirmation states.
                </li>
                <li>
                  I adjusted button states to clearly communicate interactivity.
                </li>
              </ul>
            </div>
            <div className="ins">
              <h3 className="heading-xl lh-175 text-underline-thick">
                Insights
              </h3>
            </div>
            <div className="dvr-section-text-wrp dsn10">
              <p className="text-body lh-150">🧭 Reflections & What’s Next</p>
              <p className="text-body lh-150">
                This project reminded me that **small friction creates big
                hesitation** — especially in booking workflows where trust and
                timing matter. Users want:
              </p>
              <ul className="text-list list-undecor lh-150">
                <li>- Clear signals</li>
                <li>- Instant visual feedback</li>
                <li>- Minimal loops or ambiguity</li>
              </ul>
              <p className="text-body lh-150">📌 If I were to expand HomiGo:</p>
              <ul className="text-list list-undecor lh-150">
                <li>- I’d run A/B tests on listing prioritization</li>
                <li>
                  - Add support for different user types (e.g. family, group,
                  last-minute) - Explore **voice search**, **smart filters**, or
                  a **“Save and compare” feature** for better decision-making
                </li>
                <li>
                  - Add support for different user types (e.g. family, group,
                  last-minute)
                </li>
                <li>
                  - Explore **voice search**, **smart filters**, or a **“Save
                  and compare” feature** for better decision-making
                </li>
              </ul>
            </div>
          </div>
          <div className="prj-icons">
            <div className="prj-icon-wrp">
              <div className="prj-icon__img-frame">
                <img src="/external/University.png" alt="" />
              </div>
              <span className="prj-icons__title">Scholarly</span>
            </div>
            <div className="prj-icon-wrp">
              <div className="prj-icon__img-frame">
                <img src="/external/DevelopmentSkill2.png" alt="" />
              </div>
              <span className="prj-icons__title">Analytical</span>
            </div>
            <div className="prj-icon-wrp">
              <div className="prj-icon__img-frame">
                <img src="/external/Service2.png" alt="" />
              </div>
              <span className="prj-icons__title">Creative</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project;
