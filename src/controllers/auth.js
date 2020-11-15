const handleLogin = async(values) => {
  let result = {};
  await fetch('http://localhost:5000'+'/auth/login',{
      method:'POST',
      mode:'cors',
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
}

const handleRegister = async (values) => {
  let result = {};
  await fetch('http://localhost:5000'+'/auth/register',{
      method:'POST',
      mode:'cors',
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