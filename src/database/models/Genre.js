module.exports=(sequelize,DataTypes)=>{
    const Genre = sequelize.define(
    'Genres',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true  
        },
        name:{
            type:DataTypes.STRING
        },
        ranking:{
            type:DataTypes.INTEGER
        }
},
{   
    tableName:"Genres",
    timestamps:false
})

return Genre
}