import React from 'react'
import { getUsers } from '../../actions/usersApi';

function Users() {
   
   const[users,setUsers]=React.useState([]);
   const[isLoading,setIsLoading]=React.useState(false);
  

  React.useEffect(()=>{
    setIsLoading(true);
    getUsers(setUsers,setIsLoading);
  },[])

  return (
    <div>
      {isLoading ? (<h1>Loading</h1>) : (users.map(({name,id})=>(
        <h1 key={id}>
          {id}-{name}
        </h1>
      ))) }
      
    </div>
  )
}

export default Users