import { useState,useEffect } from "react";



function App(){
  const[product,Setproduct] = useState("abhishek");

  useEffect(()=>{

    fetch("http://127.0.0.1:8000/api/product/")
    .then(response=> response.json())
    .then(data => Setproduct(data))
    .catch((error)=>{console.error("Error:",error);

    });
    
  },[]);


  return (
  <>
<h1>product list</h1>
<p>{product}</p>
  
  </>
  )
}

export default App;
