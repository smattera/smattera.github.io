function filterDivs() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const divs = document.querySelectorAll('.card');

  let checkedCount = 0;
  let checkedId = '';

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkedCount++;
      checkedId = checkbox.id;
    }
  });

  if (checkedCount === 0) {
    divs.forEach(div => {
      div.style.display = 'block';
    });
  } else {
    divs.forEach(div => {
      if(div.classList.contains(checkedId)) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });
  }
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterDivs);
});
