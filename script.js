/* Declaração de variáveis */

var text = document.getElementsByClassName('input-texto')
const botao_encriptar = document.getElementsByClassName('encriptar')
const botao_desencriptar = document.getElementsByClassName('desencriptar')
const btn_copiar = document.getElementsByClassName('copiar')
const textarea = document.getElementsByClassName('mensagem')
var ctn_texto_p = document.getElementsByClassName('texto1')
var encriptar_texto = document.getElementsByClassName('texto2')

/* botão copiar com a respectiva função */

btn_copiar.addEventListener('click', copy);


/* botão encriptar com as validações */

botao_encriptar.addEventListener('click', () => {


   if(validText()){

    alert("Digite apenas letras minúsculas e sem acento!")
    text.value = '';


   }else{


    encriptar(text.value);
    text.value = '';
   

   }


});

/* botão decriptar com as validações */

botao_desencripta.addEventListener('click', () => {

    if(validText()){

        alert("Digite apenas letras minúsculas e sem acento!")
        text.value = '';

    }else{


        desencriptar_message(text.value);
        text.value = '';
    }

   
});


/* função encriptar */

function encriptar(message) {

    if (text.value.length == 0) {

        alert('Digite a mensagem que deseja criptografar!')

    } else {


        mensagem.style.backgroundImage = "nome";
        ctn_texto_p.innerHTML = 'Mensagem Criptografada:';
        encriptar_texto.innerHTML = message.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        btn_copiar.style.display = 'block';


    }
}

/* função decriptar */

function desencriptar_message(message) {

    if (text.value.length == 0) {

        alert('Digite a mensagem que deseja descriptografar!')
    } else {

        image.style.display = 'none';
        ctn_texto_p.innerHTML = 'Mensagem Descriptografada:';
        encriptar_texto.innerHTML = message.replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/imes/g, 'i').replace(/enter/g, 'e').replace(/ufat/g, 'u');

    }
}

/* função copiar */

function copy() {

    var text_copy = document.getElementsByClassName('texto2').innerText;


    navigator.clipboard.writeText(text_copy)

    alert('Mensagem copiada!')

}


/* função que invalida acentos e maiúsculas */

function validText() {
    var reg = /[A-Z]|[À-Ú]|[à-ä]|[è-ë]|[ì-ï]|[ò-ö]|[ù-ü]/g;
    
    return reg.test(text.value)
   

}


