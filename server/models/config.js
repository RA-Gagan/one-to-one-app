
const {Sequelize }= require("sequelize")

const PG_URL = "postgres://kdsshosy:dXax1tXGORGNq3nuZ5PF5t4dgIGcuhrD@fanny.db.elephantsql.com/kdsshosy"

const sequelize =  new  Sequelize(PG_URL)


const db ={};

db.Sequelize =Sequelize;
db.sequelize = sequelize ;

db.Employees =require("./employeeConfig.js")(sequelize,Sequelize);
module.exports = db;


// const {pool,Client } =require ("pg")
// const connectionString  = "postgres://postgres:tiger@localhost:5432/Meeting app"

// const client  =new Client({

//     connectionString:connectionString
// })

// client.connect()

// client.query('select* from Employees',(req,res)=>{
//     console.log(req,res)
//     client.end();
// })