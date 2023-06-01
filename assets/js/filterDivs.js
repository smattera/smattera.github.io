function filterDivs(event) {
  const filter = event.target.dataset.filter;
  const divs = document.querySelectorAll('#myTabContent .card');

  if (filter === 'all') {
    divs.forEach(div => {
      div.style.display = 'grid';
    });
  } else {
    divs.forEach(div => {
      if (div.classList.contains(filter)) {
        div.style.display = 'grid';
      } else {
        div.style.display = 'none';
      }
    });
  }

  const filterButtons = document.querySelectorAll('.btn');
  filterButtons.forEach(button => {
    button.classList.remove('active');
  });

  event.target.classList.add('active');
}

const filterButtons = document.querySelectorAll('.btn');
filterButtons.forEach(button => {
  button.addEventListener('click', filterDivs);
});

// Initially show all cards
const allButton = document.querySelector('button[data-filter="all"]');
allButton.classList.add('active');
filterDivs({ target: allButton });
