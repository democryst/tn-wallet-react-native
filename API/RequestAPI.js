// let rootURL = 'http://www.omdbapi.com/';
let URL = 'http://188.166.214.163/accounts/';

exports.getData = function(userId){
  return fetch(URL+userId)
    .then((resp)=>resp.json());
}
