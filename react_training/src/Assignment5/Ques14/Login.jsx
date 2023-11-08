import { useState } from "react";


const Login = () => {
  const username="somil123";
  const password="12345"
  


  const[uname,setUname]=useState("");
  const[pass,setsetPass]=useState("");
  const[isAuthentic,setIsAuthentic]=useState(false);
  
  const handleUnameChange=(e)=>setUname(e.target.value);
  const handlePassChange=(e)=>setsetPass(e.target.value);
  const handleClick=()=>{
    if(username===uname && password===pass){
      setIsAuthentic(true);}
   


  }

  




  
  return (

   <>
   <input type="text" placeholder="username" onChange={handleUnameChange} />
   <input type="text" placeholder="placeholder" onChange={handlePassChange} />
   <button onClick={handleClick} >Login</button>
   {isAuthentic?<}
   </>
  );
}

export default Login;
