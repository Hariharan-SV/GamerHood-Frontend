import Cookie from 'js-cookie';

const getUser = async () => {
  let result = {};
  await fetch(process.env.REACT_APP_BACKEND_URL+'/auth/session',{
    method:'GET',
    credentials: 'same-origin',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Headers": "Content-Type",
      "x-auth-token":Cookie.get('x-auth-token'),
    },
  })
  .then(response => response.json())
  .then(res => result = res)
  .catch(err=>console.log(err));
  return result;
};

export {getUser};