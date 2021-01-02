import Cookie from 'js-cookie';

const getResults = async (keyword) => {
  let result = {};
  await fetch(process.env.REACT_APP_BACKEND_URL+'/game/search/'+keyword,{
    method:'GET',
    credentials: 'same-origin',
    headers: {
      "Content-Type": "text/plain",
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

const getGame = async (id) => {
  let result = {};
  await fetch(process.env.REACT_APP_BACKEND_URL+'/game/details/'+id,{
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

const addGametoSearches = async (id) => {
  let result = {};
  await fetch(process.env.REACT_APP_BACKEND_URL+'/game/add-to-search/'+id,{
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

export {getResults, getGame, addGametoSearches};