import React from 'react';

const Err = (props) => {
  return (
    <div><h1>{props.errmsg}</h1></div>
  );
}
const seasonConfig = {
    summer:{
        text: 'Lets hit the beach',
        icon: 'far fa-sun'
    },
    winter:{
        text: 'burr,it is chilly',
        icon: 'far fa-snowflake'
    }
    

}
const getSeason = ( lat, month) => {
  
    if (month < 3 || month > 10) {
        return lat > 0 ? 'winter' :'summer';
    }
    else{
        return lat > 0 ? 'summer' : 'winter';
    }
}

const Season = (props) => {
  const Display = getSeason(props.latitude, new Date().getMonth() + 1);
  
  const { text, icon } = seasonConfig[Display];

//   const text = season === 'winter' ? 'burr,it is chilly' : 'Lets hit the beach';
//   const icon = season === 'winter' ? 'snowflake' : 'sun';
    return(
        <div className="ui container" >
            <i className= {`icon-left ${icon} icon`}/> 
        <h1>{text} <br/> your latitude is {props.latitude}</h1>
            <i className= {`icon-right ${icon} icon`}/>
        </div>
    )
    
    
}

export default Season;
export {Err};













// import React from 'react';


// const seasonConfig = {
//   summer: {
//     text: "Lets Hit the beach",
//     icon: "far fa-sun"
//   },
//   winter: {
//     text: "its Chilly",
//     icon: "far fa-snowflake"
//   }
// }
// const getSeason = (lat,month) => {
//   if (lat > 0) {
//     console.log(lat)
//     return (month < 3 || month > 10) ? "Winter" : "Summer";
//   }
//   if (lat < 0) {
//     return (month < 3 || month > 10) ? "Summer": "Winter";
//   }
// }
// const Season = (props) => {
//   console.log(props.latitude)
//   const Display = getSeason(props.latitude, new Date().getMonth() + 1);
//   const text =
//     Display === "winter" ? "Its Chilling" : "Lets Hit the beach";

//   return (
//     <div>
//       <i className='far fa-sun'></i>
//       <h1>{text}</h1>
//         </div>
//   );
// }
// export default Season;