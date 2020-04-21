import React from 'react';
import './tab.css';
function Tab(props){

return (

    <div className='mywork'style={props.display}>
    <div className='mywork-main' ><div className='label'><h2>{props.name}</h2></div></div>
    </div>

)
}

export default Tab;