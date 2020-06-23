// DEBOUNCING HELPER FUNCTION

const debounce = (func, delay = 1000) => { 
  
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


