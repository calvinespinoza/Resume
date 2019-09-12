import React from "react"
import { Link } from "gatsby"
import anime from "animejs"
import { Progress, Timeline } from "antd"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "antd/dist/antd.css"
import "../styles/style.scss"

import spg from "../images/spg.png"
import pinewood from "../images/pinewood.png"

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

    let renderEduc = education.map(doc => {
      return (
        <div id="education">
          <div>
            <h3>
              {doc.año_init} — {doc.año_fin}
            </h3>
            <h4>Tegucigalpa</h4>
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

    let renderSoft = softskills.map(doc => {
      return <h3>{doc}</h3>
    })

    let renderTechnologies = techs2.map(doc => {
      return <h3>{doc.name}</h3>
    })

    let renderGeneral = general.map(doc => {
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
            <div>
              <img className="port-img" src={doc.image}></img>
            </div>
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
            <div>
              <img className="port-img" src={doc.image}></img>
            </div>
          </div>
        )
      }
    })
    return (
      <Layout>
        <SEO title="Home" />

        <div className="navbar">
          <div className="nav-right">
            <a href="#ed">Educacion</a>
            <span>Habilidades</span>
            <span>Perfil</span>
            <span>Contacto</span>
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
          <div className="block light" id="ed">
            <Subheading name="Educación" number="01"></Subheading>
            {renderEduc}
          </div>
          <div className="block prim" id="skills">
            <Subheading name="Habilidades" number="02"></Subheading>
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
            <div className="row-block">
              <span className="s2">Tecnologías y Herramientas</span>
              <div id="techs">{renderTechnologies}</div>
            </div>
          </div>

          <div className="block light" id="portfolio">
            <Subheading name="Portfolio" number="03"></Subheading>
            {renderPorfolio}
          </div>
          <div className="block prim">
            <Subheading name="Perfil" number="04"></Subheading>
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

          <div className="block light">
            <Subheading name="Contacto" number="05"></Subheading>
            <div id="contact">
              <div className="input">
                <span className="s3">Nombre</span>
                <input />
              </div>

              <div className="input">
                <span className="s3">Correo</span>
                <input />
              </div>
              <div className="input">
                <span className="s3">¿En que te puedo ayudar?</span>
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
    img: "",
  },
  {
    name: "React JS",
    img: "",
  },
  {
    name: "React Native",
    img: "",
  },
  {
    name: "Meteor",
    img: "",
  },
  {
    name: "Node.js",
    img: "",
  },
  {
    name: "Angular",
    img: "",
  },
  {
    name: "MongoDB",
    img: "",
  },
  {
    name: "Firebase",
    img: "",
  },
  {
    name: "SQL Server",
    img: "",
  },
  {
    name: "Hadoop",
    img: "",
  },
  {
    name: "Unreal Engine",
    img: "",
  },
]

const softskills = [
  "Integridad",
  "Trabajo en equipo",
  "Determinación",
  "Responsabilidad",
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
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",
    category: "Development",
    image: spg,
  },
  {
    project: "Pinewood Cinema",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",
    category: "Prototype & Design",
    image: pinewood,
  },
  {
    project: "anting",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas sed tempus urna et pharetra pharetra massa mass ultricies. Mi ipsum faucibus vitae aliquet.",
    category: "Prototype & Design",
    image: spg,
  },
]

export default IndexPage
