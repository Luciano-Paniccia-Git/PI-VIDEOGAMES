const {default: axios} = require ('axios');
const {Router} = require ('express');
const {Genre} =  require('../db')

const router = Router();

router.get('/',async (req, res, next) => {
    try{
        const repuesta = await axios.get(`https://api.rawg.io/api/genres?key=a078be82eb41413583df3fd6e0b9336c`);
        const genreApi = await repuesta.data.results.map(g => g.name);

        genreApi.map(e => Genre.findOrCreate({
            where: {name: e}
        }))
        const allGenre = await Genre.findAll()
        res.json(allGenre)
    }catch (e){
        next(e)
    }
});

module.exports = router;