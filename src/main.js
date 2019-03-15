const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search');
const exitIcon = document.getElementById('exit');


function display (elements, display = 'flex') {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}


display([searchInput, exitIcon], "none");


searchIcon.addEventListener("click", search);
function search() {
  display([searchInput, exitIcon]);
  display([searchIcon], "none");
}

exitIcon.addEventListener("click", exit);
function exit() {
  display([searchIcon]);
  display([searchInput, exitIcon], "none");
}

let inputSearchValue = '';

searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    inputSearchValue = event.target.value;
    open('movies.html')
  }
});
