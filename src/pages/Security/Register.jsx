import React from 'react'
import Service from '../../services/http'

function Register() {
  const services = new Service();

  React.useEffect(() => {
    services.get('GetCities').then(res => {
      console.log("Employee data",res);
    })
  }, [services]);
  const registerUser = React.useCallback(() => {
    services.post('RegisterUser',{first_name: "kgang",last_name:"moloke",email:"eichlefoko@gmail.com",password: "Lefoko@1",system_id : "F87E8404-1CD7-482C-B041-F7FE7DB6B81F"})
  }, [services])
  return (
    <div>

    <button onClick={registerUser} type="button" className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
      style={{ background: 'blue' }}
    >
      Register
    </button>
    </div>
    
  )
}

export default Register