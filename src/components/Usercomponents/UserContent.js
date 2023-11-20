import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { UseContextdata } from '../Context/Contaxtapi';
import Usermarkattendance from './Usermarkattendance';
import UserRecord from './UserRecord'


const UserContent = () => {
    const { selectedItem,formData } = UseContextdata();
    const activeComponentTitle = () => {
        if (selectedItem === 'dashboard') {
            return 'Dashboard';
        } else if (selectedItem === 'Attendance Record') {
            return 'Attendance Record';
        } else if (selectedItem === 'leaveApproval') {
            return 'Leave Approval';
        } else {
            return ''; // You can handle other cases here
        }
    };
    return (
        <div className='adminarea '>
            <div className='adminbox   w-100  '>
                <div className='adminheader   m-auto '  style={{backgroundColor:'#fff'}}>
                    <div className='active-button ' style={{marginLeft:'10px'}}>
                        <h5 className='text-secondary'>{activeComponentTitle()}</h5>
                    </div>
                    <div className='profile'>
                        <span className='admin_name'>{formData.email}</span>
                        <AccountCircleIcon/>
                    </div>
                </div>
               
                {selectedItem === 'dashboard' && <div><Usermarkattendance/></div>}
                {selectedItem === 'Attendance Record' && <div className='mt-5'><UserRecord/></div>}
                
            </div>
        </div>
    )
}

export default UserContent


