import React from 'react';
import profile from './asset/profile.jpg'
import './about.css'


function About(){

    return(
        <div className='about'>
        <div>
               <div> <img src={profile} /></div>
               <div className='writeup'>
                   <p>My Name is Ogundipe Oluwashola, I have a strong interest for technology, I have about 7 years experience in 
                       IT industry with three years experience in web development. I am proficient in MEAN and MERN Stack and currently working on 
                       my interest in Python and machine Learning.
                   </p>
               </div>


        </div>

        </div>


    )
}

export default About;