//This is where we basically make the mysql table using sequelize
//sequelize allows us to write sql very easliy 
//sequelize-cli helps 

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts",{
            first_Name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_Name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            Email:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            Phone_Number:{
                type: DataTypes.STRING,
                allowNull: false,
            },

    });
    
    return Posts;
};