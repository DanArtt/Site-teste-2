//---------------- Input Email -----------------
let email = document.querySelector('#inputEmail')
let erroEmail = document.querySelector('#erroEmail')

//---------------- Input Senha ------------------
let senha = document.querySelector("#inputPassword")
let erroSenha = document.querySelector("#erroPassword")

//---------------- Input Endereço ----------------
let endereco = document.querySelector("#inputEndereco")
let erroEndereco = document.querySelector("#erroEndereco")

//---------------- Input Complemento -------------
let complemento = document.querySelector("#inputComplemento")
let erroComplemento = document.querySelector("#erroComplemento")

//---------------- Input Cidade -------------------
let cidade = document.querySelector("#inputCidade")
let erroCidade = document.querySelector("#erroCidade")

//---------------- Input Estado -------------------
let estado = document.querySelector("#inputEstado")
let erroEstado = document.querySelector("#erroEstado")

//---------------- Input CEP ----------------------
let cep = document.querySelector("#inputCep")
let erroCep = document.querySelector("#erroCep")

//---------------- Checagem de OK -----------------
let emailOk = false;
let senhaOk = false;
let enderecoOk = false;
let complementoOk = false;
let cidadeOk = false;
let estadoOk = false;
let cepOk = false;

//---------------- Criando as Funções --------------

//---------------- Validar Email -------------------
function validarEmail() {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = 'Email Inválido.'
        emailOk = false
    }else {
        erroEmail.innerHTML = ''
        emailOk = true
    }
}

//---------------- Validar Senha -------------------
function validarSenha() {
    if(senha.value.length < 8 || senha.value.length > 16 ) {
        erroSenha.innerHTML = 'Senha Inválida.'
        senhaOk = false
    }else {
        erroSenha.innerHTML = ''
        senhaOk = true
    }
}

//---------------- Validar Endereço -----------------
function validarEndereco() {
    if(endereco.value.length > 26 ) {
        erroEndereco.innerHTML = 'Endereço Inválida.'
        enderecoOk = false
    }else {
        erroEndereco.innerHTML = ''
        enderecoOk = true
    }
}

//---------------- Validar Complemento --------------
function validarComplemento() {
    if(complemento.value.length > 13 ) {
        erroComplemento.innerHTML = 'Complemento Inválida.'
        complementoOk = false
    }else {
        erroComplemento.innerHTML = ''
        complementoOk = true
    }
}

//---------------- Validar Cidade --------------------
function validarCidade() {
    if(cidade.value.length > 20 ) {
        erroCidade.innerHTML = 'Cidade Inválida.'
        cidadeOk = false
    }else {
        erroCidade.innerHTML = ''
        cidadeOk = true
    }
}

//---------------- Validar Estado --------------------
function validarEstado() {
    if(estado.value.length > 2 ) {
        erroEstado.innerHTML = 'Estado Inválido.'
        estadoOk = false
    }else {
        erroEstado.innerHTML = ''
        estadoOk = true
    }
}

//---------------- Validar CEP ------------------------
function validarCep() {
    if(cep.value.length < 9 ) {
        erroCep.innerHTML = 'CEP Inválido.'
        cepOk = false
    }else {
        erroCep.innerHTML = ''
        cepOk = true
    }
}

function validarTudo() {
    if(emailOk && senhaOk && enderecoOk && complementoOk && cidadeOk && estadoOk && cepOk) {
        alert('Cadastro realizado com sucesso!')
    }else {
        alert('Por favor, preencha os campos para realizar o cadastro!')
    }
}
