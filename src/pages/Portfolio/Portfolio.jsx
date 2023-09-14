import React, { useState } from "react"
import "./portfolio.css"
import Card from "./Cards/card"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import card1 from "../../image/cards/movie.png"
import card2 from "../../image/cards/cec.png"
import card3 from "../../image/cards/xo.png"
import card5 from "../../image/cards/iedc.png"

import { movie, cec, xo, iedc } from "./p"

const Portfolio = () => {
  const [state, setState] = useState(false)

  const handle = () => {
    setState(!state)
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  return (
    <div id="portfolio">
      <div class="title" data-aos="flip-up" data-aos-duration="2000">
        <h1>
          Portfol
          <span
            style={{
              color: "#2196f3",
              textShadow:
                "0px 0px 10px rgba(33, 150, 243, 0.25), 0px 0px 70px rgba(33, 150, 243, 0.3), 0px 0px 40px rgba(33, 150, 243, 0.25)",
            }}
          >
            io.
          </span>
        </h1>
      </div>

      <div class="cards">
        <div className="card-row">
          <Card
            title="movie"
            img={card1}
            par={movie}
            s1="HTML"
            s2="React.js"
            s3="Firebase"
          />
          <Card
            title="IEDC"
            img={card5}
            s1="React JS"
            s2="Tailwind"
            s3="Vanta.js"
            par={iedc}
          />
        </div>
        <div className="card-row">
          <Card
            title="CEC"
            img={card2}
            par={cec}
            s1="HTML"
            s2="CSS"
            s3="Bootstrap"
          />
          <Card title="Tic-Tac-Toe" img={card3} s2="Java" par={xo} />
        </div>
      </div>

      <div className="show">
        <div className="btn">
          <button onClick={() => handle(!state)}>Show more</button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
