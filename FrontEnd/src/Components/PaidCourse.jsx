import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function PaidCourse() {
  const [courseData,SetcourseData]=useState([])

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
    {courseData.filter((value)=>value.category=="paid").map((item,idx)=> {
      return <Card item={item} key={idx}/>
    })}
    </div>
  );
}

export default PaidCourse;
