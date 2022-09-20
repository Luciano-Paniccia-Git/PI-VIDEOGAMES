import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getAllVideogames } from '../../redux/actions'
import img from '../multimedia/maquina de videojuegos.jpg';
import CardVideogame from '../CardVideogame/CardVideogame'
import s from '../Videogames/Videogames.module.css';
import Loading from '../Loading/Loading';

export const Videogames = ({currentGames}) => {

    const dispatch = useDispatch ()
    const [carga, setCarga] = useState(true);
    
    React.useEffect(() => {
        dispatch(getAllVideogames()).then(() => setCarga(false))
    }, [dispatch]);


    if(carga) {
        return <Loading />
    }
    return (
        <div className={s.main}>
            {currentGames.length > 0 ?
            currentGames?.map(v => {
                return (<CardVideogame
                    key={v.id}
                    id={v.id}
                    image={v.image ? v.image : img}
                    name={v.name}
                    genres={v.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                    rating={v.rating}
                    />)}) : Error  }

        </div>
    )
}