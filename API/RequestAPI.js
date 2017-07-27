// let rootURL = 'http://www.omdbapi.com/';
let URL = 'http://188.166.214.163/accounts/1234567890';

exports.getData = function () {
  return fetch(URL)
    .then((resp) => resp.json());
}

exports.postTransaction = function (sourceID, sourceInitialBalance, destinationID, destinationInitialBalance, amount) {
  let sourceRemain = sourceInitialBalance - amount;
  let destinationRemain = destinationInitialBalance + amount;
  console.log(sourceRemain);
  console.log(destinationRemain);
  fetch('http://188.166.214.163/transactions/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'transfer',
      src_aac_id: sourceID,
      src_initial_balance: sourceInitialBalance,
      des_acc_id: destinationID,
      des_initial_balance: destinationInitialBalance,
      amount: amount,
      src_remain_balance: sourceRemain,
      des_remain_balance: destinationRemain,
    })
  })
  .then(function(response){ 
 return response.json();   
})
.then(function(data){ 
console.log(data)
});
  
}