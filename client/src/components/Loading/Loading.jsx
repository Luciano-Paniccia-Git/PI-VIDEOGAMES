import React from 'react'
import loading from '../multimedia/loadign-cargando.gif'
import s from '../Loading/Loading.module.css'

export default function PaginaDeCarga() {
    return (
          <div className={s.box_loading}>
            <img src={loading} alt="" />
          </div>
    )}