// DEBOUNCING HELPER FUNCTION

const debounce = (func, delay = 1000) => { // with a 1 sec delay default value
  
  // function wrapper, a shield how often the func should be invoked
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};




// we call our function and search for the results only in 1 second after the user stops to write  

// let timeoutId; // is a ID parameter of setTimeout for stopping the executing setTimeout function
// const onInput = event => {
//     if (timeoutId) {      // to look up if timeoutId is defined
//         clearTimeout(timeoutId); // if user stops to write in input we stop the pending timer // stop existing one and start a new one
//     }
   
//    timeoutId = setTimeout(() => {
//         fetchData(event.target.value); // get the fetch data from the server in 1 second
//     }, 1000)    
// };

// input.addEventListener('input', onInput);
