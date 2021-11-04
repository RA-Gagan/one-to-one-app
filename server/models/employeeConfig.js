

module.exports = (Sequelize, DataTypes) => {
    const Employees = Sequelize.define('employee', {
        email: {
            type: DataTypes.STRING,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tnlId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        reportingManagerEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
   
    
    {
        freezeTableName: true,
        timestamps: true,
        updatedAt: false,
       
        underscored: true,
        modelName:'Employees',
        tableName: 'employee',
        schema: 'public'
    });

    return Employees;
}