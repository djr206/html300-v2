// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')
  const sec3L1aform = document.querySelector('#sec3L1a-form')
  const sec3L1bform = document.querySelector('#sec3L1b-form')
  const sec3L1cform = document.querySelector('#sec3L1c-form')
  const sec3L1dform = document.querySelector('#sec3L1d-form')


  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }
  
    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // second form pulls out first 4 values  from my array and displays them w/users number
  sec3L1aform.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#sec3L1a-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

    // assign first 4 array values to sliceArr
    sliceArr = data.slice(0,4);
      // console.log(data);
      // Output the first 4 array values and users number to the page
      document.querySelector('#sec3L1a-form .output').innerHTML = (sliceArr + ',' + userNumber)
    }
  
    // Clear the form field so the user can play again
    inputField.value = ''
  })

  // third form filters duplicates from an array
  sec3L1bform.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 8, -10, 222, 11.2, 3.14, 2, 3, 5, 8, 5, 3, 0, 1, 8, -10, 222, 11.2, 3.14, 2, 3, 5, 8, 5, 3, 0, 1, 8, -10, 222, 11.2, 3.14, 2, 3, 5, 8, 5, 3, 0, 1, 8, -10, 222, 11.2, 3.14, 2, 3, 5, 8, 5, 3]

    const inputField = document.querySelector('#sec3L1b-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

  // filter out duplicates
    newArr = data.reduce((x, y) => x.includes(y) ? x : [...x, y], []);

      // Output the filtered array to the page
    document.querySelector('#sec3L1b-form .output').innerHTML = newArr
    }
  
    // Clear the form field so the user can play again
    inputField.value = ''
  })

    // forth form orders array values from low to high using sort method
    sec3L1cform.addEventListener('submit', function(event){
      // Prevent the form from trying to submit to a server
      event.preventDefault()
  
      // An array that we can transform based on user input
      let data = [0, 1, 8, -10, 222, 11.2, 3.14, 2, 3, 5, 8, 5, 3, 0, 1, 8, -10, 222, 11.2, 3.14, 2, 3, 5, 8, 5, 3, 0, 1, 8, -10, 222, 11.2, 3.14, 2, 3, 5, 8, 5, 3, 0, 1, 8, -10, 222, 11.2, 3.14, 2, 3, 5, 8, 5, 3]
  
      const inputField = document.querySelector('#sec3L1c-form .input')
      const userInput = inputField.value
      const userNumber = parseInt(userInput)
  
      // If the user's input was a number, push it into the array and continue
      if(!isNaN(userNumber)){
        data.push(userNumber)
  
    // sort() sorts by the first digit so 10 comes before 9  
    // const order = data.sort();
    // found solution at javascripttutorial site, using recursive function. How i understand it: sort() is called in usual flow 
    // of the program. It is called on the data object which is the given array. It takes in two values from array and compares
    // them but from there I'm bewildered but it's working.
      const order = data.sort( function( a , b){ 
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
  
      });

        // Output the ordered array to the page
        document.querySelector('#sec3L1c-form .output').innerHTML = order
      }

      // Clear the form field so the user can play again
      inputField.value = ''
    }) // closing sort method
  
    // fifth form uses map method to multiply array values
    sec3L1dform.addEventListener('submit', function(event){
      // prevent form from trying to submit to a server
      event.preventDefault

  // array that we can interate over and multiply its values
  let data = [0,1,2,3,4,5,6,7,8]

  const inputField = document.querySelector('#sec3L1d-form .input')
  const userInput = inputField.value
  const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      // data.push(userNumber)
     console.log(userNumber)
      // map method iterates over my array and multiplys each element
      // by the users number
      const multiData = [];
  
     for (let i = 0, max = data.length; i < max; i += 1) {
  multiData.push(data[i] * userNumber);

   // Output the multiplied array to the page 
   document.querySelector('#sec3L1d-form .output').innerHTML = multiData

  }

  
}
  console.log(multiData);
     
    }) // closing map method 

}) // closing document. addEventListener("DOMContentLoaded", function() 


   