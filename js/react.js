/*
function teste() {
    return React.createElement("h1", null, "Olá, mundo!");
}

ReactDOM.render(teste(), document.querySelector("#root"));
*/

const form = document.getElementById('box-direita');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telefone = document.getElementById('tele');
const tipo = document.getElementById('tipo');
const sintomas = document.getElementById('sintomas');
const detalhes = document.getElementById('detalhes');

let validNome = false;
let validSobrenome = false;
let validEmail = false;
let validTelefone = false;
let validTipo = false;
let validSintomas = false;
let validDetalhes = false;

form.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    checkInputs()
    guardarlocal()
    messagemSucesso()
})

function checkInputs(){
    const nomeValue=nome.value.trim(); // a funcao trim e para remover os passos em branco
    const sobrenomeValue=sobrenome.value.trim();
    const emailValue=email.value.trim();
    const telefoneValue=telefone.value.trim();
    const tipoValue=tipo.value.trim();
    const sintomasValue=sintomas.value.trim();
    const detalhesValue=detalhes.value.trim();

    if(nomeValue === ''){
        messagemErro(nome,'Campo nome por preencher')
    }else{
        validNome = true;
    }
    if(sobrenomeValue === ''){
        messagemErro(sobrenome,'Campo sobrenome por preencher')
    }else{
        validSobrenome = true;
    }
    if(emailValue === ''){
        messagemErro(email,'Campo email por preencher')
    }else{
        validEmail = true;
    }
    if(tipoValue === ''){
        messagemErro(tipo,'Campo tipo por preencher')
    }else{
        validTipo = true;
    }
    if(telefoneValue === ''){
        messagemErro(telefone,'Campo telefone por preencher')
    }else{
        validTelefone = true;
    }
    if(sintomasValue === ''){
        messagemErro(sintomas,'Campo sintomas por preencher')
    }else{
        validSintomas = true;
    }
    if(detalhesValue === ''){
        messagemErro(detalhes,'Campo detalhes por preencher')
    }else{
        validDetalhes = true;
    }

}

function messagemErro(input,mensagem){
    const control = input.parentElement;
    const small = control.querySelector('small')
    small.innerText = mensagem
    small.style.display = "block";
}


function guardarlocal(){

    // verificacao dos campos preenchidos
    if(validNome && validSobrenome && validEmail && validTelefone && validTipo && validSintomas && validDetalhes)
    {
        if (localStorage.cont) {
            localStorage.cont = Number(localStorage.cont)+1;
         } else {
            localStorage.cont = 1;
         }
         
         string = nome.value + ';' + sobrenome.value + ';' + email.value + ';' + telefone.value + ';' + tipo.value + ';' + sintomas.value + ';' + detalhes.value;
         localStorage.setItem(localStorage.cont,string);

    }

}


function messagemSucesso(){
    // verificacao dos campos preenchidos
    if(validNome && validSobrenome && validEmail && validTelefone && validTipo && validSintomas && validDetalhes)
    {
    var form = document.getElementById("box-direita");
    form.style.display = "none";
    var message = document.getElementById("messagemSucesso");
    message.style.display = "block";
    }
}