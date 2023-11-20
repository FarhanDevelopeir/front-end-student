import React, { useState } from 'react'
import Leaverequest from './Leaverequest'
import { UseContextdata } from '../Context/Contaxtapi';

const Usermarkattendance = () => {
    const d = new Date()
    const {handleusedetailpopup} = UseContextdata(); 

    return (
        <div className='text-secondary' style={{ width: '95%', margin: 'auto'}}>
       
            <div className='card col-lg-4  mt-5 shadow p-3'>
                <span>Today, {d.toLocaleDateString()}</span>
                <div className='text-center'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        class="rounded-circle img-fluid border p-1" style={{ width: '150px', backgroundColor: '#fff' }} />
                    <h5 class="my-3">Muhammad Farhan</h5>
                </div>
                <div>
                    <div>
                        <h3 className='mt-4 mb-4' >Mark your Attendancce </h3>
                        <div className='mb-4 d-flex justify-content-around ' style={{  marginTop: '10px' }}>
                            <button class="ui  green button" style={{width:'35%'}}>Present</button>
                            <button class="ui  blue button" style={{width:'35%'}} onClick={handleusedetailpopup} >Leave Request</button>
                        </div>
                    </div>
                </div>
            </div>
            <Leaverequest/>
        </div>
    )
}

export default Usermarkattendance