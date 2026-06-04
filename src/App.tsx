import { Fade } from "react-awesome-reveal";
import "./App.css";
import hand from "/hand.png";
import face from "/face.png";
import computer from "/computer.png";
import satellite from "/satellite.png";
import male from "/male.png";
import telesat from "/telesat.jpg";
import twokeys from "/2Keys.jpg";
import ford from "/FordLogo.jpg";
import ligado from "/LigadoImage.jpg";
import key from "/key.png";
import car from "/car.png";
import satelliteAntenna from "/satellite-antenna.png";
import lenderlabs from "/LenderLabs.jpg";
import turtle from "/turtle.png";
import magic from "/MachineGuidedInteractiveClustering.jpg";
import magicWand from "/magic-wand.png";
import perlin from "/perlinNosieDemo.jpg";
import speaker from "/speaker.png";
import drunk from "/DrunkBartenders.jpg";
import beerMugs from "/beer-mugs.png";
import ottawa from "/ottawa.png";
import school from "/school.png";

import TitleSection from "./components/TitleSection";
import Bubble from "./components/Bubble";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Main Start */}
      <Fade duration={2000} triggerOnce>
        <div id="mainStart" className="mainStart">
          <div className="mainHi">
            <p>
              Hi{" "}
              <span className="waveHover">
                <img src={hand} alt="Waving Hand" className="wave" />
              </span>
            </p>
          </div>
          <div className="mainMessage">
            <p>
              I'm <strong>Vincenzo Susini</strong> but you can call me{" "}
              <strong>Vincent</strong>.{" "}
              <img src={face} alt="Face" className="emojiOne" /> I am a Computer
              Science <img src={computer} alt="Computer" className="emojiOne" />
              graduate currently working at Telesat{" "}
              <img src={satellite} alt="Satellite" className="emojiOne" /> as a
              Software Engineer.{" "}
              <img src={male} alt="Male with Computer" className="emojiOne" />
            </p>
          </div>
          <section id="section07" className="demo">
            <a href="#experience">
              <span></span>
              <span></span>
              <span></span>
              Scroll
            </a>
          </section>
        </div>
      </Fade>

      {/* Experience Section */}

      <div id="experience" className="experience">
        <TitleSection>What I've been up to</TitleSection>
        <Bubble
          image={telesat}
          imageAlt="Telesat"
          emoji={satellite}
          emojiAlt="Satellite"
          title="Telesat"
          titleUrl="https://www.telesat.com/"
          position="Senior Software Engineer"
          date="2021 March - Present"
          location="Ottawa, Ontario"
          desc={
            <>
              I am currently working at Telesat on the Lightspeed project, the
              most advanced and capable LEO network in the world. I am excited
              to collaborate with the Lightspeed team to redefine global
              satellite connectivity by providing ubiquitous, affordable
              broadband links with fiber-like speeds. In my role, I lead the
              front-end development of production applications for Sales
              Engineers using Angular, TypeScript, and Material UI components.
              Additionally, I contribute to back-end microservice development
              with Java, GraphQL, and Quarkus. Beyond development, I manage
              deployments for production and staging environments using
              Kubernetes and Azure.
            </>
          }
        />
        <Bubble
          image={telesat}
          imageAlt="Telesat"
          emoji={satellite}
          emojiAlt="Satellite"
          title="Telesat"
          titleUrl="https://www.telesat.com/"
          position="Systems Operation Intern"
          date="2020 June - 2020 August"
          location="Ottawa, Ontario"
          desc={
            <>
              My time at Telesat was brief but I was able to learn several new
              skills. I was brought onto the Systems Operations team to develop
              tools to support the business needs of the Sales and Solutions
              team. I also experienced a full agile process for the creation of
              a full-stack tool. During the term, I got to develop the tools in
              Typescript, Javascript, HTML, Bootstrap (CSS), and React. While
              developing, I was reintroduced to design patterns and was exposed
              to containerization and container development to communicate with
              the software architect effectively. Overall, I was able to pick up
              some new skills and knowledge that will continue to advance my
              career.
            </>
          }
        />
        <Bubble
          image={twokeys}
          imageAlt="2Keys"
          emoji={key}
          emojiAlt="Key"
          title="2Keys Security Solutions"
          titleUrl="https://2keys.ca/"
          position="Junior Software Developer"
          date="2019 September - 2019 December"
          location="Ottawa, Ontario"
          desc={
            <>
              2Keys was an outstanding start to my first software developer
              position. I began working with the macOS for the first time and
              quickly adapted to the environment. I was challenged with the task
              of updating a previous version of software 2Keys offered to
              clients. Aside from new features, I got to completely update the
              UX and UI. I worked with the team early on to design wire-frames
              and to complete a functional design of the project before starting
              development. This allowed myself to plan out a portion of the
              development tasks and to help manage my time accordingly. I was
              introduced to the Spring Boot framework, J2EE programming, and
              MongoDB to complete new features for the application. To support
              the front-end development and the new UI that was introduced, I
              used my Javascript, HTML, and CSS experience to implement the new
              designs while also learning my first CSS component library,
              Bootstrap.
            </>
          }
        />
        <Bubble
          image={ford}
          imageAlt="Ford"
          emoji={car}
          emojiAlt="Car"
          title="Ford Motor Company"
          titleUrl="https://www.ford.com/"
          position="Firmware Developer Intern"
          date="2019 January - 2019 April"
          location="Kanata, Ontario"
          desc={
            <>
              During my work term at Ford Motor Company, I was introduced to the
              Linux OS and had the opportunity to learn C and C++. I was able to
              work on new features for Ford developers, apply my knowledge to
              fix bugs that arose, and reviewed and analyzed other developer's
              code. I also had the opportunity to apply my C++ and C skills to
              develop a resource manager in QNX for one of the devices my team
              focused on. Throughout the entire term, I learned the building
              blocks to successfully developing in the Linux OS, used and
              applied knowledge from C++ and C such as maximizing the potential
              of pointers, and I also learned to properly comment and test code
              to help other developers better understand the purpose of it.
              Aside from learning valuable skills to develop in an embedded
              systems environment, I also learned valuable skills at Ford that
              has helped to improve my development in any environment while I
              continue to improve as a developer.
            </>
          }
        />
        <Bubble
          image={ligado}
          imageAlt="Ligado"
          emoji={satelliteAntenna}
          emojiAlt="Satellite Antenna"
          title="Ligado Networks"
          titleUrl="https://ligado.com/"
          position="Devops, Business Analyst & QA Intern"
          date="2018 April - 2018 August"
          location="Ottawa, Ontario"
          desc={
            <>
              Ligado was my first introduction to future jobs that I will
              experience in my field. Overall, I learned the environment and the
              structure of what a company looks like and learned valuable skills
              that I can use in future jobs. Javascript was involved in several
              projects I worked on while at the company and I was able to gain
              quite the intermediate understanding of the language and what can
              be done with it. I was introduced to Sharepoint as well and used
              both Javascript, CSS, and HTML to develop and support the intranet
              the company was creating for internal use. I also experienced
              Quality Assurance in the position. Using automated testing
              frameworks, I tested features within ServiceNow that the company
              used. I was also lucky to get the opportunity to work with DevOps
              and Agile methodologies and was able to learn concepts and
              processes during the learning experience that I can use in future
              jobs or experiences.
            </>
          }
          wrapperClass="wrapperLigado"
        />
      </div>

      {/* Side Projects */}
      <div id="sideProjects" className="sideProjects">
        <TitleSection>What I've worked on</TitleSection>
        <Bubble
          image={lenderlabs}
          imageAlt="Lender Labs"
          emoji={turtle}
          emojiAlt="Turtle"
          title="Lender Labs"
          titleUrl="https://lenderlabs.xyz/welcome"
          position="Next.js - React - Tailwind CSS - Solana"
          date=""
          location=""
          desc={
            <>
              I had the opportunity to work on a startup crypto project within
              the Solana ecosystem. Using the application for daily NFT lending,
              I aimed to enhance the product and brand. I spearheaded the
              development of innovative features using React, Next.js, and
              Tailwind CSS, improving the lending and borrowing experience.
              Thriving in the startup environment, I delivered adaptable
              solutions, met tight deadlines, and contributed to key business
              decisions for sustainable growth and profitability.
            </>
          }
          emojiClass="emojiTitleBeer"
        />
        <Bubble
          image={magic}
          imageAlt="Machine Guided Interactive Clustering"
          emoji={magicWand}
          emojiAlt="Magic Wand"
          title="MaGIC"
          titleUrl="https://github.com/vsusini/Machine-Guided-Interactive-Clustering"
          position="Javascript - React - Bootstrap - Python"
          date=""
          location=""
          desc={
            <>
              I got the opportunity to work with a professor who specialized in
              Machine Learning and Artificial Intelligence and was brought on to
              create an application to support semi-supervised clustering. Using
              previously learned skills, I was able to create an application
              using React, Node.js, and Python to improve semi-supervised
              clustering by generating vital questions to improve a clustering
              result and simplifying the process of generating and utilizing
              annotated data as it is inputted by the user. Utilizing machine
              learning and metrics, an algorithm was created to help determine
              samples in a dataset with a poor probability of being classified
              correctly. The user would then be queried the samples to improve
              the clustering result. The project was a part of the Undergraduate
              Research Opportunity Program (UROP) from the University of Ottawa.
            </>
          }
          emojiClass="emojiTitleBeer"
        />
        <Bubble
          image={perlin}
          imageAlt="Perlin Noise Demo"
          emoji={speaker}
          emojiAlt="Speaker"
          title="Perlin Noise Demo"
          titleUrl="https://vsusini.github.io/Perlin-Noise-Demo"
          position="Javascript - Three.js"
          date=""
          location=""
          desc={
            <>
              I got the opportunity to take a Computer Graphics course during my
              fourth year. Near the end of the semester, I got to choose a final
              project to complete. The class had briefly discussed Perlin Noise
              but I wanted to learn more about noise, how it was generated, and
              what it could be used for. I started with some dots using Three JS
              where the height of the dots was based on a Perlin noise function.
              I soon realized it looked very similar to some type of terrain
              generator and decided to add in the ability to change colours for
              different values of the Perlin function. Overall, I achieved 100%
              on the project and had learned a fair amount for future projects
              and how I could apply Perlin's noise in the future.
            </>
          }
        />
        <Bubble
          image={drunk}
          imageAlt="Drunk Bartenders"
          emoji={beerMugs}
          emojiAlt="Beer Mug"
          title="Drunk Bartenders"
          titleUrl="https://vsusini.github.io/Drunk-Bartenders/"
          position="Javascript - HTML - CSS"
          date=""
          location=""
          desc={
            <>
              I often found myself getting bored while playing drinking games
              with friends. I found that some games had too little activities
              and others were just plain dumb. With a friend of mine, we set out
              to create our own drinking game as we both wanted a project to
              work on that involved Javascript. After several iterations,
              multiple wireframes, and different character lists, we decided on
              letting the drinks be the characters. The project is still a work
              in progress as we continue to add more features and address bugs.
            </>
          }
          emojiClass="emojiTitleBeer"
        />
      </div>

      {/* Education */}
      <div id="education" className="education">
        <TitleSection>What I've learned</TitleSection>
        <Bubble
          image={ottawa}
          imageAlt="University of Ottawa"
          emoji={school}
          emojiAlt="School"
          title="University of Ottawa"
          titleUrl="https://www.uottawa.ca/en"
          position="B.Sc in Computer Science with a Minor in Management"
          date="2016 - 2020"
          location="Ottawa, Ontario"
          desc={
            <>
              Ottawa was an amazing experience for me. It got me out of my
              comfort zone as I moved to live not only by myself, but also up to
              four hours away from the home I had previously lived in. I met
              amazing professors who inspired me to do projects like this and
              also encouraged me to continue to learn in different facets of
              Computer Science and Software Engineering. I was also in a
              position to develop relationships with many talented individuals
              with similar minds as myself as they continue to motivate me to
              develop projects that emerge during my career.
            </>
          }
        />
      </div>

      {/* Skills */}
      <Fade duration={2500} triggerOnce>
        <div id="skills" className="skills">
          <TitleSection>What I can do</TitleSection>
          <SkillsSection />
        </div>
      </Fade>

      {/* Footer */}
      <Fade duration={2000} triggerOnce>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
