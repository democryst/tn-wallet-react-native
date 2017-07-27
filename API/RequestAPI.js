// let rootURL = 'http://www.omdbapi.com/';
let URL = 'http://188.166.214.163/accounts/1234567890';

exports.getData = function () {
  return fetch(URL)
    .then((resp) => resp.json());
}

exports.postTransaction = function (sourceID, sourceInitialBalance, destinationID, 
  destinationInitialBalance, amount) {
  let sourceRemain = src_initial_balance - amount;
  let destinationRemain = des_initial_balance + amount;
  fetch('https://mywebsite.com/endpoint/', {
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
}