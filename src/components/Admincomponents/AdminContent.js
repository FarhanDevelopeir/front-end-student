import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Admindashboardcontent from './Admindashboardcontent';
import Studentsdatatable from './Studentsdatatable';
import { UseContextdata } from '../Context/Contaxtapi';
import Leaveapproval from './Leaveapproval'

const AdminContent = () => {
    const { selectedItem,formData } = UseContextdata();
    const activeComponentTitle = () => {
        if (selectedItem === 'dashboard') {
            return 'Dashboard';
        } else if (selectedItem === 'students') {
            return 'Students';
        } else if (selectedItem === 'leaveApproval') {
            return 'Leave Approval';
        } else {
            return ''; // You can handle other cases here
        }
    };
    return (
        <div className='adminarea'>
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
               
                {selectedItem === 'dashboard' && <div><Admindashboardcontent /><Studentsdatatable/></div>}
                {selectedItem === 'students' && <div className='mt-5'><Studentsdatatable /></div>}
                {selectedItem === 'leaveApproval' && <Leaveapproval />}
            </div>
        </div>
    )
}

export default AdminContent


