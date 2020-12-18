import {getUser} from '../services/user';

const isLoggedIn = async() => {
  const data = await getUser();
  return data['status']===1?true:false;
}

export {isLoggedIn};