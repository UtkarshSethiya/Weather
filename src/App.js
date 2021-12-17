import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Temperature from './component/temperature';


function App() {

const date= new Date().toLocaleString();

  const[city,setcity]=useState("Nashikh");
const[search,setsearch]=useState();
const[getdata,takedata]=useState();


useEffect(()=>{fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=abcd07b09fd5e0d4f4d0718791e1d1a4`)
.then(response=>{
  return response.json();
}
).then(
data=>{
  console.log(data);
  setcity(data);
 
}
) 
},[search]);


//for transferring and reciving 
const  tempdata=(temp2data)=>{
  console.log(temp2data);
  takedata(temp2data);
  
}

/*if(getdata>18){
  document.getElementById("x").className="Sunny";
}
if(getdata<18){
  document.getElementById("x").className="App";
}

if(search==""){
  document.getElementById("x").className="blank";

}*/


  return (
    <div id="x" className="App ">

     <div className='box'>
       <div className='searchbox'>

    
    <input type="text"  placeholder='Search By City'   onChange={(event)=>{setsearch(event.target.value)}}   className='inputsearch'>
      
      </input>
      </div>
      
      {
        !city.name ? (
<p  >No City Found <p id='u'>
  By Utkarsh Sethiya</p></p>
        ):(
     <div>
       <div className='infobox'>
          <div className='name'>{city.name}</div>
           <div className='date'>{date} </div>
           
        </div>
        <Temperature app_to_temp={tempdata}    City={city.main.temp}  />
     
        <h1> <img height="120px" width="120px" src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}></img>{city.weather[0].description} </h1>
        <h1>Min-{city.main.temp_min}&#8451;     Max-{city.main.temp_max}&#8451;</h1>
     </div>     
        )
      }
   
    </div> 
          
    </div>     
        
    
    )
}


export default App;
