const handleLogin = async(values) => {
  let result = {};
  await fetch(process.env.REACT_APP_BACKEND_URL+'/auth/login',{
      method:'POST',
      mode:'cors',
      headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body:JSON.stringify(values)
  })
  .then(response => response.json())
  .then(res => result = res)
  .catch(err=>console.log(err));
  return result;
}

const handleRegister = async (values) => {
  let result = {};
  await fetch(process.env.REACT_APP_BACKEND_URL+'/auth/register',{
      method:'POST',
      mode:'cors',
      credentials: 'same-origin',
      headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    body:JSON.stringify(values)
  })
  .then(response => response.json())
  .then(res => result = res)
  .catch(err=>console.log(err));
  return result;
};

export { handleLogin, handleRegister};