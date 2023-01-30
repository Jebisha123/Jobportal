import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Lnew.css'
// import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns'
import Multiselect from 'multiselect-react-dropdown';
import Header from './Header';
function Profile()

{
    let [data,setData] = useState({})
    let [skillsdata, setSkill] = useState([]);
   
    const handlechange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    async function sendData()
    {
        let res = await axios.post("/candidateprofile",data)
        console.log(res.data)
        
        
    }
    useEffect(() => {
        const fetchSkill = async () => {
            let skillsdata = await axios.get("/skilltable");
            console.log(skillsdata.data);
            setSkill(skillsdata.data)

    
        }
        
        fetchSkill()
    }, [])
   
    return(
        <div>
            
         <div className='alljobhead'>
            
        <Header></Header></div>
        <div className='candidatealign'><label className='labels'>firstname:<span></span><input type="text" placeholder='firstname' name='firstname' onChange={handlechange}  /></label><br></br><br></br>
        <label>lastname:<span>   </span><input type="text" placeholder='lastname' name='lastname' onChange={handlechange}  /></label><br></br><br></br>
        <label>email:<span>   </span><input type="text" placeholder='email' name='email' onChange={handlechange}  /></label><br></br><br></br>
        <label>contact:<span>   </span><input type="text" placeholder='contact' name='contact' onChange={handlechange}  /></label><br></br><br></br>
        <label>address:<span>   </span><input type="text" placeholder='address' name='address' onChange={handlechange}  /></label><br></br><br></br>
        <label>about:<span>   </span><input type="text" placeholder='about' name='about' onChange={handlechange}  /></label><br></br><br></br>
        <label>profilepic:<span>   </span><input type="text" placeholder='profilepic' name='profilepic' onChange={handlechange}  /></label><br></br><br></br>
        <label>currentcompany:<span>   </span><input type="text" placeholder='currentcompany' name='currentcompany' onChange={handlechange}  /></label><br></br><br></br>
        <label>ctc:<span>   </span><input type="text" placeholder='ctc' name='ctc' onChange={handlechange}  /></label><br></br><br></br>
        <label>experience:<span>   </span><input type="text" placeholder='experience' name='experience' onChange={handlechange}  /></label><br></br><br></br>
        <label>currentrole:<span>   </span><input type="text" placeholder='currentrole' name='currentrole' onChange={handlechange}  /></label><br></br><br></br>
 
    
       
 <label>skill:<span>  </span></label><select name='skill'>
 {skillsdata.length && skillsdata.map ((ele)=>{return(<option>{ele.skillname}</option>)})}</select><input type="text" placeholder='skills' name='skills' onChange={handlechange} />
 <br></br><br></br>
        {/* <label>skills:<span>   </span><input type="ntext" placeholder='skills' name='skills' onChange={handlechange} /></label><br></br><br></br> */}
        <label>resumelink:<span>   </span><input type="text" placeholder='resumelink' name='resumelink' onChange={handlechange} /></label><br></br><br></br>
        <label>expectedsalary:<span>   </span><input type="text" placeholder='expectedsalary' name='expectedsalary' onChange={handlechange} /></label><br></br><br></br>
        <label>preferredlocation:<span>   </span><input type="text" placeholder='preferredlocation' name='preferredlocation' onChange={handlechange} /></label><br></br><br></br>
            <input type="submit" onClick={sendData} /></div>
       
        </div>

    )
}
export default Profile;