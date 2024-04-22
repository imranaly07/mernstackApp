import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Course from './Pages/Course'
import Login from './Components/Login'
import Signup from './Components/Signup'




function App() {


  return (
    <div>
      <Routes>

        <Route path='/'element={<Home/>}/>
        <Route path='/course'element={<Course/>}/>
         <Route path='/login'element={<Login/>}/> 
         <Route path='/signup'element={<Signup/>}/>


      </Routes>
    

    

   
    
   
    </div>
  )
}

export default App
