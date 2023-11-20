import React, { createContext, useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const mycontext=createContext();

function CreateContextApp({children}){
    const navigate=useNavigate()
    const [selectedItem, setSelectedItem] = useState('dashboard'); // Default selected item
    const [visible, setvisible]=useState(false)
    const [reportpopup, setreportpopup]=useState(false)
    const [leaverequest, setleaverequest] = useState(false)
    // for login
    const [formData, setFormData] = useState({  email: '', password: '' });
    const [Error, seterror]=useState({email:false,password:false})
    // store user data
    const [data, setdata] = useState([])

   
    // store user data- close


    // login user
    const loginuser=async(formdata)=>{
        console.log(formData)
        try{
            const res = await axios.post('http://localhost:3000/student/login',formdata)
            console.log(res.data)
        }
        catch(err){
            console.log('err',err)
        }
       }
    // close login user

    

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        seterror({ ...Error, [name]: false });
      };

      const handleform=(e)=>{
         e.preventDefault()
         
         loginuser(formData)
         
      }
    // close login

    const handleSidebarItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

   
    const handleusedetailpopup=()=>{
        setvisible(true)
        setleaverequest(true)
    }

    const handleremovepopup=()=>{
        setvisible(false)
        setleaverequest(false)
    }
    const handlereportpopup=()=>{
        setreportpopup(true)
    }
    const handleremovereportpopup=()=>{
        setreportpopup(false)
    }


    const allfuntions={
        handleSidebarItemClick,
        handleusedetailpopup,
        handleremovepopup,
        selectedItem,
        visible,
        handlereportpopup,
        reportpopup,
        handleremovereportpopup,
        //for login
        handlechange,
        formData,
        handleform,
        Error,
        // close-login
        // store-data
        
        data,
        setdata,
        // store-data-close
        // login-user
        loginuser,
        // close-login-user
        // leave-request
        leaverequest
        // close-request
    }
    return(
        <div>
            <mycontext.Provider value={allfuntions}>
                {children}
            </mycontext.Provider>
        </div>
    )
}

export function UseContextdata(){
    return useContext(mycontext)
}

export default CreateContextApp