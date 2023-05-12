const armario = document.querySelector('.armario');
const porta1 = document.querySelector('.porta1');
const porta2 = document.querySelector('.porta2');
const porta3 = document.querySelector('.porta3');
const porta4 = document.querySelector('.porta4');
const porta5 = document.querySelector('.porta5');
const porta6 = document.querySelector('.porta6');
const porta7 = document.querySelector('.porta7');
const porta8 = document.querySelector('.porta8');

function setEstadoDesocupado() {
  porta1.style.backgroundColor = 'white';
  porta2.style.backgroundColor = 'white';
  porta3.style.backgroundColor = 'white';
  porta4.style.backgroundColor = 'white';
  porta5.style.backgroundColor = 'white';
  porta6.style.backgroundColor = 'white';
  porta7.style.backgroundColor = 'white';
  porta8.style.backgroundColor = 'white';
}

function setEstadoOcupado() {
  porta1.style.backgroundColor = 'red';
  porta2.style.backgroundColor = 'red';
  porta3.style.backgroundColor = 'red';
  porta4.style.backgroundColor = 'red';
  porta5.style.backgroundColor = 'red';
  porta6.style.backgroundColor = 'red';
  porta7.style.backgroundColor = 'red';
  porta8.style.backgroundColor = 'red';
}

function setEstadoManutencao() {
  porta1.style.backgroundColor = 'yellow';
  porta2.style.backgroundColor = 'yellow';
  porta3.style.backgroundColor = 'yellow';
  porta4.style.backgroundColor = 'yellow';
  porta5.style.backgroundColor = 'yellow';
  porta6.style.backgroundColor = 'yellow';
  porta7.style.backgroundColor = 'yellow';
  porta8.style.backgroundColor = 'yellow';
}

setEstadoDesocupado(); // Define o estado inicial do armário como desocupado