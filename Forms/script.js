function preventDef(event) {
  event.preventDefault();
}

let botao = document.querySelector('#submit');

botao.addEventListener('click', preventDef)


function verifyName() {
  let id = document.querySelector('#name').value;
  
  if(id == '') {
    alert('Bora corrigir isso aí patrão')
  } else if (id.length < 4){
    alert('Nome Completo')
  }
}

botao.addEventListener('click', verifyName)