module.exports = (Sequelize, DataTypes) => {
    const Meeting = Sequelize.define('meetings',{
        meetingId : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            required : true,
        },
        createdAt:{
            type : DataTypes.TIME,
        },
        createdBy:{
            type : DataTypes.STRING,
        },
        scheduledAt:{
            type : DataTypes.TIME,
        },
        scheduledBy:{
            type : DataTypes.STRING,
        },
        scheduledWith :{
            type : DataTypes.STRING,
        },
        link:{
            type : DataTypes.STRING,
            isUrl : true,
        }
        },{
        freezeTableName : true,
        underscored : true,
        timestamps : true,
        updatedAt : false,
        tableName : 'meetings',
    })
    return Meeting;
};