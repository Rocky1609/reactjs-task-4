import { useState,useEffect } from "react";
import Axios from "axios"
import './App.css';

function App(){
  const url ="https://dummyjson.com/users";
  const [arr,setArr] =useState([]);
  
  useEffect(()=>{
    Axios.get(url)
    .then((res)=>setArr(res.data.users))
    .catch((err)=>console.log(err))
  },[])

  return(
    <div className="dummy-data-container">
      <h1 className="dummy-data-heading">Dummy data</h1>
      <table cellSpacing={0} className="dummy-data-table">
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        {arr.map((user)=>
        <tr key={user.id}>
          <td>{user.id}</td>
          <td ><img src={user.image} alt={user.id} className="profile"/></td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.gender}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.domain}</td>
          <td>{user.ip}</td>
          <td>{user.university}</td>
        </tr>
        )}
      
    
      </table>
    </div>
  )
}



export default App