const db= require('../database/models')
const {Op}= require("sequelize")
const controller ={
    list:(req,res)=>{
        db.Movies.findAll()
            .then(movie=>{
                res.render("moviesList",{movies:movie})
            })
            .catch(error=>{
                res.render("tiene un error: ", error)
            })
    },
    detail:(req,res)=>{
        db.Movies.findByPk(req.params.id)
            .then(movie=>{
                res.render("moviesDetail",{movie})
            })
            .catch(error=>{
                res.render("tiene un error: ", error)
            })
    },
    new:(req,res)=>{
        db.Movies.findAll({
            order:[
                ["release_date","DESC"]
            ]   
        })
        .then(movie=>{
            res.render('newestMovies',{movies:movie})
        })
        .catch(error=>{
            res.render("tiene un error: ", error)
        })
    },
    recomended:(req,res)=>{
        db.Movies.findAll({
            order:[
                ["rating","DESC"]
            ],
            where:{
                rating:{[Op.gte]:9},
                awards:{[Op.gt]:2}
            }
        })
        .then(movie=>{
            res.render('recommendedMovies',{movies:movie})
        })
        .catch(error=>{
            res.render("tiene un error: ", error)
        })
    }
}

module.exports = controller