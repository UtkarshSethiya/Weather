import React from 'react';

import './temperature.css';

function Temperature(props){


//for transferri      
let x=props.City;
console.log(x);
 props.app_to_temp(x);

//for transferring and reciving 
return(

<div className='temperature_box'> 
        <div className='temperature'>{Math.round(props.City)}&#8451;</div>
        
</div>


);

}
//
//
export default Temperature;