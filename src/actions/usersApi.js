export const getUsers =(setUsers,setIsLoading)=>{
    fetch("https://637a596610a6f23f7f923c1f.mockapi.io/people").then(
      (response)=>response.json()).then(
        (data)=>{setUsers(data);}
      )
      .catch(()=>{
        console.log("Error");
      })
      .finally(()=>{
        setIsLoading(false);
      })
}