import { useState,useEffect } from 'react';
import {Table} from 'react-bootstrap';

const axios = require('axios');

const Home = ()=>{

  const [emp ,setEmp] = useState([]);

  useEffect(()=>{table()},[])

 const table = async()=>{

try{

 const response = await axios("http://localhost:4000/employee");
 
 console.log( response.data.employees)
 setEmp(response.data.employees)

}catch(e){

console.log(e)
 };
} 

return(
    <div className="m-5">
<Table striped bordered hover >
  <thead>
    <tr>
      <th>Email Address</th>
      <th> Name</th>
      <th>TNL id</th>
      <th>Role</th>
      <th>Department</th>
      <th> Reporting Manager</th>
      <th>Created At</th>
      <th>Created By</th>
      
    </tr>
  </thead>

  <tbody>
    {emp.map(employee=>{

    const {email, name,tnl_id,role,department,reportingManagerEmail,createdAt,createdBy} = employee
 return (<tr>
  <td>{email}</td>
  <td>{name}</td>
  <td>{tnl_id}</td>
  <td>{role}</td>
  <td>{department}</td>
  <td>{reportingManagerEmail}</td>
  <td>{createdAt}</td>
  <td>{createdBy}</td>
 
  


 </tr>);
    })}
    
   
  </tbody>
</Table>

</div>
);

}
export default Home;