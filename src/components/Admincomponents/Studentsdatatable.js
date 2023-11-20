import { Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { UseContextdata } from '../Context/Contaxtapi'
import UserDetailspage from './UserDetailspage'




const Studentsdatatable = () => {

    const tableheading = ['Name', 'Gender', 'Class', 'Details']
    
    const {handleusedetailpopup} = UseContextdata(); 

    
    
      
    return (
        <div  >
            <div style={{ marginBottom: '10px', width: '95%' }} className=' m-auto'>
                <div className='ui icon input mb-3 w-50 ' style={{ backgroundColor: '#fff' }}>
                    <TextField
                        placeholder='Search Students'
                        className='border rounded w-100'
                        size="small"
                    />
                    <i className='ui icon search' ></i>
                </div>

            </div>
            <div style={{ width: '95%', borderRadius: '10px', boxShadow: ` 0px 10px 15px -3px rgba(0,0,0,0.1),-1px -2px 6px 0px rgba(0,0,0,0.1)` }} className='m-auto  p-3 bg-white'  >
                <div _>
                    <table className='w-100' _>

                        <div className='d-flex' _>
                            <thead style={{ width: '5%', display: 'flex', justifyContent: 'center' }} >
                                <th _>S-No</th>
                            </thead>
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
                                    <tbody style={{ width: '5%', display: 'flex', justifyContent: 'center' }}>
                                        <td >1</td>
                                    </tbody>
                                    <tbody style={{ width: '97%' }}>
                                        <tr className='row d-flex justify-content-around' >

                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Farhan</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Male</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Rawalpindi</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td  ><Button>View Details</Button></td></div>
                                        </tr>
                                    </tbody>
                                </div>
                                <div className='ui divider'></div>
                                <div className='d-flex'>
                                    <tbody style={{ width: '5%', display: 'flex', justifyContent: 'center' }}>
                                        <td >1</td>
                                    </tbody>
                                    <tbody style={{ width: '97%' }}>
                                        <tr className='row d-flex justify-content-around' >

                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Farhan</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Male</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Rawalpindi</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td  ><Button>View Details</Button></td></div>
                                        </tr>
                                    </tbody>
                                </div>
                                
                                
                                
                                
                                <div className='ui divider'></div>
                                <div className='d-flex'>
                                    <tbody style={{ width: '5%', display: 'flex', justifyContent: 'center' }}>
                                        <td >1</td>
                                    </tbody>
                                    <tbody style={{ width: '97%' }}>
                                        <tr className='row d-flex justify-content-around' >

                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Farhan</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Male</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td>Rawalpindi</td></div>
                                            <div className='col ' style={{ display: 'flex', justifyContent: 'center' }}><td  ><Button onClick={handleusedetailpopup}>View Details</Button></td></div>
                                        </tr>
                                    </tbody>
                                </div>
                                <div className='ui divider'></div>
                            </table>
                        </div>
                    </table>
                   
                </div>
                <UserDetailspage/>


            </div>
        </div>

    )
}

export default Studentsdatatable