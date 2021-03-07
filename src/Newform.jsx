import React, { useState } from 'react'

export default function Newform() {
    const[dat,setDat] = useState({
        town:'',
        city:'',
        postcode:'',
        country:'',
    })
    const fieldchange =(e) =>{
        const val = e.target.value;
        const name = e.target.name;
        setDat((prev) =>{
            if(name==="town"){
                return{
                    town:val
                }
            }else if(name==="city"){
                return{
                    city:val
                }
            }
            else if(name==="postcode"){
                return{
                    postcode:val
                }
            }else if(name==="country"){
                return{
                    country:val
                }
            }
        })
    }
    return (
        <div>
           <div className="mob__sec">
             <h4>town</h4>
             <input type="number" name="town" onChange={fieldchange}  value={dat.town} className="input__sec" type="text"/>
         </div>
         <div className="add__sec1">
             <h4>city</h4>
             <input className="input__sec" onChange={fieldchange}  value={dat.city} name="city" type="text"/>
         </div>
         <div className="mob__sec">
             <h4>post code</h4>
             <input className="input__sec" onChange={fieldchange}  value={dat.postcode} name="postcode"  type="text"/>
         </div>
         <div className="add__sec1">
             <h4>country</h4>
             <input className="input__sec" onChange={fieldchange}  value={dat.country} name="country" type="text"/>
         </div>
        </div>
    )
}
