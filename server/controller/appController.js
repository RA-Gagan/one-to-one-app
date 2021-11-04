

const db = require("../models/config")

const {Employees} = db;
console.log("employee "+Employees)



const emp =async(req,res)=>{
    try{
        const employees = await Employees.findAll({});
        return res.json({success:true, employees})

    console.log(employees)
    
  
}catch(e){
    console.log(e)
}

}



module.exports = {emp};