import { useEffect, useRef, useState } from "react";
import img from "../assets/images/profile.jpg";

const Hero =()=>{
  const heroText = useRef(null)
  const [ displayInfo, setDisplayInfo ] = useState(false)
  
    useEffect(()=>{
      setTimeout(()=>{
        !displayInfo && heroText.current.classList.add("display")
      }, 1000)
    }, [])

	return(
		<section id="header-resume">
      <div className="hero__container">
        <div className="hero__content">
          <a className={"hero__image-container"} title="Download CV" onClick={e => setDisplayInfo(!displayInfo)}>
            <img src={img}/>
          </a>
          <div ref={ heroText } className={"hero__text"}>
            <h1 className="">Erick de Jesus Calzada Barragan</h1>
            <span className="hero__rol">front end developer</span>
          </div>
        </div>
			</div>
		</section>
	)
}

export default Hero;