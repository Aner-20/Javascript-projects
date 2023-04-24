document.addEventListener('click', e => {
    const isDropdownBtn = e.target.matches("[data-dropdown-button]"); 
    //console.log(isDropdownBtn) // it returns true if i click on information
    if(!isDropdownBtn && e.target.closest('[data-dropdown]') != null) return // it ignores the click event
  
    let currentDropdown;
  
    if(isDropdownBtn){  // if isDropdownBtn is true it opens the dropdown
      currentDropdown = e.target.closest('[data-dropdown]')
      //console.log(currentDropdown)
      currentDropdown.classList.toggle('active')
  
    }
  
    // closes the other ones that are already open 
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown == currentDropdown) return // do nothing
      dropdown.classList.remove('active');
    });
  })
  
  
  