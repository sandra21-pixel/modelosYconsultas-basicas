module.exports=(sequelize,DataTypes)=>{
    const Movie = sequelize.define(
    'Movies',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true  
        },
        title:{
            type:DataTypes.STRING
        },
        rating:{
            type:DataTypes.DECIMAL(3,1)
        },
        awards:{
            type:DataTypes.INTEGER
        },
        length:{
            type:DataTypes.INTEGER
        },
        release_date:{
            type:DataTypes.DATE
        },
        genre_id:{
            type:DataTypes.INTEGER
        }
},
{   
    tableName:"Movies",
    timestamps:false
})

return Movie
}