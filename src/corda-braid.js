import "babel-polyfill";
import { Proxy } from 'braid-client'

let local;

//const notary = 'O=Cordite Bootstrap Notary, OU=Cordite Foundation, L=London, C=GB';
const notary = 'O=Notary Service, L=Zurich, C=CH';
//let notary = "OU=Cordite Foundation, O=Cordite Guardian Notary, L=London, C=GB"
const emea = 'O=PartyA, L=London, C=GB';



let saltedTokenName = 'TOK-' + new Date().getTime()
let saltedAccountName = 'Acc-' + new Date().getTime()
//let notary = "OU=Cordite Foundation, O=Cordite Guardian Notary, L=London, C=GB"
const printFn = (fns) => {
   Object.getOwnPropertyNames(fns).forEach(fn => console.info(`\t${fn}`));
}

const onClose = () => {
   console.info('braid client disconnected');
}

const onError = (err) => {
   console.error('braid error', err);
}

let BraidConnect = () => {
   return new Promise((resolve) => {
      let local = new Proxy({ url: 'https://localhost:8081/api/' },
         () => {
            console.info('braid client connected');
            resolve(local);
         }, onClose, onError, { strictSSL: false });
   })
}

const run = async () => {
   let proxy = await BraidConnect();
   console.info(`local ${JSON.stringify(proxy)}`)
   console.info('Ledger functions');
printFn(proxy.ledger);

   // printFn(proxy.)

   // proxy.ledger.createAccount(saltedAccountName, notary);
   // printFn(proxy.notary);

   // console.info('DAO functions');
   // printFn(proxy.dao);


   /*******  Create token and account     */ 

  //  let account = await proxy.ledger.createAccount('UserB', notary);
   // let account = await proxy.ledger.createAccount('UserA', notary);

 //  let account = await proxy.ledger.createAccount('UserA', notary);
 //  console.info(`account created ${JSON.stringify(account, null, 2)}`);
  //UserA@O=PartyA, L=London, C=GB

 //  let accountDtls = await proxy.ledger.getAccount('User@2');
   //console.info(`account details  ${JSON.stringify(account, null, 2)}`);


  //  accountDtls = await proxy.ledger.getAccount('User@1');
   //console.info(`account details  ${JSON.stringify(accountDtls, null, 2)}`);
  //let tokenType = await proxy.ledger.createTokenType('BTC', 0, notary);
 // console.info(`token type created ${JSON.stringify(tokenType, null, 2)}`);
   // console.info(`token type created ${JSON.stringify(tokenType, null, 2)}`);

     /******    Issue token to account       **/

    

 //let issueToken = await proxy.ledger.issueToken('UserA', 10, 'BTC', 'Issuance 10 BTC token', notary);
 //issueToken = await proxy.ledger.issueToken('User@1', -0.81, 'BTC', 'Issuing  BTC token', notary);

 // console.info(`token issued to userA ${JSON.stringify(issueToken, null, 2)}`);



     /******    Transfer tokens from one account to another account on same nodes     **/


  //User@1@O=PartyA, L=London, C=GB 
  //User@1@O=PartyA, L=London, C=GB 
 //  let transferToAccount = await proxy.ledger.transferToken('5', 'BTC', 'UserA','UserB', 'Transfered 5 BTC from UserA@PartyA  to UserB@PartyA', notary);

    //let transferToAccount = await proxy.ledger.transferToken('2', 'BTC:0:O=PartyA, L=London, C=GB', 'UserA','UserA@O=PartyB, L=London, C=GB', 'Transfered 2 BTC from UserA@partyA to UserA@partyB', notary);
 //console.info(`token issued to userA ${JSON.stringify(transferToAccount, null, 2)}`);


   /******    check account balance      **/

 // let accountBalance_1 = await proxy.ledger.balanceForAccount('UserA');
  // console.info(`Account balance for userA ${JSON.stringify(accountBalance_1, null, 2)}`);
    

   // accountBalance_1.forEach(function(element){
  //    console.info('Amount for token type '+element.token.symbol+ ' : ' + element.quantity);
 //  });

 
  //let accountBalance_2 = await proxy.ledger.balanceForAccount('UserB');
 // console.info(`Account balance for userB ${JSON.stringify(accountBalance_2, null, 2)}`);

  let accountBalance_1 = await proxy.ledger.balanceForAccount('UserA');
  console.info(`Account balance for userA ${JSON.stringify(accountBalance_1, null, 2)}`);

 //  accountBalance_2.forEach(function(element){
   // console.info('Amount for token type '+element.token.symbol+ ' : ' + element.quantity);
  //  });

  //  let accountBalance_C = await proxy.ledger.balanceForAccount('UserD');
   // console.info(`Account balance for userD ${JSON.stringify(accountBalance_C, null, 2)}`);


 //  accountBalance_2.forEach(function(element){
 //   console.info('Amount for token type '+element.token.symbol+ ' : ' + element.quantity);
   // });

   ///console.info('account balance of user@5 ' + accountBalance_1[0].quantity);

  //console.info('account balance of user@1 ' + accountBalance_2[0].quantity);

   


   // let userList = await proxy.ledger.getOwnPropertyNames;
   // console.info(`user list  ${JSON.stringify(userList, null, 2)}`);


   // issuing to token to account usr@1 of type BTC

   //  let issueToken = await proxy.ledger.issueToken();
}

run().then(() => {
   process.exit(0);
}).catch(e => {
   console.error('run error', e, e.stack);
   process.exit(1);
})

