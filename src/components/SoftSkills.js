import softskills from "../assets/scripts/softskills"

const SoftSkills =() =>{
  return(
    <section className="section">
      <h2 id="soft-skills" className="section-title ">Soft Skills</h2>
      <div className="softskills-container">
        <ul className="softskills__list">
            { softskills.map(skill => (
              <li className="softskills__list-item">
                <img src={skill.icon} />
                <h3 children={skill.copy} />
              </li>
            ))}
        </ul>
        
      </div>
    </section>
  )
}

export default SoftSkills