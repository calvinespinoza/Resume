import React from "react"
import { Link } from "gatsby"
import anime from "animejs"
import { Progress, Timeline } from "antd"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "antd/dist/antd.css"
import "../styles/style.scss"

import node_logo from "../images/node.png"
import firebase_logo from "../images/firebase.png"
import sqls_logo from "../images/sql-server.svg"
import fireb from "../images/fireb.png"
import spg from "../images/spg.png"
import pinewood from "../images/pinewood.png"
import anting from "../images/anting.png"
import react_logo from  "../images/react.svg"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  componentDidUpdate() {}
  //const IndexPage = () => (
  render() {
    let renderSkills = data.map(doc => {
      let circles = []
      let limit = doc.percent
      for (let i = 0; i < 10; i++) {
        if (i < limit) circles.push(<div className="skill-circle"></div>)
        else circles.push(<div className="skill-circle clear"></div>)
      }

      return (
        <div className="ind-skill">
          <h3>{doc.name}</h3>
          <div className="circles">{circles}</div>
        </div>
      )
    })

    let renderEduc = education_en.map(doc => {
      return (
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
          <h3 >{doc.info}</h3>
        </div>
      )
    })

    let renderPorfolio = portfolio.map((doc, i) => {
      if (i % 2 == 0) {
        return (
          <div className="port-item">
            <img className="port-img" src={doc.image}></img>

            <div className="port-info">
              <span className="s3">{doc.category}</span>
              <span className="outline">{doc.project}</span>
              <h4>{doc.description}</h4>
            </div>
          </div>
        )
      } else {
        return (
          <div className="port-item left">
            <div className="port-info">
              <span className="s3">{doc.category}</span>
              <span className="outline">{doc.project}</span>
              <h4>{doc.description}</h4>
            </div>

            <img className="port-img" src={doc.image}></img>
          </div>
        )
      }
    })
    return (
      <Layout>
        <SEO title="Home" />

        <div className="navbar">
          <div className="nav-right">
            <a href="#educ">Education</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#profile">Profile</a>
            <a href="#contacto">Contact</a>
          </div>
        </div>

        <div className="main-area">
          <div className="hero">
            <div className="welcome">
              <span className="intro">Hi, I'm</span>
              <div className="name">
                <strong>Calvin</strong>
                <strong>Espinoza</strong>
              </div>
              <div className="description">
                <p>I’m a software developer currently based</p>
                <p>in Tegucigalpa, Honduras</p>
              </div>
            </div>
            <div className="profession">
              <span className="name">UI/UX Developer</span>
              <span className="name">Full-Stack Developer</span>
            </div>
          </div>
          <div className="block light" id="educ">
            <Subheading name="Education" number="01"></Subheading>
            {renderEduc}
          </div>
          <div className="block prim" id="skills">
            <Subheading name="Skills" number="02"></Subheading>
            <div className="col-block">
              <div>
                <span className="s2">Lenguajes</span>
                {renderSkills}
              </div>
              <div className="light" id="softskills">
                <span className="s2">Habilidades Blandas</span>
                <div id="softs"> {renderSoft}</div>
              </div>
            </div>
            <div className="col-block full-row">
              <div>
                <span className="s2">Tecnologías y Herramientas</span>
                <div id="techs">{renderTechnologies}</div>
              </div>
            </div>
          </div>

          <div className="block light" id="portfolio">
            <Subheading name="Portfolio" number="03"></Subheading>
            {renderPorfolio}
          </div>
          <div className="block prim" id="profile">
            <Subheading name="Profile" number="04"></Subheading>
            <div className="col-block25">
              <div className="light" id="general">
                {renderGeneral}
              </div>
              <span className="quote" id="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas sed tempus urna et pharetra pharetra massa massa
                ultricies. Mi ipsum faucibus vitae aliquet.
              </span>
            </div>
          </div>

          <div className="block light" id="contacto">
            <Subheading name="Contact" number="05"></Subheading>
            <div id="contact">
              <div className="input">
                <span className="s3">Name</span>
                <input />
              </div>

              <div className="input">
                <span className="s3">Email</span>
                <input />
              </div>
              <div className="input textarea">
                <span className="s3">What can I help you with?</span>
                <textarea rows="5" />
              </div>
            </div>
            <button className="dark-bt">
              {" "}
              <span className="s3">Enviar</span>
            </button>
          </div>
        </div>
      </Layout>
    )
  }
}

const Subheading = ({ name, number }) => {
  return (
    <div>
      <div className="sub">
        <h1 className="backing">{number}</h1>
        <h2 className="heading">{name}</h2>
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
    img: node_logo,
  },
  {
    name: "React JS",
    img: react_logo,
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
    img: fireb,
  },
  {
    name: "SQL Server",
    img: sqls_logo,

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
  "Determination",
  "Responsibility",
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
    indice: "90.2",
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
    indice: "90.2",
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
  {
    name: "Redes Sociales",
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
  {
    name: "Social Network",
  },
]

const portfolio = [
  {
    project: "Sprouting Productive Gear",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",
    category: "Development",
    image: spg,
  },
  {
    project: "Morazán Vigila",
    description:
      "An application currently in development for iOS and Android through React Native. Allows users to create and visualize real-time reports on crimes, fires, car accidents, etc. in Tegucigalpa, Honduras",
    category: "Development",
    image: spg,
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
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",
    category: "Prototype & Design",
    image: anting,
  },
]

export default IndexPage
