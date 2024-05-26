// asking user to enter a number from 0 to 9 if number is less than 5 then resolve an dotheriwse reject promise.

var ans= new promise(res,rej)= >{
    var num=prompt("enter a number from 0 to 9");
    if(num<5){
      res();
    }
    else{
      rej();
    }
  }
  
  ans.then(()=>{
    console.log("number is less than 5");
  })
  ans.catch(()=>{
    console.log("number is greater than 5");
  }
  