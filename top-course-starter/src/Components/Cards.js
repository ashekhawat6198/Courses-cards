import React, { useEffect, useState } from 'react'
import Card from './Card';
 function Cards(props) {
  let courses=props.course;
  let category=props.category;
  const [likedCourses,setLikedCourses]=useState([]);

  function getCourses(){
    if(category==="All"){
      let allCourses=[];
      Object.values(courses).forEach(function(array){
        array.forEach(function(data){
          allCourses.push(data);
        })
      })
      return allCourses;
    }
    else{
      // main sirf specific categroy ka data pass karunga 
      return courses[category];
    }
    
          
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
       
       {
        getCourses().map(function(courses){
          return <Card key={courses.id} course={courses} likedCourse={likedCourses} setLikedCourse={setLikedCourses}></Card>
        })
       }


    </div>
  );
}

export default Cards;
