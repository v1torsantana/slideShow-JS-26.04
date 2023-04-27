let msg = document.getElementById('msg')

const usuarios = [
    {nome: "Huguinho", idade: 18},
    {nome: "Zezinho", idade: 19},
    {nome: "WAVEZINHO RUINDADE PURA", idade: 20},
];

const Users = usuarios.length
for(let i=0; i<Users; i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade} </p>`
}

/*criando um array de imagem*/

var images=[
    'img/wav2.jpg',
    'img/wave.jpg',
    'img/wave3.jpg'
];

/* declarando as variáveis */
var Index = 0;
var time = 3000;

/* criando uma função */
function slideShow(){
    /* busca o id e o caminh das imagens */
    document.getElementById('image').src=images[Index]
    Index++ /* incrementa */
    if(Index == images.length)/* verifica se tem as imagens e conta */{Index= 0}
        setTimeout("slideShow()", time)/*definindo o tempo de 2 segundos cada imagem */
}
slideShow();