import React, { useState, useEffect } from 'react';
import './App.scss';
import Logo from './img/logo.svg';
import Home from './img/home.svg';
import Febres from './img/febres.svg';
import Tosse from './img/tosse.svg';
import Mascara from './img/mascara.svg';
import Lavar from './img/lavarmaos.svg';
import Mortes from './img/mortes.svg';
import Casos from './img/casos.svg';
import StayHome from './img/stayhome.svg';
import Actives from './img/actives.svg';
import Warning from './img/Warning.svg';
import Heart from './img/heart.svg';
import Exercicios from './img/exercicios.svg';
import Distanciamento from './img/distanciamento.svg';
import TapToTop from '../src/Components/TapToTop';
import Api from './api/Api';
import Numeral from 'numeral';
import 'numeral/locales/pt-pt';
import Header from '../src/Components/Header'
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faVirus,faMoon,faSun,faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import GraficoLinhaArea from '../src/Components/GraficosLinhaArea';
import GraficoPie from '../src/Components/GraficosPie';
export default function App() {
  Numeral.locale('pt-pt');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [data, setData]=useState([]);
  const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollPosition(position);
  };
  const handlerClickCheck =(event)=>{
    event.target.checked===true ?
        document.body.classList.add('dark')
        :
        document.body.classList.remove('dark');
  }
  useEffect(() => {
    let isActive = true;
    window.addEventListener('scroll', handleScroll, { passive: true });
    /* setLoading(true); */
    const getAngola = async () => {
        /* setLoading(true); */
        let res =await Api.getAngolaPais();
        if (isActive) {
            setData(res);
            /* setLoading(false); */
        }}
        getAngola();
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
      isActive = false;
    }
  },[]);
  return (
    <div className="App">
      {scrollPosition > 50 && <TapToTop></TapToTop>}
      <section id="home" className="home">

      {scrollPosition > 50 ? 
      <Header onClick={handlerClickCheck}></Header>
      :
      <header>
      <div className="container header">
        <div className="logo">
          <a href="/" rel="noreferrer"><img src={Logo} alt="Logo"/>
          Covid-19 Angola
          </a>
        </div>
        <div className="theme">
                <div>
                    <input onChange={handlerClickCheck} type="checkbox" className="checkbox" id="chk" />
                    <label className="label" htmlFor="chk">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                        <div className="ball"></div>
                    </label>
                </div>

            </div>
        <nav>
          <ul>
            <li><Link  className="link" duration={1000} smooth={true} to="home">Home</Link></li>
            <li><Link className="link" duration={1000} smooth={true} to="sintomas">Sintomas</Link></li>
            <li><Link className="link" duration={1000} smooth={true} to="prevencao">Prevenção</Link></li>
            <li><Link className="link" duration={1000} smooth={true} to="situacao">Situação</Link></li>
            <li><Link className="link" duration={1000} smooth={true} to="app">App</Link></li>
          </ul>
          <button>Covid-19 pelo mundo</button>
        </nav>
      </div>
    </header>
      }
        <div className="stayhome container">
          <div className="stayhomeText">
            <h1>Fique em Casa</h1>
            <span>Esteja seguro</span>
            <span>diante da Covid-19</span>
            <p>
            Fique em casa, tanto quanto possível. Não faça caminhadas aleatórias, não vá ter encontros com amigos cara a cara, proteja os mais velhos e compre apenas os bens estritamente essenciais, com responsabilidade.
            </p>
            <button>
              Covid-19 Angola
              <FontAwesomeIcon icon={faArrowRight} /> 
            </button>
            <a target="_blank" rel="noreferrer"  href="https://www.cisp.gov.ao:10443/"><FontAwesomeIcon icon={faPlayCircle} /> Ver site oficial Covid-19 Angola</a>
          </div>
          <div className="stayhomeIcon">
          <img src={Home} alt="Home"/>
          </div>
        </div>
      
      </section>
      <section id="sintomas" className="sintomas">
        <div className="titulo">
        <h1>Sintomas da <span>Covid-19</span></h1>
        <p>Esteja atento aos sintomas da covid-19 e previna-se.</p>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" rel="noreferrer"><span>Fonte:</span> Organização Mundial da Saúde</a>
        </div>
        <div className="singrid container">
          <div className="Sincard1">
            <div className="img">
              <img src={Febres} alt="febres"></img>
            </div>
            <h1>Febres Altas</h1>
            <p>Fique em casa, tanto quanto possível. Não faça caminhadas aleatórias, não vá ter encontros</p>
            
            <FontAwesomeIcon icon={faVirus} /> 
            <FontAwesomeIcon icon={faArrowRight} /> 
          </div>
          <div className="Sincard2">
            <div className="img">
              <img src={Tosse} alt="febres"></img>
            </div>
            <h1>Tosse Seca</h1>
            <p>Fique em casa, tanto quanto possível. Não faça caminhadas aleatórias, não vá ter encontros</p>
            
            <FontAwesomeIcon icon={faVirus} /> 
            <FontAwesomeIcon icon={faArrowRight} /> 
          </div>
          <div className="Sincard3">
            <div className="img">
              <img src={Tosse} alt="febres"></img>
            </div>
            <h1>Dor de Cabeça</h1>
            <p>Fique em casa, tanto quanto possível. Não faça caminhadas aleatórias, não vá ter encontros</p>
            
            <FontAwesomeIcon icon={faVirus} /> 
            <FontAwesomeIcon icon={faArrowRight} /> 
          </div>
          <div className="Sincard4">
            <div className="img">
              <img src={Tosse} alt="febres"></img>
            </div>
            <h1>Falta de Ar</h1>
            <p>Fique em casa, tanto quanto possível. Não faça caminhadas aleatórias, não vá ter encontros</p>
            
            <FontAwesomeIcon icon={faVirus} /> 
            <FontAwesomeIcon icon={faArrowRight} /> 
          </div>
          </div>
      </section>
    
      <section id="prevencao" className="prevencao ">
        <div className="prevent container">
        <div className="prevgrid">
          <div className="prevgrid1">
          <div className="titulo">
          <h1>Cumpra com as medidas de Biosegurança e</h1>
          <h1>previna-se da <span>Covid-19</span></h1>
          <p>Fique em casa, tanto quanto possível. Não faça caminhadas aleatórias, não vá ter encontros com amigos cara a cara, proteja os mais velhos e compre apenas os bens estritamente essenciais, com responsabilidade.</p>
          <a href="https://www.cisp.gov.ao:10443/#sintomas" target="_blank" rel="noreferrer"><span>Fonte:</span> Organização Mundial da Saúde</a>
          <a className="botao" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noreferrer">
              Saiba mais
            <FontAwesomeIcon icon={faArrowRight} /> 
            </a>
          </div>
          </div>
          <div className="prevgrid2">

            <div className="prevgrid2pre1">
              <div className="pre1">
                <div className="img">
                  <img src={Mascara} alt="mascara"></img>
                </div>
                <div className="texto">
                  <h1>Use sempre a Mascara</h1>
                </div>
              </div>
            </div>
            <div className="prevgrid2pre2">
            <div className="pre2">
                <div className="img">
                  <img src={Lavar} alt="lavar as mãos"></img>
                </div>
                <div className="texto">
                  <h1>Lavar sempre as Mãos</h1>
                </div>
              </div>
              <div className="pre2">
                <div className="img">
                  <img src={StayHome} alt="fique em casa"></img>
                </div>
                <div className="texto">
                  <h1>Fique em casa</h1>
                </div>
              </div>
            </div>
            <div className="prevgrid2pre3">
            <div className="pre3">
                <div className="img">
                  <img src={Distanciamento} alt="distanciamento"></img>
                </div>
                <div className="texto">
                  <h1>Distanciamento Físico</h1>
                </div>
              </div>
              <div className="pre3">
                <div className="img">
                  <img src={Exercicios} alt="faça exercícios"></img>
                </div><div className="texto">
                  <h1>Faça Exercícios Físico</h1>
                </div>
              </div>
            
            </div>
            
          </div>
        </div>
        </div>
      </section>

      <section id="situacao" className="situacao">
        <div className="situa container">
        <div className="titulo">
          <h1>Situação da <span>Covid-19</span> em Angola</h1>
          <p>Saiba como está os casos da Covid-19 em Angola</p>
          </div>
        <div className="todoscasos">
          <div className="casos">
            <div className="img">
            <img src={Casos} alt="casos confirmados"></img>
            </div>
            <div className="dados">
              <h1>{Numeral(data.cases).format()}</h1>
              <h2>[+{Numeral(data.todayCases).format()}]</h2>
              <h3>Total de Casos</h3>
            </div>
          </div>
          <div className="activos">
          <div className="img">
          <img src={Actives} alt="mortes"/>
          </div>
          <div className="dados">
            <h1>{Numeral(data.active).format()}</h1>
            <h3>Activos</h3>
          </div>
          </div>
          <div className="criticos">
          <div className="img">
          <img src={Warning} alt="mortes"/>
          </div>
          <div className="dados">
            <h1>{Numeral(data.critical).format()}</h1>
            <h3>Críticos</h3>
          </div>
          </div>
          <div className="recuperados">
          <div className="img">
          <img src={Heart} alt="mortes"/>
          </div>
          <div className="dados">
            <h1>{Numeral(data.recovered).format()}</h1>
            <h2>[+{Numeral(data.todayRecovered).format()}]</h2>
            <h3>Recuperados</h3>
          </div>
          </div>
          <div className="mortos">
          <div className="img">
            <img src={Mortes} alt="mortes"/>
          </div>
          <div className="dados">
            <h1>{Numeral(data.deaths).format()}</h1>
            <h2>[+{Numeral(data.todayDeaths).format()}]</h2>
            <h3>Mortes</h3>
          </div>
          </div>
        </div>
      
        <div className="meses">
          <div className="area-pie">
          <h1>Percentagens da Covid-19</h1>
          <div className="mes1">
            <GraficoPie ></GraficoPie>
          </div>
          </div>
          <div className="area-pie">
          <h1>Situação da Covid-19 nos últimos 30 dias</h1>
          <div className="mes2">
            
            <GraficoLinhaArea ></GraficoLinhaArea>
          </div>
          </div>
        </div>

        

        </div>
      </section>
    
    </div>
  );
}