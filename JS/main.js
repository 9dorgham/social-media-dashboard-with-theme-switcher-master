// selectors
let toggle = document.querySelector('.toggle');
let cards = document.querySelectorAll('.card');

// check localStorage
let current = localStorage.getItem('mode');




// Derive upon localStroage
if (current == 'dark') {
  dark();
}else {
  light();
}



function light() {
  // Storage
  localStorage.setItem('mode', 'light');
  
  // DOM
  document.body.classList.add('light');
  cards.forEach(ele => {
    ele.classList.add('light');
  });
  toggle.classList.add('light');
}


function dark() {
  // Storage
  localStorage.setItem('mode', 'dark');
  
  // DOM
  document.body.classList.remove('light');
  cards.forEach(ele => {
    ele.classList.remove('light');
  });
  toggle.classList.remove('light');
}



toggle.addEventListener('click', () => {
  current = localStorage.getItem('mode');
  if (current == 'light') {
    dark();
  }else {
    light();
  }
})