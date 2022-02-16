const db= require("../database/models")

const controller={
    list:(req,res)=>{
        db.Genres.findAll()
            .then(genre=>{
                res.render("genresList",{genres:genre})
            })
            .catch(error=>{
                res.send("tienes un error",error)
            })
    },
    detail:(req,res)=>{
        db.Genres.findByPk(req.params.id)
            .then(genre=>{
                res.render("genresDetail",{genre})
            })
            .catch(error=>{
                res.send("tienes un error",error)
            })
    }
}
module.exports=controller