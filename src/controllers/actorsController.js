const db=require("../database/models")

const controller={
    list:(req,res)=>{
        db.Actors.findAll()
            .then(actor=>{
                res.render("actorsList",{actors:actor})
            })
    },
    detail:(req,res)=>{
        db.Actors.findByPk(req.params.id)
            .then(actor=>{
                res.render("actorsDetail",{actors:actor})
            })
    }
}
module.exports=controller