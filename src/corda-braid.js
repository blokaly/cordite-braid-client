import "babel-polyfill";
import {Proxy} from 'braid-client'

let local;

// const notary = 'O=Cordite Bootstrap Notary, OU=Cordite Foundation, L=London, C=GB';
const notary = 'O=Notary Service, L=Zurich, C=CH';
const emea = 'O=Cordite EMEA, OU=Cordite Foundation, L=London,C=GB';

const printFn = (fns) => {
   Object.getOwnPropertyNames(fns).forEach(fn => console.info(`\t${fn}`));
}

const onClose = () => {
   console.info('braid client disconnected');
}

const onError = (err) => {
   console.error('braid error', err);
}

let BraidConnect = ()=>{
   return new Promise((resolve)=>{
      let local = new Proxy({url: 'https://localhost:8081/api/'},
         ()=>{
         console.info('braid client connected');
         resolve(local);
      }, onClose, onError, {strictSSL: false});
   })
}

const run = async() => {
   let proxy = await BraidConnect();
   console.info(`local ${JSON.stringify(proxy)}`)
   console.info('Ledger functions');
   printFn(proxy.ledger);
   // console.info('DAO functions');
   // printFn(proxy.dao);
   // let account = await proxy.ledger.createAccount('abctest', notary);
   // console.info(`account created ${JSON.stringify(account, null, 2)}`);
   // let tokenType = await  proxy.ledger.createTokenType('BTC', 2, notary);
   // console.info(`token type created ${JSON.stringify(tokenType, null, 2)}`);
}

run().then(()=>{
   process.exit(0);
}).catch(e=>{
   console.error('run error', e, e.stack);
   process.exit(1);
})

