const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData
}) => {
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');

   // passing through debouncing function
  const onInput = async event => {
    const items = await fetchData(event.target.value);
  
    // to remove the dropdown with empty input // to close it and not run other code
    if (!items.length) { // if there is no movies
      dropdown.classList.remove('is-active');
      return;
    }

    resultsWrapper.innerHTML = ''; // to clear the search
    dropdown.classList.add('is-active');
    for (let item of items) {
      const option = document.createElement('a'); // creating an anchor

      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(item);
      // to detect the click on chosen movie and update the search input
      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active'); // close the dropdown
        input.value = inputValue(item); // updating
        onOptionSelect(item);
      });

      resultsWrapper.appendChild(option);
    }
  };
  input.addEventListener('input', debounce(onInput, 500));

  // to close the dropdown menu by clicking on any place in document
  document.addEventListener('click', event => {
    if (!root.contains(event.target)) { // if the autocomplete element doesnt contain the clicked element
      dropdown.classList.remove('is-active'); // closing the dropdown by removing the class is-active
    }
  });
};
