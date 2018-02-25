// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    console.log(currency);
    if(currency>10000){
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if(currency<=0){
        return {};
    }
    else{
        let resultObject={};
        if(Math.floor(currency  / 50)!==0){
            resultObject.H=Math.floor(currency  / 50);
            currency-=resultObject.H*50;
        }
        if(Math.floor(currency  / 25)!==0){
            resultObject.Q=Math.floor(currency  / 25);
            currency-=resultObject.Q*25;
        }
        if(Math.floor(currency  / 10)!==0){
            resultObject.D=Math.floor(currency  / 10);
            currency-=resultObject.D*10;
        }
        if(Math.floor(currency  / 5)!==0){
            resultObject.N=Math.floor(currency  / 5);
            currency-=resultObject.N*5;
        }
        if(Math.floor(currency%10)!==0){
            resultObject.P=Math.floor(currency%10);
        }
        return resultObject;
    }
};
