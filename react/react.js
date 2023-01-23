
function formulario() {
    return (
    React.createElement("div",null,
            React.createElement("div", { className: "box-nome" },
                React.createElement("input", { type: "text", id: "nome", placeholder: "Nome" }),
                React.createElement("small", { className: "mesagemErro", style: { display: "none" } }, "mensagem de erro")
            ),
            React.createElement("div", { className: "box-sobrenome" },
                React.createElement("input", { type: "text", id: "sobrenome", placeholder: "Sobrenome" }),
                React.createElement("small", { className: "mesagemErro", style: { display: "none" } }, "mensagem de erro")
            ),
            React.createElement("div", { className: "box-email" },
                React.createElement("input", { type: "email", id: "email", placeholder: "Email" }),
                React.createElement("small", { className: "mesagemErro", style: { display: "none" } }, "mensagem de erro")
            ),
            React.createElement("div", { className: "box-tele" },
                React.createElement("input", { type: "text", id: "tele", placeholder: "Telefone" }),
                React.createElement("small", { className: "mesagemErro", style: { display: "none" } }, "mensagem de erro")
            ),
            React.createElement("div", { className: "box-tipo" },
                React.createElement("select", { id: "tipo" },
                    React.createElement("option", { selected: true, disabled: true, value: "" }, "Indique o tipo de dispositivo:"),
                    React.createElement("option", null, "Smartphone"),
                    React.createElement("option", null, "Tablet"),
                    React.createElement("option", null, "Computador portatil"),
                    React.createElement("option", null, "PC"),
                    React.createElement("option", null, "Outro")
                ),
                React.createElement("small", { className: "mesagemErro", style: { display: "none" } }, "mensagem de erro")
            ),
            React.createElement("div", { className: "box-sintomas" },
                React.createElement("select", { id: "sintomas" },
                    React.createElement("option", { selected: true, disabled: true, value: "" }, "Quais os sintomas:"),
                    React.createElement("option", null, "Nao liga"),
                    React.createElement("option", null, "Ecra partido"),
                    React.createElement("option", null, "teclado nao funciona"),
                    React.createElement("option", null, "Aquece muito"),
                    React.createElement("option", null, "Computador lento"),
                    React.createElement("option", null, "Outro")
                ),
                React.createElement("small", { className: "mesagemErro", style: { display: "none" } }, "mensagem de erro")
            ),
            React.createElement("div", { className: "box-detalhes" },
                React.createElement("textarea", { cols: "5", rows: "10", id: "detalhes", name: "detalhes", placeholder: "Descreva com mais alguns detalhes o problema do aparelho:" }),
                React.createElement("small", { className: "mesagemErro", style: { display: "none" } }, "mensagem de erro")
            )
        )   
    );
}
ReactDOM.render(formulario(), document.querySelector("#form"));


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