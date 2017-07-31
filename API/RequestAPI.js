// let rootURL = 'http://www.omdbapi.com/';
let URL = 'http://188.166.214.163/accounts/';


exports.getData = function(userId){
  return fetch(URL+userId)
    .then((resp)=>resp.json());
}

exports.postTransaction = function (sourceID, sourceInitialBalance, destinationID, destinationInitialBalance, amount) {
  let sourceRemain = sourceInitialBalance - amount;
  let destinationRemain = parseFloat(destinationInitialBalance) + parseFloat(amount);
  console.log(sourceRemain);
  console.log(destinationRemain);
  let link = 'http://188.166.214.163/transactions';
  let a = `${link}/transfer/${sourceID}/${sourceInitialBalance}/${destinationID}/${destinationInitialBalance}/${amount}/${sourceRemain}/${destinationRemain}`;
  console.log(a);
  return fetch(`${link}/transfer/${sourceID}/${sourceInitialBalance}/${destinationID}/${destinationInitialBalance}/${amount}/${sourceRemain}/${destinationRemain}`)
    .then((resp)=>resp.json());
  
  // fetch('http://188.166.214.163/transactions/', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: JSON.stringify({
  //     // type: 'transfer',
  //     // src_aac_id: sourceID,
  //     // src_initial_balance: sourceInitialBalance,
  //     // des_acc_id: destinationID,
  //     // des_initial_balance: destinationInitialBalance,
  //     // amount: amount,
  //     // src_remain_balance: sourceRemain,
  //     // des_remain_balance: destinationRemain,
  //     ab: ""
  //   })
  // })
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .catch((error) => {
  //        console.error(error);
  //    });

}