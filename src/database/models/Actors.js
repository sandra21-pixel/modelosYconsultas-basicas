module.exports=(sequelize,DataTypes)=>{
    const Actor = sequelize.define(
    'Actors',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        first_name:{
            type:DataTypes.STRING
        },
        last_name:{
            type:DataTypes.STRING
        },
        rating:{
            type:DataTypes.DECIMAL(3,1)
        },
        favorite_movie_id:{
            type:DataTypes.INTEGER
        }
},
{   
    tableName:"Actors",
    timestamps:false
})

return Actor
}