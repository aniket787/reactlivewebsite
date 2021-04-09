import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import Common from './Common';


const Home = () => {

    return (
   <>
   <Common  name='Grow Your Bussiness With '
     imgsrc={web} 
     btname="Get Started" 
     visit='/service'
      />
   </>

    );
};

export default Home;
