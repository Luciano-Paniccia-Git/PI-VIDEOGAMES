import React from 'react';
import s from '../CardVideogame/CardVideogame.module.css';
import { NavLink } from 'react-router-dom';

class CardVideogame extends React.Component {

    render() {
        return (
            <div className={s.card}>
                <img src={this.props.image} width="400px" height="250px" alt=""/>
                <div className={s.card__content}>
                    <h3 className={s.nombre}>{this.props.name}</h3>
                    <h4 className={s.genres}>{this.props.genres}</h4>
                    <p className={s.rating}>⭐ {this.props.rating}</p>
                 <  NavLink to={`/detail/${this.props.id}`} className={s.navLink}><span className={s.leer_mas}>Leer más</span></NavLink>
             </div>
            </div>
        )
    }

}


export default CardVideogame