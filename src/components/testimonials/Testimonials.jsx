import './testimonials.scss'
import Loader from '../loader/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Testimonials({ baseUrl, url }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        const [data] = res?.data?.data;
        const bigData = data?.attributes;
        setData(bigData?.Testimonials);
        setIsLoading(false);
      })
  }, [])

  if (isLoading) {
    return <Loader />;
  }
  else {
    return (<div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d => (
          <div className={d.featured ? 'card featured' : 'card'} key={d.id} >
            <div>
              <a href={d.src} className='top' target="_blank" >
                <img src='assets/right-arrow.png' className='left' alt="" />
                <img
                  src={d.img}
                  className='user' alt="" />
                <img src={d.icon}
                  className='right' alt="" />
              </a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3> {d.name} </h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>);
  }
}
