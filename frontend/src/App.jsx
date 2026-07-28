import { useState,useEffect } from "react";



function App(){
  const[message,Setmessage] = useState("");

  useEffect(()=>{

    fetch(" http://127.0.0.1:8000/")
    .then(response=> response.json())
    .then(data => Setmessage(data.data))
    .catch((error)=>{console.error("Error:",error);

    });
    
  },[]);


  return (
  <>
  <h1>message from backend</h1>
  <p>{message || "loading...."}</p>
  
  </>
  )
}

export default App;
