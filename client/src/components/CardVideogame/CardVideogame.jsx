import React from 'react';
import s from '../CardVideogame/CardVideogame.module.css';
import { NavLink } from 'react-router-dom';

export default function CardVideogame ({id, image, name, genres, rating}) {

        return (
            <div className={s.card}>
                <img src={image} width="400px" height="250px" alt=""/>
                <div className={s.card__content}>
                    <h3 className={s.nombre}>{name}</h3>
                    <h4 className={s.genres}>{genres}</h4>
                    <p className={s.rating}>⭐ {rating}</p>
                 <NavLink to={`/detail/${id}`} className={s.navLink}><span className={s.leer_mas}>Leer más</span></NavLink>
             </div>
            </div>
        )
    }




