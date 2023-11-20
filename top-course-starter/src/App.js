import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Card from "./Components/Card";
import Cards from "./Components/Cards";
import { apiUrl,filterData } from "./data";
import Spinner  from "./Components/Spinner";
import { toast } from "react-toastify";

function App() {
  const [courses,setCourses]=useState([]); 
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  async function catchData(){
    setLoading(true);
    try{
      let res=await fetch(apiUrl);
      let output=await res.json();
        setCourses(output.data);
    }
    catch(e){
      toast.error("Network mai dikkat hai");
    }
    setLoading(false);
  }

  useEffect(function(){
    catchData();
  },[])

  return(
     <div className="min-h-screen flex flex-col bg-bgDark2 ">
     <div>
     <Navbar></Navbar>
     </div>
      

      <div >
      <div>
      <Filter filterData={filterData} category={category}
      setCategory={setCategory}></Filter>
      </div>
      
       
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center  flex-wrap min-h-[50vh]">
        {
          loading ? (<Spinner></Spinner>) : (<Cards course={courses} category={category}></Cards>) 
        }
      </div>

      </div>
     



     </div> 


  );
 
  
};

export default App;
