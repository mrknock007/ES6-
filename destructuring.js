// Destructuring assignment for objects and arrays


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  
  const { firstName, lastName, age, address: { city, country } } = person;
  
  console.log(firstName); // Output: John
  console.log(lastName); // Output: Doe
  console.log(age); // Output: 30
  console.log(city); // Output: New York
  console.log(country); // Output: USA