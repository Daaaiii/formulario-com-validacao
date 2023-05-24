const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const mensagem = document.getElementById('mensagem')

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  checkInputs();
})
function checkInputs(){
  const nomeValue = nome.value;
  const emailValue = email.value;
  const telValue = tel.value;
  const mensagemValue = mensagem.value;

  if(nomeValue ===""){
    setErrorFor (nome, "campo obrigatório");
  } else{
    setSuccessFor(nome);
  }  
  if(emailValue ===""){
    setErrorFor (email, "campo obrigatório");
  } else{
    setSuccessFor(email);
  }  
  if(telValue ===""){
    setErrorFor (tel, "campo obrigatório");
  } else{
    setSuccessFor(tel);
  }  
  if(mensagemValue ===""){
    setErrorFor (mensagem, "campo obrigatório");
  } else{
    setSuccessFor(mensagem);
  }  
  const formControls = form.querySelectorAll ('.form-control');

  const formIsValid =[...formControls].every ((formControl) => {
    return formControl.className === "form-control success";
  });
}
function setErrorFor (input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.classList.add('error');
}
function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}


function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}