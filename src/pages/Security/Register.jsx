import React from 'react'
import Service from '../../services/http'

function Register() {
  const services = new Service();


  const registerUser = React.useCallback(() => {
    services.post('RegisterUser',{first_name: "kgang",last_name:"moloke",email:"eichlefoko@gmail.com",password: "Lefoko@1",system_id : "F87E8404-1CD7-482C-B041-F7FE7DB6B81F"});
    document.location.href="/login";
  }, [services])
  
  return (
    <div className='flex flex-wrap justify-center mt-20'>
        <div className='w-full max-w-sm'>
            <div className='mb-5'>
              <label htmlFor='' className='block text-grey-700 text-sm font-bold mb-2'>
                Email
              </label>
              <input type='text' className='shodow appearance-none border rounded w-full py-2' placeholder='Email'></input>
            </div>
            <div className='mb-5'>
              <label htmlFor='' className='block text-grey-700 text-sm font-bold mb-2'>
                First Name
              </label>
              <input type='text' className='shodow appearance-none border rounded w-full py-2' placeholder='First Name'></input>
            </div>
            <div className='mb-5'>
              <label htmlFor='' className='block text-grey-700 text-sm font-bold mb-2'>
                Last Name
              </label>
              <input type='text' className='shodow appearance-none border rounded w-full py-2' placeholder='Last Name'></input>
            </div>
            <div className='mb-5'>
              <label htmlFor='' className='block text-grey-700 text-sm font-bold mb-2'>
                Password
              </label>
              <input type='password' className='shodow appearance-none border rounded w-full py-2' placeholder='Password'></input>
            </div>
            <div className='flex items-center justify-between'>
              <button onClick={registerUser} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>
                Register
              </button>
            </div>
        </div>
    </div>
    
  )
}

export default Register