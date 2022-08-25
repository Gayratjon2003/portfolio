import './intro.scss'
import Typical from 'react-typical'

export default function Intro({ introImgUrl }) {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="img-container">
          <img src={introImgUrl} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>G'ayratjon Abdijobborov</h1>
          <h3>
            <span>
              <Typical
                loop={Infinity}
                steps={[
                  "Enhusiastiv Developer",
                  3000,
                  "Front-End Developer",
                  3000,
                ]}
              />
            </span> </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
