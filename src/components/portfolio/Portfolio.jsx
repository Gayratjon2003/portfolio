import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import Loader from '../loader/Loader';
import './portfolio.scss';
import axios from 'axios';
export default function Portfolio({ baseUrl, url }) {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [featuredPortfolio, setFeaturedPortfolio] = useState([]);
  const [webPortfolio, setWebPortfolio] = useState([]);
  const [designPortfolio, setDesignPortfolio] = useState([]);
  const [contentPortfolio, setContentPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'designing':
        setData(designPortfolio);
        break;
      case 'branding':
        setData(contentPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        const [data] = res?.data?.data;
        const bigData = data?.attributes;
        setData(bigData?.FeaturedPortfolio);
        setList(bigData.Portfolio);
        setFeaturedPortfolio(bigData?.FeaturedPortfolio);
        setWebPortfolio(bigData?.WebPortfolio);
        setDesignPortfolio(bigData?.DesignPortfolio);
        setContentPortfolio(bigData?.ContentPortfolio);
        setIsLoading(false);
      })
  }, [])
  if (isLoading) {
    return <Loader />;
  }
  else {
    return (
      <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map(d => (
            <div className="item" key={d.id} >
              <img
                src={d.img}
                alt="" />
             <a href={d.url} target="_blank"> <h3> {d.title} </h3></a>
            </div>
          ))}
        </div>
      </div>
    )
  }



}
