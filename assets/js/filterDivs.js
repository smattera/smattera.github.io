function filterDivs(event) {
  const filter = event.target.dataset.filter;
  const divs = document.querySelectorAll('#myTabContent .card');

  if (filter === 'all') {
    divs.forEach(div => {
      div.style.display = 'block';
    });
  } else {
    divs.forEach(div => {
      if (div.classList.contains(filter)) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });
  }

  const filterLinks = document.querySelectorAll('.nav-link');
  filterLinks.forEach(link => {
    link.classList.remove('active');
  });

  event.target.classList.add('active');
}

const filterLinks = document.querySelectorAll('.nav-link');
filterLinks.forEach(link => {
  link.addEventListener('click', filterDivs);
});

// Initially show all cards
const allLink = document.querySelector('a[data-filter="all"]');
allLink.classList.add('active');
filterDivs({ target: allLink });
