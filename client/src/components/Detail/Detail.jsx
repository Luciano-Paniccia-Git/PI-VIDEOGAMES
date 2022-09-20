import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import img from '../multimedia/joystick.jpg'
import { getVideogame } from '../../redux/actions'
import s from '../Detail/Detail.module.css'
import Loading from '../Loading/Loading'


export default function Detail () {
    
    const [carga, setCarga] = useState(true);
    const {id} = useParams()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getVideogame(id)).then(() => setCarga(false))
    }, [dispatch,id])
    const details = useSelector(state => state.videogame)

    if(carga){
        return <Loading />
    }

    var regex = /(<([^>]+)>)/gi;

    return(
        <div className={s.wrapper}>
            <div className={s.main_card}>
                <div className={s.card_left}>
                    <div className={s.card_details}>
                    <h1 className={s.nombre}>{details.name}</h1>
                    <div className={s.card_cat}>
                        <p className={s.rating}>⭐ {details.rating}</p>
                        <p className={s.genres}>{details.genres?.map(g => (g.name ? g.name : g)).join('| ')}</p>
                        <p className={s.fecha}> 📅{details.released}</p>
                    </div>
                        <div className={s.description}>📌{details.description?.replace(regex, '').replace('&#39', '')}</div>
                        <div className={s.plataformas}>🎮: {details.platforms?.join(', ')}</div>
                    </div>
                </div>
                <div className={s.card_right}>
                    <img src={details.image ? details.image : img } alt={`${details.name}'s`} width="300px" height="150px"/>
                </div>
            </div>
            <div>
                <NavLink to={'/home'} className={s.btn}>
                    <span>↵ Volver</span>
                </NavLink>
            </div>

        </div>
    )
}
