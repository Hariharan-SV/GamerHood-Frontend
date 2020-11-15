const getUser = async () => {
  let result = {};
  await fetch('http://localhost:5000'+'/user/session/data',{
      method:'GET',
      mode:'cors',
      headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-type": "application/json; charset=UTF-8"
    },
  })
  .then(response => response.json())
  .then(res => result = res)
  .catch(err=>console.log(err));
  console.log("Data is ",result);
  return result;
};

export {getUser};