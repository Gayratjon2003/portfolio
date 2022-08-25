import { useEffect, useState } from 'react';
import axios from 'axios';
import './works.scss';
import Loader from '../loader/Loader';

export default function Works({ baseUrl, url }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        const [data] = res?.data?.data;
        const bigData = data?.attributes;
        setData(bigData.Works)
        setIsLoading(false);
      })
  }, [])

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }


  if (isLoading) {
    return <Loader />;
  }
  else {
    return (
      <div className='works' id='works'>
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
          {data.map((data) => (
            <div className="container" key={data.id} >
              <div className="item">
                <div className="left">
                  <div className="left-container">
                    <div className="img-container">
                      <img src={data.icon} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                    <a href={data.url} target="_blank"><span>Projects</span></a>
                  </div>
                </div>
                <div className="right">
                  <img
                    src={data.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
        <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleClick('left')} />
        <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleClick()} />
      </div>
    )
  }


}
