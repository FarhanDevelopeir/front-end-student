import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from 'react-bootstrap';

const Leaveapproval = () => {
  const requestedstudents=['Farhan', 'Zeeshan', 'Awais', 'Hasanain', 'Shakir', 'Yata', 'Sudais', 'Saleem', 'Akhtar']
  return (
    <div style={{width:'93.5%'}} className='m-auto'>
      <div className='mt-3'>
      <LocalizationProvider  dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DatePicker', 'DatePicker']}   >
                                <DatePicker label={'Select date '} sx={{backgroundColor:'#fff'}}/>
                            </DemoContainer>
                        </LocalizationProvider>
      </div>
      <div className='row'>
      {requestedstudents.map((item)=>{
        return(

          <div class="col-lg-2 shadow card mt-4 rounded m-3">
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{width: '200px'}}/>
            <h5 class="my-3">{item}</h5>
            
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-success">Accept</button>
              <button type="button" class="btn btn-danger ms-1">Reject</button>
            </div>
          </div>
        </div>
        )
      })}
        
       
    </div>
    </div>
  )
}

export default Leaveapproval