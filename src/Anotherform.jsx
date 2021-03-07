import React, { useState } from 'react'
import "./Anotherform.css"
import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
function Anotherform() {
    const[select,setSelected] = useState(null)
    const[time,setTime] = useState(null)
    const[com,setCom] = useState('')
    
    return (
        <div className="another__sec">
             <div className="mob__sec">
             <h4>customer type</h4>
             <select className="select__sec1">
                 <option value="">new </option>
                 <option value="">old</option>
             </select>
         </div>
         <div className="add__sec1">
             <h4>source lead</h4>
             <select className="select__sec2">
                 <option value="">facebook </option>
                 <option value="">instagram </option>
                 <option value="">tweeter </option>
                 <option value="">linkedin </option>
             </select>
         </div>
         <div className="mob__sec">
             <h4>date picker</h4>
             <DatePicker className="input__sec" selected={select} onChange={date => setSelected(date)}/>
               </div>
         <div className="add__sec1">
             <h4>time picker</h4>
             <TimePicker
        onChange={time => setTime(time)}
        value={time}
      />          </div>
         <div className="big__form">
             <h4>comments</h4>
             <input className="comment__form" value={com} onChange={text =>{setCom(text.target.value)}} type="text"/>
         </div>
         <div className="button">
             <button className="button__sub">submit</button>
         </div>
        </div>
    )
}

export default Anotherform
