import {  TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { UseContextdata } from '../Context/Contaxtapi'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const Studentsdatatable = () => {
    const [isPopupVisible, setPopupVisible] = useState(true);
    const tableheading = ['Month','Day', 'Status']
    const [selectedMonth, setSelectedMonth] = useState(null);
    
    

    useEffect(() => {
        // Position the popup to the right of the DatePicker
        const datePicker = document.getElementById('datePicker');
        if (datePicker) {
          const datePickerRect = datePicker.getBoundingClientRect();
          const popup = document.getElementById('popup');
          if (popup) {
            popup.style.left = `${datePickerRect.right + 10}px`; // Adjust the distance as needed
            popup.style.top = `${datePickerRect.top}px`;
          }
        }
      }, [isPopupVisible],[selectedMonth]);

      const handleMonthChange = (date) => {
        // Extract and set the selected month
        setSelectedMonth(date?.toLocaleString('en-US', { month: 'long' }));
      };
    return (
        <div style={{width:'95%',margin:'auto'}} >

<div className=' mb-4'>
      <LocalizationProvider  dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DatePicker', 'DatePicker']}  >
                                <DatePicker
                                //  label={'Select date'}
                                 label={'Select month'}
                                 openTo="month"
                                 views={[ 'month']}
                                 sx={{backgroundColor:'#fff'}}/>
                            </DemoContainer>
                        </LocalizationProvider>
      </div>
      {/* {isPopupVisible && (
        <div id="popup" style={{ position: 'absolute', zIndex: 1, backgroundColor: 'white', padding: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          Select month to view attendance status according to date
        </div>
      )} */}

            
            <div style={{ width: '50%', borderRadius: '10px', boxShadow: ` 0px 10px 15px -3px rgba(0,0,0,0.1),-1px -2px 6px 0px rgba(0,0,0,0.1)` }} className='  p-3 bg-white'  >
                <div _>
                    <table className='w-100' _>

                        <div className='d-flex' _>
                            {/* <thead style={{ width: '5%', display: 'flex', justifyContent: 'center' }} >
                                <th _>S-No</th>
                            </thead> */}
                            <thead style={{ width: '97%', backgroundColor: '#fff' }}>

                                <tr className='row d-flex justify-content-around   '>
                                    {tableheading.map((heading, index) => (
                                        <div className='col ' style={{ display: 'flex', backgroundColor: '#fff', justifyContent: 'center' }}><th _ key={index}>{heading}</th></div>
                                    ))}
                                </tr>
                            </thead>
                        </div>
                        <div className='ui divider rounded' style={{ border: '2px solid #C0C0C0' }}></div>
                        <div>
                            <table className='w-100'>
                                <div className='d-flex'>
                                    {/* <tbody style={{ width: '5%', display: 'flex', justifyContent: 'center' }}>
                                        <td >1</td>
                                    </tbody> */}
                                    <tbody style={{ width: '97%' }}>
                                        <tr className='row d-flex justify-content-around' >
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>01</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Monday</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td><button  style={{width:'95px'}} className='ui green button '>Present</button></td></div>
                                        </tr>
                                    </tbody>
                                </div>
                                <div className='ui divider'></div>
                                <div className='d-flex'>
                                    {/* <tbody style={{ width: '5%', display: 'flex', justifyContent: 'center' }}>
                                        <td >1</td>
                                    </tbody> */}
                                    <tbody style={{ width: '97%' }}>
                                        <tr className='row d-flex justify-content-around' >
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>02</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Farhan</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td><button style={{width:'95px'}} className='ui blue button '>Leave</button></td></div>
                                        </tr>
                                    </tbody>
                                </div>
                                
                                
                                
                                
                                <div className='ui divider'></div>
                                <div className='d-flex'>
                                    {/* <tbody style={{ width: '5%', display: 'flex', justifyContent: 'center' }}>
                                        <td >1</td>
                                    </tbody> */}
                                    <tbody style={{ width: '97%' }}>
                                        <tr className='row d-flex justify-content-around' >
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>03</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Farhan</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td><button  style={{width:'95px'}} className='ui red button '>Absent</button></td></div>
                                        </tr>
                                    </tbody>
                                </div>
                                <div className='ui divider'></div>
                            </table>
                        </div>
                    </table>
                   
                </div>
                


            </div>
        </div>

    )
}

export default Studentsdatatable