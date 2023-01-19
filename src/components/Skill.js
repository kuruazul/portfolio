const Skill = ({ skill }) =>{

  function renderSkillLevel(){
    let levels = []
    for(let i = 0; i < skill.level; i++ ){
      levels.push(<div></div>)
    }

    return levels
  }

  return(
    <article className="skill__item">
      <div className="skill__content">
        <h2>{skill.name}</h2>
        <div className="skill__level">
          { renderSkillLevel() }
        </div>
      </div>
    </article>
  )
}

export default Skill