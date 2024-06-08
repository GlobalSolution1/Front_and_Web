let imagens = [
  "src/assets/img/sustentabilidade/carrousel/banner1.jpg",
  "src/assets/img/sustentabilidade/carrousel/banner2.jpg",
  "src/assets/img/sustentabilidade/carrousel/banner3.jpg",
]; //ARRAY DE IMAGENS
let index = 0; //INICIO DA POSIÇÃO 0
let time = 3000; //TEMPO EM QUE AS IMAGENS VÃO PASSAR 3SEGUNDOS

//FUNÇÃO SLIDESHOW
function slideShow() {
  //PEGA O ID REFERENCIA NO ARRAY DE IMAGENS E SUA POSIÇÃO QUE É 0
  document.getElementById("imgBanner").src = imagens[index];
  index++; //INCREMENTO EM CADA IMAGEM DENTRO DO ARRAY

  //SE O INDEX ESTIVER COM COM A CONTAGEM DE IMAGENS CERTAS
  if (index == imagens.length) {
    index = 0; //VOLTA PARA A POSIÇÃO 0
  }
  //função que define regras de tempo
  setTimeout("slideShow()", time);
}
//executando a função
slideShow();
