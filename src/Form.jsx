import React, { useState } from 'react'
import Anotherform from './Anotherform'
import "./Form.css"
import Newform from './Newform'
function Form() {
    const[data,setData] = useState({
        fname:'',
        mobile:'',
        add1:'',
        add2:'',
        add3:'',

    })
    
    const inputchange =(e) =>{
       const value = e.target.value;
       const name = e.target.name
       setData((prev) =>{

           if(name==="fname"){
               return{
                   fname:value
               }
    
           }else if(name==="mobile"){
               return{
                   mobile:value
               }
           }else if(name==="add1"){
            return{
                add1:value
            }
           }else if(name==="add2"){
            return{
                add2:value
            }}else if(name==="add3"){
                return{
                    add3:value
                }}
       })
    }
    return (
        <div className="main__section">
         <div className="scroll__bar">

             <h4 className="name">Profile</h4>
            <select className="something">
                <option value="mr">mr</option>
                <option value="mrs">mrs</option>
                <option value="ms">ms</option>
            </select>
         </div>
         <div className="name__sec">
             <h4>full name</h4>
             <input className="input__sec" name="fname" onChange={inputchange} value={data.fname} type="text"/>
             </div>
         <div className="mob__sec">
             <h4>mobile number</h4>
             <input type="number" className="input__sec" name="mobile" onChange={inputchange} value={data.mobile} type="text"/>
             
       
         </div>
         <div className="add__sec1">
             <h4>address 1</h4>
             <input  value={data.add1} className="input__sec" name="add1" onChange={inputchange} type="text"/>
         </div>
         <div className="mob__sec">
             <h4>address 2</h4>
             <input className="input__sec" value={data.add2}  name="add2" onChange={inputchange} type="text"/>
         </div>
         <div className="add__sec1">
             <h4>address 3</h4>
             <input className="input__sec" value={data.add3}  name="add3" onChange={inputchange} type="text"/>
         </div>
         <div className="new__section">
             <Newform/>
         </div>
         <div className="another__section">
             <Anotherform/>
         </div>
          
        </div>
    )
}

export default Form
