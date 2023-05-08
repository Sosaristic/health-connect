import { FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import UserImg from '../../assets/images/default.png';

function PatientForm() {
    const navigate = useNavigate()
    return (
      <div className='w-full flex flex-col items-center'>
        <div className='w-full lg:w-[90%] relative overflow-scroll h-full'>
          <div className='flex w-full flex-col bg-white items-center lg:flex-row lg:justify-between sticky top-0 px-2 '>
              <div className='w-full lg:w-[60%]'>
                  <h3 className='font-semibold lg:text-[1.2rem]'>User Information</h3>
                  <p className='text-primary font-jost text-xs lg:text-[1rem]'>Enter the required information below to register. You can change it anytime. </p>
              </div>
              <div className='w-full lg:w-[15%] flex items-center mt-2 justify-between'>
                  <button  onClick={()=>navigate('/dashboard/profile')} type="button" className='p-2 border border-primary rounded-md text-primary text-xs lg:text-[1rem]'>Cancel</button>
                  <button type="button" className='p-2 border border-primary bg-primary text-white rounded-md text-xs lg:text-[1rem]'>Save</button>
              </div>
          </div>
          <div className='w-full mt-4 flex flex-col lg:flex-row lg:justify-between gap-4 '>
              <div className='w-full flex items-center lg:items-baseline justify-center lg:w-[30%] lg:py-8'>
                  <div className='h-[10rem] w-[10rem] lg:h-[15rem] lg:w-[15rem] rounded-[50%] relative overflow-hidden'>
                    <img src={UserImg} alt=""  className='h-full w-full' />
                    <label htmlFor="upload" className='absolute cursor-pointer bottom-8 right-8 lg:bottom-12 lg:right-12 rounded-[50%]  h-[2rem] bg-secondary w-[2rem] flex flex-col justify-center items-center'>
                          <FaPen  className='text-primary' />
                      <input type="file" id='upload' name="" value="" className='hidden' />
                   </label>
                  </div>
              </div>
             
              <div className='w-full lg:w-[60%]  p-4'>
                  <form className='flex flex-col gap-2'>
                      <div className=''>
                      <label htmlFor="email" className='text-primary font-medium'>Email Address</label><br />
                      <input type="email" id='email' name="" placeholder='youremail@mail.com' className='p-2 w-full outline-none border-primary border rounded-md' />
                      </div>
                      <div className=''>
                      <label for="email" className='text-primary font-medium'>Full Name</label><br />
                      <div className='w-full flex flex-col lg:flex-row gap-2 lg:justify-between'>
                      <input type="text"  name="" placeholder='First Name' className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md' />
                      <input type="text"  name="" placeholder='Last name' className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md' /> 
                      </div>
                      </div>
                      <div className='w-full flex flex-col lg:flex-row gap-2 lg:justify-between'>
                          <div className='lg:w-[45%] w-full'>
                              <label htmlFor="" className='text-primary font-medium'>Phone Number</label><br/>
                              <input type="text"  name="" placeholder='Phone Number' className='p-2 w-full  outline-none border-primary border rounded-md' />  
                          </div>
                          <div  className='lg:w-[45%] w-full'>
                              <label htmlFor="" className='text-primary font-medium'>Gender</label><br />
                              <select className='p-2 w-full  outline-none border-primary border rounded-md'>
                                  <option></option>
                                  <option value="MALE" >Male</option>
                                  <option value="FEMALE">Female</option>
                              </select>
                          </div>
                      </div>    
                      <div className='w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:flex-wrap'>
                      <input type="text"  name="" placeholder='Age' className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md' /> 
                      <select className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md'>
                           <option value="Nigeria" >Nigeria</option>
                      </select>
                      <input type="text"  name="" placeholder='State' className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md' /> 
                      </div>   
                      <div className=''>
                      <label htmlFor="" className='text-primary font-medium'>Medical Information</label><br />
                      <div className='w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:flex-wrap'>
                      <input type="text"  name="" placeholder='Blood Group' className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md' />
                      <input type="text"  name="" placeholder='Marital Status' className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md' /> 
                      <input type="text"  name="" placeholder='Genotype' className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md' />
                      <input type="text"  name="" placeholder='Weight' className='p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md' />
                      <textarea  name="" placeholder='Medical history' className='p-2 w-full lg:w-full outline-none border-primary border rounded-md' />
                      </div>
                      </div>
                  </form>
              </div>
          </div>
        </div>
        
      </div>
    )
}

export default PatientForm