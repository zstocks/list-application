const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelectorAll('.description')[1];
const descriptionP = document.querySelectorAll('.description')[0];
const descriptionButton = document.querySelectorAll('.description')[2];
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstLi = listUl.firstElementChild;
const lastLi = listUl.lastElementChild;

function attachListItemButtons (li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

function setButtonColors () {
  lis[0].querySelector('.up').style.backgroundColor = '#ccc';
  lis[lis.length - 1].querySelector('.down').style.backgroundColor = '#ccc';
  for ( let i = 1; i < lis.length - 1; i++) {
    lis[i].querySelector('.up').style.backgroundColor = '#52bab3';
    lis[i].querySelector('.down').style.backgroundColor = '#508abc';
  }
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

setButtonColors();

listUl.addEventListener('click', function(event) {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li); 
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      let prevLi = li.previousElementSibling;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
        setButtonColors();
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      let nextLi = li.nextElementSibling;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
        setButtonColors();
      }
    }
  }
});

toggleList.addEventListener('click', function() {
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'block'; 
    toggleList.textContent = 'Hide List';
  } else {
    listDiv.style.display = 'none'; 
    toggleList.textContent = 'Show List';
  }
});
                          

descriptionButton.addEventListener('click', () => {
   descriptionP.innerHTML = descriptionInput.value + ':';  
   descriptionInput.value = '';
});

addItemButton.addEventListener('click', function() {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});