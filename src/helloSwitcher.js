import React, {useState,useEffect} from 'react';
import {animated, useTransition,config} from 'react-spring';
import './helloSwitcher.css'



const items = ['DEV', 'GUYS','WORLD'];

function Switcher()
{
    const [index,setIndex]=useState(0);

    const transition=useTransition(items[index],p=>p,{
        from: { opacity: 0 ,height:0},
        enter: { opacity: 1, height:80},
        leave: {opacity:0,height:0},
        config: { mass: 10, tension: 2000, friction: 200 },
    })
    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 3), 4000), [])
    return transition.map(({item, props, key})=>(
<animated.div key={key} style={{...props}} className='user'>HELLO {item}</animated.div>
   
    ))
        
}

export default Switcher

