var UserProfile = (function() {
  var email = "";
  var data = {};

  var getMail = function() {
    return email;    // Or pull this from cookie/localStorage
  };

  var setMail = function(mail) {
    email = mail;     
    // Also set this in cookie/localStorage
  };

  var getData = function() {
    return data;
  }

  var setData = function(temp) {
    data = temp
  }

  return {
    getMail: getMail,
    setMail: setMail,
    getData: getData,
    setData: setData
  }

})();

export default UserProfile;