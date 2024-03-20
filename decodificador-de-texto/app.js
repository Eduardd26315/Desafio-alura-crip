function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2}); // corrigido para 'rate'
}

function exivirMensagem() {
    exibirTexto('h1 ','Decodificador de Texto   ');
    exibirTexto('p','! Coloque apenas letras minusculas e sem acentos ' );
}
exivirMensagem();


// Função para criptografar uma string
function criptografar() {
    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    const inputTexto = document.getElementById("textoOriginal").value;
    const textoCriptografado = inputTexto.toLowerCase().replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.getElementById("resultado").value = textoCriptografado;
    habilitarDescriptografar();
}

// Função para descriptografar uma string
function desencriptar() {
    const matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    let textoDescriptografado = document.getElementById("resultado").value;

    for (const [cipher, letter] of matrizCodigo) {
        textoDescriptografado = textoDescriptografado.replace(new RegExp(letter, 'g'), cipher);
    }

    document.getElementById("resultado").value = textoDescriptografado;
    habilitarCriptografar();
}


// Função para habilitar o botão de descriptografar
function habilitarDescriptografar() {
    const botaoDescriptografar = document.querySelector('.container__botoes button:nth-child(2)');
    botaoDescriptografar.disabled = false;
}

// Função para habilitar o botão de criptografar
function habilitarCriptografar() {
    const botaoCriptografar = document.querySelector('.container__botoes button:nth-child(1)');
    botaoCriptografar.disabled = false;
}

function copiarTexto() {
    var input = document.getElementById("resultado");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}

function limparTexto() {
    var input = document.getElementById('resultado');
    input.value = '';
    alert("Texto limpo!");
}
