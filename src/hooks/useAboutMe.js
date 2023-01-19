import basketball from "../assets/images/icons/basketball.svg"
import coding from "../assets/images/icons/coding.svg"
import videogames from "../assets/images/icons/videogames.svg"
import guitar from "../assets/images/icons/guitar.svg"

const useAboutMe =()=>{
  return{
    brief: <div className="brief-text">
      <p>I'm a bilingual web developer focused on front end specialized translating designs to code of high quality and using mobile first process to create UI elements and responsiveness,
      fetch data from APIs and use states for store data to later print them on the UI, 
      experience on javascript to handle DOM elements in order to add interactivity on the page
      debugging to achieve the best performance to the page.</p> 
      <p>Basic-intermediate knowledge creating API-REST back ends with node using express framework connected to SQL and NoSQL databases to store data,  modeling data to JSON format, setting up of entry-points and middlewares for front end calls.</p>
      <p>Experience and knowledge on git for version managing, creating brachs, mergers and pull request.</p>
      <p>I do not consider myselft a web designer but I'm still trying.</p>
    </div>,
    hobbits: 
      <div className="hobbits__list">
          <div title="Play basketball" className="hobbit__item">
            <img src={basketball} />
          </div>
          <div title="Research about coding" className="hobbit__item">
            <img src={coding} />
          </div>
          <div title="Play videogames" className="hobbit__item">
            <img src={videogames} />
          </div>
          <div title="Playing guitar" className="hobbit__item">
            <img src={guitar} />
          </div>
      </div>
    
  }
}

export default useAboutMe

