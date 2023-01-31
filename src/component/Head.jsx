import React, { useEffect } from 'react'
import { useState } from 'react';
import Component2 from './component2';
import Component3 from './component3';
import Component4 from './component4';
import "./css.css";
import Main from './main';

const Head = () => {

    const [ selectItem , setSelectItem ] = useState("");
    console.log(selectItem);

    const [ visible , setVisible ] = useState(false)

    useEffect(()=>{
        selectItem? setVisible(true): setVisible(false);
    },[selectItem])
  return (
    <div>
        <h1 style={{color:"white", marginLeft:"30px"}}>Choira</h1>
    <div className='friday'>
        <h1 style={{ color:"white" , textAlign:"center"}}>Friday Night Jam </h1>
        <select className="dropdown" onChange={(e)=>setSelectItem(e.target.value)}>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
        </select>
        <button className='dropdown' style={{marginLeft:"40px"}}>Invite</button>
        <span className="ved"><i class="fa-sharp fa-solid fa-video"></i></span>
        <span className="three"><i class="fa-solid fa-bars"></i></span>
    </div>
    
    {visible ?<div>
    { 
    selectItem === "one" ? <div><Main/></div> :
    selectItem === "two" ? <div><Component2/></div> :
    selectItem === "three" ? <div><Component3/></div>:
    <div><Component4/></div>
    }</div> : <Component4/> }
    </div>
  )
}

export default Head