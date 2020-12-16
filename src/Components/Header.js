import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun  } from '@fortawesome/free-solid-svg-icons';
import Logo from '../img/logo.svg';
import {Link} from 'react-scroll';
import './../App.scss';
const HeaderTop= ({onClick})=>
    <header style={{position:"fixed", backgroundColor:"#fffdfd", zIndex:1,top:0}}>
        <div className="container header">
            <div className="logo">
                <a href="/" rel="noreferrer"><img src={Logo} alt="Logo"/>Covid-19 Angola</a>
            </div>
            <div className="theme">
                <div>
                    <input onChange={onClick} type="checkbox" className="checkbox" id="chk" />
                    <label className="label" htmlFor="chk">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                        <div className="ball"></div>
                    </label>
                </div>
            </div>
    <nav>
        <ul >
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
export default HeaderTop;
