import Card from './Card';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function FreeCourse() {
  const [courseData,SetcourseData] = useState([]);

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4001/data');
        SetcourseData(res.data); 
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

    





  return (
    <div className="mt-5 px-3 grid sm:grid-cols-3 grid-cols-1 gap-1">
         

         {courseData.filter((value) => {
      return value.category === "free";
    }).map((item, idx) => {
      return <Card item={item} key={idx} />;
    })}
      
    </div>
  );
}

export default FreeCourse;
