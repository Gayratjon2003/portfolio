import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import { useState, useEffect } from "react";
import axios from 'axios';
import Menu from "./components/menu/Menu";
import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('gayratjonabdijobborov@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('+998 94 277 60 26');
  const baseUrl = `https://for-my-portfolio.herokuapp.com`;
  const url = 'https://for-my-portfolio.herokuapp.com/api/portfolios?populate=*';
  const [introImgUrl, setIntroImgUrl] = useState('assets/man.png');
  useEffect(() => {
    axios.get(url)
      .then(res => {
        const [data] = res?.data?.data; 
        const bigData = data?.attributes;
        setPhoneNumber(bigData?.Phone_number);
        setEmail(bigData?.Email);
      })
    }, []);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} email={email} phoneNumber={phoneNumber} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro introImgUrl={introImgUrl}/>
        <Portfolio baseUrl={baseUrl} url={url} />
        <Works baseUrl={baseUrl} url={url} />
        <Testimonials baseUrl={baseUrl} url={url} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
