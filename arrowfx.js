//regular function
function add(a, b) {
    return a + b;
  }
  //fat arrow function
  const add = (a, b) => a + b;
  
  // Regular function
  function doubleAndLog(num) {
    const doubled = num * 2;
    console.log(`Double of ${num} is ${doubled}`);
    return doubled;
  }
  
  // Equivalent fat arrow function
  const doubleAndLog = (num) => {
    const doubled = num * 2;
    console.log(`Double of ${num} is ${doubled}`);
    return doubled;
  };
  