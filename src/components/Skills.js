import { useState } from "react"
import skillsData from "../skillsData"
import Skill from "./Skill"
const Skills =()=>{
  const [open, setOpen] = useState(false)
  return(
    <section className="section">
      <h2 id="tools-languages" className="section-title">Overall skills</h2>
      <div className="skills-container" style={{maxHeight: open ? "max-content" : "50vh" }}>
          {
            skillsData.map(skill => <Skill skill={skill} />)
          }
          <button onClick={ e=> setOpen(!open)} className="skills__btn-more">{open ?  "Show less" : "Show more"}</button>
      </div>
    </section>
  )
}

export default Skills