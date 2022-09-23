import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import s from '../NavBar/NavBar.module.css'
import { getAllVideogames } from '../../redux/actions'
import { useDispatch } from "react-redux";


export default function NavBar () {
    const dispatch = useDispatch ()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getAllVideogames())
    }
    return (
        <nav className={s.nav}>
            <div className={s.busqueda}>
                <SearchBar />
            </div>
            <div className={s.search}>
                <button className={s.btn}onClick={e => handleRefresh(e)}>Actualizar</button>
                <span className={s.opcion}><NavLink to={'/create'} className={s.to}>Crear Videojuego</NavLink></span>
            </div>
        </nav>
    )
}