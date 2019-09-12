import React from "react"
import { Link } from "gatsby"
import anime from "animejs"
import { Progress, Timeline } from "antd"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "antd/dist/antd.css"
//import "../styles/styleOG.scss"

const data = [
  {
    name: "HTML/CSS",
    percent: 90,
  },
  {
    name: "Javascript",
    percent: 87,
  },
  {
    name: "HTML",
    percent: 15,
  },
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
  },
  {
    name: "Ingeniería en Sistemas Computacionales",
    insti: "Universidad Tecnologica Centroamericana",
    año_init: "2015",
    año_fin: "2020",
    indice: "90.2",
  },
]

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount() {
    //this.anime()
  window.addEventListener('scroll', this.slide);
  }

  componentDidUpdate() {
    //this.anime()
    //window.addEventListener('scroll', this.anime);
  }

  handleHover() {
    this.color()
  }

  slide = () => {
    console.log("hola")
    var basicTimeline = anime.timeline()
    basicTimeline.add(
      {
        targets: ".img-main",
        translateY: {value: window.pageOffsetY} ,
        //background: "#fff",

        duration: 2000,
        //easing: "easeInOutSine",
        //direction: "alternate",
        //rotate: 90,
      },
      0
    )

    return basicTimeline
  }


  color = () => {
    console.log("hola")
    var basicTimeline = anime.timeline()
    basicTimeline.add(
      {
        targets: ".main",
        //translateX: { value: 200 },
        background: "#fff",

        duration: 2000,
        //easing: "easeInOutSine",
        //direction: "alternate",
        //rotate: 90,
      },
      0
    )

    return basicTimeline
  }

  anime = () => {
    //const { translateX, translateY } = this.props;

    var basicTimeline = anime.timeline()
    basicTimeline
      .add(
        {
          targets: ".main",
          //translateX: { value: 200 },
          translateX: 200,
          loop: true,
          duration: 2000,
          easing: "easeInOutSine",
          direction: "alternate",
          //rotate: 90,
        },
        0
      )
      .add(
        {
          targets: ".fig",
          //translateX: { value: 200 },
          //translateY: { value: 200 },
          duration: 20000,
          scale: 20,
          rotate: 90,
          borderRadius: ["0%", "50%"],
          background: "#FFF",
          loop: true,
        },
        0
      )

    return basicTimeline
  }

  //const IndexPage = () => (
  render() {
    let skills = data.map(doc => {
      return (
        <div>
          <Progress
            //type="dashboard"
            strokeColor={{
              "0%": "black",
              "100%": "black",
            }}
            strokeLinecap='square'
            percent={doc.percent}
            strokeWidth={3}
            showInfo={false}
          />
          <h3>{doc.name}</h3>
        </div>
      )
    })

    let educ = education.map(doc => {
      return (
        <Timeline.Item>
          <h3>{doc.name}</h3>
          <h4>{doc.insti}</h4>
          Create a services site 2015-09-01
        </Timeline.Item>
      )
    })
    let educ2 = education.map(doc => {
      return (
        <div id="education">
          <h3>
            {doc.año_init} — {doc.año_fin}
          </h3>
          <div>
            <h3>{doc.name}</h3>
            <h4>{doc.insti}</h4>
          </div>
          <h3 >{doc.indice}%</h3>
        </div>
      )
    })

    return (
      <Layout>
        <SEO title="Home" />

        <div className="navbar">
          <h1>Calvin Espinoza</h1>
          <div className="nav-right">
            <li>
              <span>Acerca de</span>
            </li>
            <li>
              <span>Habilidades</span>
            </li>
            <li>
              <span>Educacion</span>
            </li>
          </div>
        </div>

        <div className="main-area">
          <div className="hero">
            <span id="firstname">Calvin</span>
            <span id="lastname">Espinoza</span>
            <div className="img-wrapper">
              <img className="img-main" src="https://bit.ly/2Zvp9FL"></img>
            </div>
          </div>
          <div className="area-block">
            <Subheading name="Acerca"></Subheading>
            <div className="area-info">
              <p>
                En julio 2015 comencé la carrera de Ingeniería en Sistemas en
                Unitec. Determinación: ser uno de los ingenieros más reconocidos
                y revolucionarios del país y asimismo lograr un mayor desarrollo
                en las tecnologías de Honduras.
              </p>
            </div>
          </div>
          <div className="area-block">
            <Subheading name="Educación"></Subheading>
            <div className="area-info" >
              {educ2}
            </div>
          </div>

          <div className="area-block">
            <Subheading name="Skills"></Subheading>
            <div className="area-info">
              {skills}
            </div>
          </div>
        </div>
        {/*
          <div className="area-block">
            <div className="sub">
              <h2>Habilidades</h2>
              <h2 className="outline">Habilidades</h2>
              <h2 className="outline">Habilidades</h2>
            </div>

            <div id="skills">{skills}</div>
          </div>

          <div className="area-block">
            <h2>Educacion</h2>
            
          </div>
        </div>
        
        {/*
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>

          <Link to="/page-2/">Go to page 2</Link>
          <span className="fig"></span>
          */}
      </Layout>
    )
  }
}

const Subheading = ({ name }) => {
  return (
    <div className="sub ">
      <h2>{name}</h2>
      <h2 className="outline animated slideInUp">{name}</h2>
      <h2 className="outline"> {name}</h2>
    </div>
  )
}

export default IndexPage
