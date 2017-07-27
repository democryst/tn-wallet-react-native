// let rootURL = 'http://www.omdbapi.com/';
let URL = 'http://188.166.214.163/accounts/1234567890';

exports.getData = function(){
  return fetch(URL)
    .then((resp)=>resp.json());
}

