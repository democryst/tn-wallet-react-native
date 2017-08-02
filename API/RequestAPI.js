// let rootURL = 'http://www.omdbapi.com/';
let URL = 'http://188.166.214.163/';


exports.getData = function(userId){
  return fetch(URL+'accounts/'+userId, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then((resp)=>resp.json());
}

exports.getTransaction = function(transactionId){
  return fetch(URL+'transactions/'+transactionId, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then((resp)=>resp.json());
}

// exports.postTransaction = function (sourceID, sourceInitialBalance, destinationID, destinationInitialBalance, amount) {
//   let sourceRemain = sourceInitialBalance - amount;
//   let destinationRemain = parseFloat(destinationInitialBalance) + parseFloat(amount);
//   console.log(sourceRemain);
//   console.log(destinationRemain);
//   let link = 'http://188.166.214.163/transactions';
//   let a = `${link}/transfer/${sourceID}/${sourceInitialBalance}/${destinationID}/${destinationInitialBalance}/${amount}/${sourceRemain}/${destinationRemain}`;
//   console.log(a);
//   return fetch(`${link}/transfer/${sourceID}/${sourceInitialBalance}/${destinationID}/${destinationInitialBalance}/${amount}/${sourceRemain}/${destinationRemain}`)
//     .then((resp)=>resp.json());



exports.postTransaction = function (sourceID, sourceInitialBalance, destinationID, destinationInitialBalance, amount) {
    let sourceRemain = sourceInitialBalance - amount;
    let destinationRemain = parseFloat(destinationInitialBalance) + parseFloat(amount);

    return fetch('http://188.166.214.163/transactions', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          },
          body: JSON.stringify({
            type: "transfer",
            src_acc_id: sourceID,
            src_initial_balance: sourceInitialBalance,
            des_acc_id: destinationID,
            des_initial_balance: destinationInitialBalance,
            amount: amount,
            src_remain_balance: sourceRemain,
            des_remain_balance: destinationRemain
          })
        })
}


exports.postTransactionTopUp = function (destinationID, destinationInitialBalance, amount) {
    let destinationRemain = parseFloat(destinationInitialBalance) + parseFloat(amount);
    console.log({
            type: "topup",
            des_acc_id: destinationID,
            des_initial_balance: destinationInitialBalance,
            amount: amount,
            des_remain_balance: destinationRemain
          })
    return fetch('http://188.166.214.163/transactions', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          },
          body: JSON.stringify({
            type: "topup",
            des_acc_id: destinationID,
            des_initial_balance: destinationInitialBalance,
            amount: amount,
            des_remain_balance: destinationRemain
          })
        })
}
