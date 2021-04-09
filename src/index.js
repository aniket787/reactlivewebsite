// import React from 'react';
// import ReactDOM from 'react-dom';


// const arr = ['vinod', 'aniket', 'gaikwad'];

// ReactDOM.render(        // Render takes onlt one single element
// <>
//   <h1> Aniket Gaikwad. </h1>
//   <p> Like and share to all yr friends </p>
//   <h2> Plz Suscribe my channel </h2>
// </>,
//    document.getElementById('root'));



// ReactDOM.render( /*#__PURE__*/React.createElement("h1", null,
//  " Aniket Gaikwad. "), 
// document.getElementById('root'));



// var h1 = document.createElement('h1');
// h1.innerHTML  = "Aniket";
// document.getElementById("root").appendChild(h1);


// ****************************************************************************** 

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <>
//     <h1> Thapa Technical Netfix pick </h1>
//     <p> Here are the list of my fav 5 netflix series </p>
//     <ol>
//       <li> Dark </li>
//       <li> Extra ccurricular </li>
//       <li> Amazon Prime </li>
//       <li> Mr Robot </li>
//     </ol>
//   </>
//   , document.getElementById('root')


// );


// ****************************************************************** 
// import React from "react";
// import ReactDOM from "react-dom";

// const flname = 'Aniket Gaikwad';

// ReactDOM.render(
// <>
// <h1> My name is {flname} </h1>
// <p> My lucky number is {2+3} </p>
// <p> My lucky number is {Math.random()} </p>

// </>
//   ,document.getElementById('root')
// );

// ******************************************************************* Templet literals


// import React from "react";
// import ReactDOM from "react-dom";

// const fname = 'Aniket';
// const lname = 'Gaikwad';

// ReactDOM.render(
//   <>
//     <h1> 
//     My name is {fname + " "+ lname} 
//     </h1>
//     <p> My lucky number is {2 + 3} </p>
//     <p> My lucky number is {Math.random()} </p>

//   </>
//   , document.getElementById('root')
// );



// ************************************************************************************ 
// current date and time 


// import React from "react";
// import ReactDOM from "react-dom";

// const name = "Aniket";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();


// ReactDOM.render(
//   <>
//     <h1>Hello , My name is {name} </h1>
//     <p>Current Date is = {currDate}    </p>
//     <p>Current Time is = {currTime} </p>
//   </>
//   , document.getElementById('root')

// );





// *************************************************************************** 
// Attributes VS JSX 

// import React from "react";
// import ReactDOM from "react-dom";

// const name = 'Aniket';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = "https://www.thapatechnical.com";


// ReactDOM.render(
//   <>
//     <h1 contentEditable="true"> My name is {name} </h1>
//     <img src={img1} alt="randomImages" />
//     <img src={img2} alt="randomImages" />
//     <a href={links} target="-thapa">
//       <img src={img3} alt="randomImages" />
//     </a>
//   </>
//   , document.getElementById('root')
// );


// ******************************************************************************** 
// CSS Styling and importing css files in javascript 


// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// const name = 'Aniket';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = "https://www.thapatechnical.com";


// ReactDOM.render(
//   <>
//     <h1 className="heading" > My name is {name} </h1>
//     <div className ="img_div" >
//     <img src={img1} alt="randomImages" />
//     <img src={img2} alt="randomImages" />
//     <a href={links} target="-thapa">
//       <img src={img3} alt="randomImages" />
//     </a>
//     </div>
//   </>
//   , document.getElementById('root')
// );


// ************************************************************* 
// 

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// const name = 'Aniket';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = "https://www.thapatechnical.com";

// // .heading{
// //   color: #fa9191;
// //   text-align: center;
// //   text-transform: capitalize;
//   // font-weight: bold;
//   // text-shadow: 0px 2px 4px #ffe9c5;
//   // margin: 70px 0;
//   // font-family: 'Josefin Sans', sans-serif;
// // }

// const heading = {
//   color: "#fa9191",
//   textTransform: "capitalize",
//   textAlign : "center",
//   fontWeight: "bold",
//   textShadow: "0px 2px 4px #ffe9c5",
//   margin: "70px 0",
//   fontFamily: '"Josefin Sans" , sans-serif',
// };


// ReactDOM.render(
//   <>
//     <h1 style={heading} > My name is {name} </h1>
//     <div className="img_div" >
//       <img src={img1} alt="randomImages" />
//       <img src={img2} alt="randomImages" />
//       <a href={links} target="-thapa">
//         <img src={img3} alt="randomImages" />
//       </a>
//     </div>
//   </>
//   , document.getElementById('root')
// );



// ************************************************************************************************** 
// # project 1 -- Greeting website 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';



// ReactDOM.render(
//   <App />

//   , document.getElementById('root')
// );

// ****************************************************** 
// Components in reactjs 


//   ********************************************************* 
// ES6 modules 

// import React from 'react';
// import ReactDOM from 'react-dom';

// import youtuber, { favprog } from  './App';

// ReactDOM.render(
// <>
// <ol>
//   <li>Aniket</li>
//   <li>{youtuber}</li>
//   <li>{  favprog, myName, myNames }</li>


// </ol>


// </>
// , document.getElementById('root')
// );


// ******************************************************************************************* 
// Calculator in React 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'

// ReactDOM.render(
//     <App />
//     , document.getElementById('root')
// );




// ***************************************************************************************************** 
// Netflix App Project 

// import React from 'react';
// import ReactDOM from 'react-dom';

// function Card(props) {
//     console.log(props);
//     return (
//         <>
//             <div className="cards">
//                 <div className="card">
//                     <img src={props.imgsrc} alt="myPic"
//                         className="card__img" />
//                     <div className="card__info">
//                         <span className="card_category">
//                             {props.title}
//                         </span>
//                         <h3 className="card__title"> {props.sname} </h3>
//                         <a href={props.link}
//                             target="_blank">
//                             <button> Watch Now </button>
//                         </a>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// ReactDOM.render(
//     <>
//         <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
//             title="A Netflix Original Series"
//             sname='DARK'
//             link="https://www.netflix.com/in/title/80990668?source=35" />

//         <Card 
//             imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
//             title="A Netflix Original Series"
//             sname='DARK'
//             link="https://www.netflix.com/in/title/80990668?source=35" />

//         <Card 
//             imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
//             title="A Netflix Original Series"
//             sname='DARK'
//             link="https://www.netflix.com/in/title/80990668?source=35" />

//     </>
//     , document.getElementById('root')
// ); 

// ********************************************************************************************************** 
// React Hooks 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App from './App'




// ReactDOM.render(

// <App />

//     , document.getElementById('root')
// )
// ***************************************************************************************************** 
// Event handling in React @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App from './App'




// ReactDOM.render(

// <App />

//     , document.getElementById('root')
// )


// ******************************************************************************
// React Forms



// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App from './App'




// ReactDOM.render(

// <App />

//     , document.getElementById('root')
// )

// *************************************************************************************************** 
// To Do List @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App from './App'
// // import Demo from "./Demo";




// ReactDOM.render(

// <App />

//     , document.getElementById('root')
// )


// ***************************************************************************** 
//  1  Increment And Decrement project 
//   2   Project in 1 min 


// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App from './App'






// ReactDOM.render(

// <App />

//     , document.getElementById('root')
// )

// ************************************************************************************************** 
// Google Keep App Clone 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from 'react-router-dom'



// ReactDOM.render(
//     <>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </>
//     , document.getElementById('root')
// )


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Complete Responsive website @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
    , document.getElementById('root')
)