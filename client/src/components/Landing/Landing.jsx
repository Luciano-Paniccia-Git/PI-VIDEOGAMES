import React from "react";
import { Link } from 'react-router-dom'
import s from '../Landing/Landing.module.css';
import linkedin from "../multimedia/linkedin (1).png";
import github from "../multimedia/github (1).png";


export default function Landing () {
    return (
        <div className={s.full}>
            <div className={s.full_inner}>
                <div className={s.content}>
                    <h1 className={s.title}>PAGINA DE VIDEOJUEGOS</h1>
                        <Link to='/home'>
                            <button className={s.btn}>
                                <span className={s.ingresar}>COMENZAR</span>
                            </button>
                        </Link>
        </div>
                    
        <div className={s.links}>
            <div className={s.mini_box}>
                <a href="https://www.linkedin.com/in/luciano-paniccia-847868232/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt='linkedin'></img>
                        </a>
        </div>
            <div className={s.mini_box}>
                <a href='https://github.com/Luciano-Paniccia-Git' target="_blank" rel="noreferrer">
                    <img src={github} alt='GitHub' />
                        </a>
            </div>
            </div>
            </div>
            </div>
    )
}