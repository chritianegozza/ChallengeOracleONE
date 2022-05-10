const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textEncriptado = encriptar(inputTexto.value)
    mensagem.value = textEncriptado
    mensagem.style.backgroundImage="nome"
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textDesencriptado
    mensagem.style.backgroundImage="nome"
}


function desencriptar(stringdesencriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"],["u", "ufat"]];
    stringdesencriptada = stringdesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringdesencriptada.includes(matrizCodigo[i][0])) {
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringdesencriptada;
}