import React from 'react'
import { UseContextdata } from '../Context/Contaxtapi'
// import { Button } from 'react-bootstrap'
import Model from 'react-modal';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import zIndex from '@mui/material/styles/zIndex';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CreateUserreport from './CreateUserreport'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const UserDetailspage = () => {

    const { visible, handleremovepopup,handlereportpopup } = UseContextdata()

    const handleemovepopup = () => {
        handleremovepopup()
    }
    return (
        <Model

            isOpen={visible}
            onRequestClose={() => handleemovepopup()}
            style={{
                content: {
                    width: '50%',
                    margin: 'auto',
                    height: '550px',
                    backgroundColor:'#F4F5F6'
                }
            }}
        >
            <div className='card' style={{border:'none',backgroundColor:'#F4F5F6'}}>
                <div className='card-body '>
                    <div className='text-center'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                            class="rounded-circle img-fluid border p-1" style={{ width: '150px',backgroundColor:'#fff' }} />
                        <h5 class="my-3">Muhammad Farhan</h5>
                    </div>
                    <div>
                        <div className='  '>
                            <div className='w-100 d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <h4>Attendance Status  </h4>
                                    <h6 className='text-success align-self-center' style={{ marginLeft: '5px' }}>(Already Marked)</h6>
                                </div>
                                <div>
                                    <Button onClick={handlereportpopup} variant='secondary' startIcon={<AssessmentIcon />}>Create Report</Button>
                                </div>
                            </div>
                            <div className=' mt-3 mb-3  row' style={{ width: '80%' }}>

                                <div className='col d-flex justify-content-between ' style={{ width: '80%', marginTop: '10px' }}>
                                    <button class="ui inverted green button">Present</button>
                                    <button class="ui inverted blue button">Leave</button>
                                    <button class="ui inverted red button ">Absent</button>
                                </div>
                                <div className='col  d-flex justify-content-center   ' style={{ width: '10%', marginTop: '10px' }} >
                                    <button className='ui blue  button' ><EditIcon /></button>
                                    <button className='ui red  button' style={{ marginLeft: '5px' }} ><DeleteIcon /></button>
                                </div>

                            </div>
                        </div>

                        <div className=' mt-5 '>
                            <div className=' d-flex '>
                                <h4>Past Attendance Record  </h4>

                            </div>
                            <div className='d-flex mt-3 mb-3 justify-content-between'>

                                <Box sx={{ flexGrow: 1, width: '95%', margin: ' auto' }}>
                                    <Grid container spacing={2} >
                                        <Grid xs={12} sm={6} md={3} sx={{ margin: 'auto' }}>
                                            <Item sx={{ boxShadow: `0px 2px 10px 2px rgba(0,0,0,0.1)`, backgroundColor: '#fff', borderRadius: '15px' }}>
                                                <h6 style={{ backgroundColor: '#fff' }}>Total Students</h6>
                                                <h2 style={{ backgroundColor: '#fff' }}>20</h2>
                                            </Item>
                                        </Grid>
                                        <Grid xs={12} sm={6} md={3} sx={{ margin: 'auto' }}>
                                            <Item sx={{ boxShadow: `0px 2px 10px 2px rgba(0,0,0,0.1)`, backgroundColor: '#fff', borderRadius: '15px' }}>
                                                <h6 style={{ backgroundColor: '#fff' }}>Today Present</h6>
                                                <h2 style={{ backgroundColor: '#fff' }}>13</h2>
                                            </Item>
                                        </Grid>
                                        <Grid xs={12} sm={6} md={3} sx={{ margin: 'auto' }}>
                                            <Item sx={{ boxShadow: `0px 2px 10px 2px rgba(0,0,0,0.1)`, backgroundColor: '#fff', borderRadius: '15px' }}>
                                                <h6 style={{ backgroundColor: '#fff' }}>Today Absents</h6>
                                                <h2 style={{ backgroundColor: '#fff' }}>2</h2>
                                            </Item>
                                        </Grid>
                                        <Grid xs={12} sm={6} md={3} sx={{ margin: 'auto' }}>
                                            <Item sx={{ boxShadow: `0px 2px 10px 2px rgba(0,0,0,0.1)`, backgroundColor: '#fff', borderRadius: '15px' }}>
                                                <h6 style={{ backgroundColor: '#fff' }}>Today Leaves</h6>
                                                <h2 style={{ backgroundColor: '#fff' }}>5</h2>
                                            </Item>
                                        </Grid>
                                        {/* <Grid xs={6} md={4}>
                        <Item sx={{padding:'60px 0px', boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.37)`}}>
                        <h2>Today Leaves</h2>
                            <h2>5</h2>
                        </Item>
                    </Grid> */}
                                    </Grid>
                                </Box>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <CreateUserreport/>

        </Model>
    )
}

export default UserDetailspage