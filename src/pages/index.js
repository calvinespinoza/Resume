import React from "react"
import { Icon, message } from "antd"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import emailjs from "emailjs-com"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "antd/dist/antd.css"
import "../styles/style.scss"

import spg from "../images/spg.png"
import pinewood from "../images/pinewood.png"
import anting from "../images/anting.png"
import morazan from "../images/morazan.png"

import tech1 from "../images/tech1.png"
import tech2 from "../images/tech2.png"
import tech3 from "../images/tech3.png"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      feedback: "",
      name: "",
      email: "",
      elements: [],
      windowHeight: 0,
      showMenu: false,
    }

    this.showNav = this.showNav.bind(this)
    this.hideNav = this.hideNav.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sendFeedback = this.sendFeedback.bind(this)
  }

  showNav() {
    this.setState({
      showMenu: true,
    })
  }

  hideNav() {
    this.setState({
      showMenu: false,
    })
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
    //console.log(event.target.value)
  }

  handleSubmit(event) {
    const templateId = "template_GsBO3H7z"

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email,
      to_name: "Calvin",
    })
  }
  sendFeedback(templateId, variables) {
    emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!")
        this.setState({
          name: "",
          email: "",
          feedback: "",
        })
        message.success("Email successfully sent!")
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      )
  }

  componentDidMount() {
    emailjs.init("user_NoRfbhvUjsdIF7QtVBhah")
  }

  componentDidUpdate() {}

  //const IndexPage = () => (
  render() {
    let renderMenus = menus.map((doc, i) => {
      return (
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={i * 100}
        >
          <a onClick={this.hideNav} href={doc.href}>
            {doc.name}
          </a>
        </ScrollAnimation>
      )
    })
    let renderSkills = data.map(doc => {
      let circles = []
      let limit = doc.percent
      for (let i = 0; i < 10; i++) {
        if (i < limit)
          circles.push(
            <ScrollAnimation animateIn="fadeIn" delay={i * 100}>
              <div className="skill-circle"></div>
            </ScrollAnimation>
          )
        else
          circles.push(
            <ScrollAnimation animateIn="fadeIn" delay={i * 100}>
              <div className="skill-circle clear"></div>
            </ScrollAnimation>
          )
      }

      return (
        <ScrollAnimation animateIn="fadeIn">
          <div className="ind-skill">
            <h3>{doc.name}</h3>
            <div className="circles">{circles}</div>
          </div>
        </ScrollAnimation>
      )
    })

    let renderEduc = education_en.map((doc, i) => {
      return (
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={i * 50}
          style={{ width: "100%" }}
        >
          <div id="education">
            <div id="year-desc">
              <h3>
                {doc.año_init} — {doc.año_fin}
              </h3>
              <h5>Tegucigalpa</h5>
            </div>
            <div>
              <h2>{doc.name}</h2>
              <h3>{doc.insti}</h3>
              <h4>{doc.descripcion}</h4>
            </div>

            <h3 className="indice">{doc.indice}%</h3>
          </div>
        </ScrollAnimation>
      )
    })

    let renderSoft = softskills_en.map(doc => {
      return <h3>{doc}</h3>
    })

    let renderTechnologies = techs2.map(doc => {
      return (
        <div>
          <h3>{doc.name}</h3>
          {/*<img className="tech-img" src={doc.img}></img>*/}
        </div>
      )
    })

    let renderGeneral = general_en.map(doc => {
      return (
        <div>
          <span className="s3">{doc.name}</span>
          <h3>{doc.info}</h3>
        </div>
      )
    })

    let renderPorfolio = portfolio.map((doc, i) => {
      if (i % 2 == 0) {
        return (
          <div className="port-item">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <img className="port-img" src={doc.image}></img>
            </ScrollAnimation>
            <div className="port-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={200}
                animateOnce={true}
              >
                <span className="s3">{doc.category}</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={400}
                animateOnce={true}
              >
                <span className="port-title outline">{doc.project}</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={600}
                animateOnce={true}
              >
                <h4>{doc.description}</h4>
              </ScrollAnimation>
            </div>
          </div>
        )
      } else {
        return (
          <div className="port-item left">
            <div className="port-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={200}
                animateOnce={true}
              >
                <span className="s3">{doc.category}</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={400}
                animateOnce={true}
              >
                <span className="port-title outline">{doc.project}</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={600}
                animateOnce={true}
              >
                <h4>{doc.description}</h4>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <img className="port-img" src={doc.image}></img>
            </ScrollAnimation>
          </div>
        )
      }
    })
    return (
      <Layout>
        <SEO title="Home" />
        {/*
        <button className="nav-bt" onClick={this.showNav}></button>
*/}

        {/*
        <div className="navbar-sm">
          <a className="navbar-name">Calvin</a>
          {this.state.showMenu ? (
            <Icon
              className="animated fadeIn"
              type="close-circle"
              onClick={this.hideNav}
            />
          ) : (
            <Icon
              className="animated fadeIn"
              type="menu"
              onClick={this.showNav}
            />
          )}
        </div>
        */}

        <div className="navbar">
          {/*
        <div className="animated fadeInLeft delay-2s navbar-name">
        <a href="#main-area">Calvin</a>
        </div>
        */}

          <div className="animated fadeInLeft delay-1s navbar-area">
            <a href="#skills">Skills</a>
            <a href="#educ">Education</a>

            <a href="#portfolio">Portfolio</a>
            <a href="#profile">About</a>
            <a href="#contacto">Contact</a>
          </div>
        </div>

        {/*
        <img className="graphic" src="https://bit.ly/2lu2k76"></img>
*/}
        <div className="graphic"></div>
        <div className="main-area" id="home">
          <div className="num-obj">
            <div className="number">00</div>
          </div>
          <div className="hero">
            <div className="welcome">
              <ScrollAnimation animateIn="fadeInUp" className="intro">
                <div>I am</div>
                <div className="name">Calvin Espinoza.</div>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" delay={500}>
                <div className="description">
                  <p>A software developer currently based</p>
                  <p>in Tegucigalpa, Honduras</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={500}>
                <div className="additional">
                  <p>
                    My main focus is the development of top-tier user
                    experiences and highly effective applications.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation
              className="profession outline"
              animateIn="fadeInUp"
              delay={1000}
            >
              <div className="prof-div">
                <span className="name">UI/UX Developer</span>
                <span className="name">Full-Stack Developer</span>
              </div>
            </ScrollAnimation>
          </div>

          <div className="block " id="skills">
            <Subheading name="Skills" number="01"></Subheading>
            <div className="col-block">
              <div>
                <span className="s2">Programming Expertise</span>
                {renderSkills}
              </div>
              <ScrollAnimation animateIn="fadeInLeft">
                <div className="light" id="softskills">
                  <span className="s2">Soft Skills</span>
                  <div id="softs"> {renderSoft}</div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-block full-row">
              <div>
                <span className="s2">Tools & Technologies</span>
                {/* <div id="techs">{renderTechnologies}</div>*/}
                <ScrollAnimation animateIn="fadeInDown">
                  <img className="tech-img" src={tech1}></img>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown" delay={200}>
                  <img className="tech-img" src={tech2}></img>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown" delay={400}>
                  <img className="tech-img" src={tech3}></img>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="block " id="educ">
            <Subheading name="Education" number="02"></Subheading>
            {renderEduc}
          </div>
          <div className="block " id="portfolio">
            <Subheading name="Portfolio" number="03"></Subheading>
            {renderPorfolio}
          </div>
          <div className="block " id="profile">
            <Subheading name="About" number="04"></Subheading>

            <div className="col-block25">
              <ScrollAnimation
                animateIn="fadeInRight"
                animateOut="fadeOutRight"
              >
                <div className="light" id="general">
                  <span className="s2"></span>
                  {renderGeneral}
                  <div>
                    <span className="s3">Social Network</span>
                    <h3 id="socials">
                      <Icon
                        type="linkedin"
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/calvin-espinoza-4396a4191",
                            "_blank"
                          )
                        }
                      />

                      <Icon
                        type="instagram"
                        onClick={() =>
                          window.open(
                            "https://www.instagram.com/calvinspnz/",
                            "_blank"
                          )
                        }
                      />
                      <Icon
                        type="github"
                        onClick={() =>
                          window.open(
                            "https://github.com/calvinespinoza",
                            "_blank"
                          )
                        }
                      />
                      <Icon
                        type="mail"
                        onClick={() =>
                          window.open(
                            "mailto:calvin_espinoza@hotmail.com",
                            "_blank"
                          )
                        }
                      />
                    </h3>
                  </div>
                </div>
              </ScrollAnimation>

              <span className="quote" id="description">
                <p>
                  As a self-driven and passionate software developer, I
                  prioritize awe-striking visuals and highly efficient code to
                  provide the ultimate user experience.
                </p>
                <p>
                  The enjoyment of being challenged and engaged with projects
                  that require me to work outside my comfort and knowledge set
                  allows me to explore new grounds and continually learn new
                  development techniques.
                </p>
              </span>
            </div>
          </div>
          <div className="block">
            <ScrollAnimation animateIn="fadeInUp" id="quotations">
              <span className="quote" id="description2">
                <span className="quotation outline" id="quotation1">
                  “
                </span>
                <p>
                  As cofounder of a local web development startup known as
                  Diamond Software, I understand the pitfalls of a highly
                  competitive market and the work ethic necessary to fulfill
                  clients’ needs.
                </p>
                {/*<span className="quotation outline" id="quotation2">
                  ”
                </span>
                */}
              </span>
            </ScrollAnimation>
          </div>
          <div className="block" id="contacto">
            <Subheading name="Contact" number="05"></Subheading>
            <ScrollAnimation animateIn="fadeIn" delay={750}>
            <div id="contact">
              <div className="input">
                <span className="s3">Your Name</span>
                <input
                  onChange={this.handleChange("name")}
                  value={this.state.name}
                />
              </div>

              <div className="input">
                <span className="s3">Your Email</span>
                <input
                  onChange={this.handleChange("email")}
                  value={this.state.email}
                />
              </div>
              <div className="input textarea">
                <span className="s3">What can I help you with?</span>
                <textarea
                  rows="5"
                  onChange={this.handleChange("feedback")}
                  value={this.state.feedback}
                />
              </div>
            </div>
            </ScrollAnimation>
            <button className="dark-bt" onClick={this.handleSubmit}>
              {" "}
              <span className="s3">Send</span>
            </button>
           
            <span className="s4">
            <ScrollAnimation animateIn="fadeInUp" delay={2000}>
              or reach me directly at <strong>calvin_espinoza@hotmail.com</strong>
              </ScrollAnimation>
            </span>
         
          </div>

          <div className="footer">
            This website was made by myself using ReactJS and Gatbsy.
          </div>
        </div>
        {this.state.showMenu ? (
          <div className="menu animated fadeIn">
            <div className="menu-div">{renderMenus}</div>
          </div>
        ) : (
          ""
        )}
      </Layout>
    )
  }
}

//const menus = ["Home", "Education", "Skills", "Portfolio", "About", "Contact"]

const menus = [
  {
    name: "Home",
    href: "#home",
  },
  { name: "Skills", href: "#skills" },
  {
    name: "Education",
    href: "#educ",
  },

  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "About",
    href: "#profile",
  },
  {
    name: "Contact",
    href: "#contacto",
  },
]

const Subheading = ({ name, number }) => {
  return (
    <div className="hidden">
      <div className="sub">
        <ScrollAnimation animateIn="fadeInLeft">
          <span className="backing outline">{number}</span>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <h2 className="heading">{name}</h2>
        </ScrollAnimation>
      </div>

      <div className="num-obj">
        <div className="number">{number}</div>
      </div>
    </div>
  )
}

const data = [
  {
    name: "HTML/SCSS",
    percent: 9,
  },
  {
    name: "Javascript",
    percent: 8,
  },

  {
    name: "Java",
    percent: 7,
  },
  {
    name: "C/C++",
    percent: 7,
  },
  {
    name: "Python",
    percent: 5,
  },
]

const techs = [
  "Node.js",
  "ReactJS",
  "React Native",
  "Meteor",
  "Angular",
  "MongoDB",
  "Firebase",
  "SQL Server",
  "Hadoop",
  "Unreal Engine 4",
]

const techs2 = [
  {
    name: "Node.js",
    //img: node_logo,
  },
  {
    name: "React JS",
    //img: react_logo,
  },
  {
    name: "React Native",
  },
  {
    name: "Meteor",
  },

  {
    name: "Angular",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Firebase",
    //img: fireb,
  },
  {
    name: "SQL Server",
    //img: sqls_logo,
  },
  {
    name: "Hadoop",
  },
  {
    name: "Unreal Engine",
  },
]

const softskills = [
  "Integridad",
  "Trabajo en equipo",
  "Determinación",
  "Responsabilidad",
]

const softskills_en = [
  "Integrity",
  "Teamwork",
  "Responsibility",
  "Determination",
]

const education = [
  {
    name: "Educacion Primaria Bilingüe",
    insti: "Elvel School",
    año_init: "2004",
    año_fin: "2010",
    indice: "97.6",
  },
  {
    name: "Educacion Secundaria Bilingüe",
    insti: "Elvel School",
    año_init: "2010",
    año_fin: "2015",
    indice: "98.3",
    descripcion: "Salutatorian: 2º de la promoción",
  },
  {
    name: "Ingeniería en Sistemas Computacionales",
    insti: "Universidad Tecnologica Centroamericana",
    año_init: "2015",
    año_fin: "2020",
    indice: "90.0",
    descripcion: "Calificación más alta: Area de Computacion Intermedia 2018",
  },
]

const education_en = [
  {
    name: "Elementary School Education ",
    insti: "Elvel School",
    año_init: "2004",
    año_fin: "2010",
    indice: "97.6",
  },
  {
    name: "High School Degree",
    insti: "Elvel School",
    año_init: "2010",
    año_fin: "2015",
    indice: "98.3",
    descripcion: "Salutatorian: 2º in graduating class",
  },
  {
    name: "Bachelor of Software Engineering (B.SE.)",
    insti: "Universidad Tecnologica Centroamericana",
    año_init: "2015",
    año_fin: "2020",
    indice: "90.0",
    descripcion: "Highest Score: Intermediate Computing 2018",
  },
]

const general = [
  {
    name: "Nombre",
    info: "Calvin Espinoza",
  },
  {
    name: "Edad",
    info: "21 años",
  },
  {
    name: "Nacido en",
    info: "Tegucigalpa, Honduras",
  },
]

const general_en = [
  {
    name: "Name",
    info: "Calvin Espinoza",
  },
  {
    name: "Age",
    info: "21 years old",
  },
  {
    name: "Born in",
    info: "Tegucigalpa, Honduras",
  },
]

const portfolio = [
  {
    project: "Sprouting Productive Gear",
    description:
      "SPG is a crowdfunding platform that allows landowners in Central America to connect with investors who are willing to fund these projects through the application.",
    category: "Development",
    image: spg,
  },
  {
    project: "Morazán Vigila",
    description:
      "An application currently in development for iOS and Android through React Native. Allows users to create and visualize real-time reports on crimes, fires, car accidents, etc. in Tegucigalpa, Honduras",
    category: "Development",
    image: morazan,
  },
  {
    project: "Pinewood Cinema",
    description:
      "Full-fledged prototype for a companion application for a local drive-in cinema. Visualizes the user experience for ticket purchasing and food delivery.",
    category: "Prototype & Design",
    image: pinewood,
  },
  {
    project: "anting",
    description:
      "Anting is an online credit marketplace, where investors back creditworthy borrowers in exchange for interest income. A promising idea conceived and presented by college students through this prototype.",
    category: "Prototype & Design",
    image: anting,
  },
]

export default IndexPage
