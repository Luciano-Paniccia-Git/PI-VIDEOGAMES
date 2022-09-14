const { Router } = require('express');
require('dotenv').config();
const {infoTotal, infoApi, nameApi, infoDB} = require('../controllers')

const router = Router();


router.get('/', async (req, res, next) => {
    const { name } = req.query; //el nombre me llega por query
    let allVideogames = await infoTotal()

    if(name) { 
        try { 
            const foundGamesAPI = await nameApi(name)
            const gamesByNameDB = await infoDB()
            let foundGamesDB =  gamesByNameDB.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            let allResults = foundGamesDB.concat(foundGamesAPI)
            allResults.length ? res.status(200).send(allResults.slice(0,15)) : res.status(400).send('No hay un videojuego con dicho nombre')

        } catch(err) {
            next(err)
        }
    }
    else {
        res.send(allVideogames)
        return
    }
    })

module.exports = router;