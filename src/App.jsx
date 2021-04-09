// import React from 'react';
// import Heading from './Heading';
// import Para from './Para'
// import List from './List';

import { createContext } from "react";

// function App() {

//     return (
//         <>
//             <Heading />
//             <Para />
//             <List />
//             <Para />
//         </>
//     );
// }

// export default App;


// ****************************************************************************************** 
// import React from 'react';

// function App() {
//     let curDate = new Date();
//     curDate = curDate.getHours();
//     let greeting = '';
//     const cssStyle = {};

//     if (curDate >= 1 && curDate < 12) {
//         greeting = 'Good Morning';
//         cssStyle.color = "Green";
//     }
//     else if (curDate >= 12 && curDate < 19) {
//         greeting = "Good Afternoon";
//         cssStyle.color = "orange";
//     }
//     else {
//         greeting = "Good Night";
//         cssStyle.color = "Violet";
//     }


//     return (
//         <>
//         <div>
//             <h1>Hello Sir, <span style={cssStyle} > {greeting}  </span> </h1>



//         </div>
//         </>
//     )
// }

// export default App;

// ***************************************************************************************************** 

// const youtuber = 'thapa technical';
// const favprog = 'React js';

// function myName() {
//     return (nam = 'Aniket');
// }
// function myNames() {
//     return (nam  = "Anikets");
// }









// export default youtuber;
// export { favprog, myName, myNames };




// import React from 'react';
// import { add, sub, mult, div } from './Calculator';
// function App(){
//     return(
//         <>
//         <ul>
//             <li> {add(40, 4)}</li>
//             <li> {sub(40, 4)}</li>
//             <li> {mult(40, 4)}</li>
//             <li> {div(40, 3)}</li>


//         </ul>


//     </>
//     );
// }

// export default App;

// ******************************************************************************************************** 
//  ract Hooks

// import React, { useState } from 'react';



// const App = () => {

//     const state = useState();
//     // console.log(state);



//     const [count, setCount] = useState(50);





// const name =['vi', 'no', 'd'];
// const [name1, name2, name3] = name;
// name[0];
// name1;



//     const IncNum = () => {
//         setCount(100);

//         console.log('clicked ' + count++);
//     }
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum} >Click</button>

//         </>

//     )

// };

// export default App;

// ********************************************************************************************* 
// React Hooks project 

// import React, { useState } from 'react';

// const App = () => {
//     let newTime = new Date().toLocaleTimeString();
//     const [ctime, setCtime] = useState(newTime);

//     const UpdateTime = () => {
//     let newCTime = new Date().toLocaleTimeString();
//     setCtime(newCTime);
//     }
//     return (
//         <>
//             <h1> {ctime} </h1>
//             <button onClick={UpdateTime} > Get Time </button>
//         </>
//     );
// }


// export default App;

// ************************************************************************************************** 
// Digital Clock @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { useState } from 'react';

// const App = () => {
//     let time = new Date().toLocaleTimeString();

//     const [ctime, setCtime] = useState(time);

//     const UpdateTime = () => {
//         time = new Date().toLocaleTimeString();
//         setCtime(time);
//     }
//     setInterval(UpdateTime, 1000)
//     return (
//         <>
//             <h1>{ctime}</h1>
//         </>
//     );

// }
// export default App;

// ********************************************************************************************************* 
// Events handling in react @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { useState } from 'react';

// const App = () => {
//     const purple = '#8e44ad';
//     const [bg, setBg] = useState(purple);
//     const [name, setName] = useState('Click Me ');


//     const bgChange = () => {
//         // console.log('clicked');
//         let newBg = '#34495e';
//         setBg(newBg);
//         setName('OOuch!');
//     };
// const bgBack= ()=>{
//     setBg(purple);
//     setName('Ayyooo!');
// };


//     return (
//         <>
//             <div style={{ backgroundColor: bg }}>
//                 <button onMouseEnter={bgChange} onMouseLeave= {bgBack}   > {name} </button>
//             </div>
//         </>
//     );
// }
// export default App;


// ********************************************************** 
// React Form 


// import React from 'react';

// const App=()=> {

//     const inputEvent=()=> {
//         console.log('clicked');
//     }
// return(
// <>
//  <div>
// <h1> Hello </h1>
// <input  type='text' placeholder="Enter Your Name" 
//     onChange={inputEvent}
// />
// <button> Click Me</button>


//  </div>


// </>
// )
// }

// export default App;

// *********************************************************************************************************  
// To Do List in React @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { useState } from 'react';
// import ToDoList from './ToDoList';

// const App = () => {

//     const [inputList, setInputList] = useState("");
//     const [Items, setItems] = useState([]);

//     const itemEvent = (event) => {
//         setInputList(event.target.value);
//     };

//     const listOfItems = () => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList];
//         });
//         setInputList("");
//     };
//     const deleteItems=(id)=> {
//         console.log('deleted'); 


//     setItems((oldItems)=>{
//         return oldItems.filter((arrElem, index)=>{
//          return index !== id;
//         })
//     })
// };

//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <br />
//                     <h1>ToDo List</h1>
//                     <br />
//                     <input type="text" placeholder="Add a item"
//                         value={inputList}
//                         onChange={itemEvent} />
//                     <button onClick={listOfItems} >  +  </button>




//                     <ol>
//                         {/* <li>{inputList} </li>  */}

//                         {Items.map((itemval, index) => {
//                            return <ToDoList 
//                             key= {index}
//                             id={index}
//                             text= {itemval} 
//                             onSelect = {deleteItems}

//                             />;
//                         })}

//                     </ol>
//                 </div>
//             </div>



//         </>
//     )
// };

// export default App;


// ************************************************************************************************************** 
// Increment And Decrement project 



// *************************************************************************************** 
// Matarial ui icon   

// *********************************************************************************** 
// NPM  


// ******************************************************************************************** 
// project in 1 min 


// import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () =>{
//     return  <React.Fragment> 
//     <h1 className='text-center text-danger text-capitalize my-5'>Welcome To My Channel</h1>
//     <div className="container">
//   <div className="row">
//     <div className="col-sm">
//      <div class="card" >
//   <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap"
//   height="200px"
//    />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col-sm">
//       <div class="card" >
//   <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap"
//   height="200px"
//     />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col-sm">
//       <div class="card" >
//   <img class="card-img-top" src="https://picsum.photos/201/300" alt="Card image cap"  
// height="200px"

//   />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   </div>
// </div>

//     </React.Fragment>;
// }

// export default App;

// ******************************************************************************************************* 

// Google Keep App Clone  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import CreateNote from './CreateNote';
// import Note from './Note';



// const App = () => {

//     return (
//         <>
//             <Header />
//             <CreateNote />
//             <Note />
//             <Footer />

//         </>


//     )
// };

// export default App;
//  *********************************************************************** 
// Context API  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

//  createContext()


//  provider 


//  consumer 


// ******************************************************************************************************* 
//      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
//      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
//      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
//     A Fully Responsive Website Using React @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import { Route, Switch, Redirect } from "react-router";
import Footer from './Footer';


const App = () => {

    return (
   <>
   <Navbar />
   <Switch>
   <Route exact path='/'  component={Home}  />
   <Route exact path='/about'  component={About}  />
   <Route exact path='/service'  component={Service}  />
   <Route exact path='/contact'  component={Contact}  />
   <Redirect to='/' />
   
   </Switch>
   <Footer />

   </>

    );
};

export default App;























