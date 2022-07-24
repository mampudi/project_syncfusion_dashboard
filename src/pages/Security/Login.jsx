import React from 'react'
import Service from '../../services/http'

function Login() {
  const services = new Service();

  const loginUser = React.useCallback(() => {
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPassword').value;
    const systemId = 'F87E8404-1CD7-482C-B041-F7FE7DB6B81F';
    const loginjson = `{email:"${email}",password: "${password}",system_id : "${systemId}"}`;

    document.location.href="/calendar";

    services.post('LoginUser',{email:"eichlefoko@gmail.com",password: "Lefoko@1",system_id : "F87E8404-1CD7-482C-B041-F7FE7DB6B81F"}).then(res => {
      

      console.log(`{email:"${email}",password: "${password}",system_id : "${systemId}"}`)
      if(res.data.length > 0) {
        console.log(`hello ${res.data[0].email}`)
        document.location.href="/";
      } else {
        console.log("Failed to login")
      }
    })
    
  }, [services])

  return (
    <div className='flex flex-wrap justify-center mt-20'>
    <div className='w-full max-w-sm'>
        <div className='mb-5'>
          <label htmlFor='' className='block text-grey-700 text-sm font-bold mb-2'>
            Email
          </label>
          <input id="txtEmail" type='text' className='shodow appearance-none border rounded w-full py-2' placeholder='Email'></input>
        </div>
        <div className='mb-5'>
          <label htmlFor='' className='block text-grey-700 text-sm font-bold mb-2'>
            Password
          </label>
          <input type='password' className='shodow appearance-none border rounded w-full py-2' placeholder='Password'></input>
        </div>
        <div className='flex items-center justify-between'>
          <button id="txtPassword" onClick={loginUser} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>
            Login
          </button>
        </div>
    </div>
</div>
  )
}

export default Login