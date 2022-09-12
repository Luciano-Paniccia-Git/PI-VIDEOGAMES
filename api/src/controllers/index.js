const { default: axios} = require('axios');
const {Videogame, Genre} = require ('../db');

//TRAERME LOS 100 VIDEOJUEGOS
//API
const infoApi = async() => {
    let url = `https://api.rawg.io/api/platforms?key=a078be82eb41413583df3fd6e0b9336c`
    let videojuegos = [];
    try {
        for (let i=0; i<5; i++) {//con un for recorro mi API
            const respuesta = await axios.get(url);
            respuesta.data.results.map(v => {
                videojuegos.push({
                id: v.id,
                name: v.name,
                image: v.image,
                rating: v.rating,
                platforms: v.platforms,
                genres: v.genres?.map(el => el.name)
                })
            })
            url = respuesta.data.next //para pasar a la siguiente pagina
        }
    return videojuegos;
    }catch (e) {
        console.log(e)
    }
}

//A MI DB
const infoDB = async () => {

try {
    return await Videogame.findAll({
        include: [{
            model:Genre,
            atributes: ['name'],
            trought: {
                atributes: []
            }
        }]
    })
    } catch (e){
        console.error(e);
}}

//UNO MIS SOLICITUDES
const infoTotal = async () => {
    //para unir mis dos solicitudes, guardo en una variable la ejecucion de mis funciones
    const apiData = await infoApi ();
    const dbData = await infoDB();
    //ahora uno mis dos constantes contenedoras de funciones
    const infoCompleta = dbData.concat(apiData)
    return infoCompleta;
}

//SOLICITUD PARA MI REQUEST POR QUERY
//API

const nameApi = async (name) => {
    const infoSearch = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=a078be82eb41413583df3fd6e0b9336c`)
  try {
    const vgSearch = await infoSearch.data.results.map(el => {
        return {
        id: el.id,
        name: el.name,
        image: el.image,
        rating: el.rating,
        platforms: el.platforms?.map(el => el.platforms.name),
        genres: el.genres?.map(el => el.name)
        }
    })
    return vgSearch;
  }catch(e) {
    console.error(e)
  }
}
//SOLICITUD PARA MI REQUEST POR QUERY
//A MI ENDEPOINT: 
const idApi = async (id) => {
    try {
        const rtaApi = axios.get(`https://api.rawg.io/api/games/${id}?key=a078be82eb41413583df3fd6e0b9336c`)
        if(rtaApi){
            const vgId = await rtaApi.data
            const info = {
                id: vgId.id,
                name: vgId.name,
                image: vgId.image,
                genres: vgId.genres,
                description: vgId.description,
                released: vgId.released,
                rating: vgId.rating,
                platforms: vgId.platforms?.map(el => el.platforms.name)
            }
            return info
        }else {
            return ("No hay un videojuego con ese id")
        }
    }catch(e) {
        console.error(e)
    }
}
//A MI DB
const idDb = async (id) => {
    try {
        return await Videogame.findByPk(id, {
            include: [{
                model: Genre,
                atributes: ['name'],
                trought: {
                    atributes: []
            }
        }]
        })
    }catch (e){
    console.error(e)
    }
}
//UNO MIS DOS SOLICITUDES
const videogame = async (id) => {
    const dbID = id.includes("-")
    if(dbID) {
        const vgDb = await idDb(id);
        return vgDb;
    }else{
        const vgApi = await idApi(id);
        return vgApi;
    }
}

module.exports = {
    infoTotal,
    videogame,
    infoApi,
    infoDB,
    nameApi
}
