import { useState } from "react";
import useAboutMe from "../hooks/useAboutMe";

const AboutMe = () =>{
  const  hoobits = useAboutMe()
  console.log(hoobits)
  const [selected, setSelected] = useState("brief")

  const renderSelected =()=>{
    return hoobits[selected]
  }
  return(
    <section className="section">
      <h2 id="about-me" className="section-title">About Me</h2>
      <div className="aboutme-container">
        <div className="aboutme__content">
          <ul className="aboutme__list">
            <li onClick={e => setSelected("brief")} className={`aboutme__list-item ${(selected === "brief") ? "active" : ""}`}>
              Brief About Me
            </li>
            <li onClick={e => setSelected("hobbits")} className={`aboutme__list-item ${(selected === "hobbits") ? "active" : ""}`}>
              Hobbits
            </li>
          </ul>
          <article className="aboutme__info">
            { renderSelected() }
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;