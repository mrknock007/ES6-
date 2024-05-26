
//REST Paramater........
// Function to separate the first two arguments and collect the rest into an array
const processArguments = (firstArg, secondArg, ...restArgs) => {
    console.log("First argument:", firstArg);
    console.log("Second argument:", secondArg);
    console.log("Rest of the arguments:", restArgs);
};

console.log(processArguments(1, 2, 3, 4, 5, 6));

//2nd Example......
function abcd(a,b,c,...d){
    console.log(a,b,c,d);
}
abcd(1,2,3,4,45,55,6);
/*output:
  a=1
  b=2
  c=3
  d=[4,45,55,6]// rest part is assigned to d
  */
