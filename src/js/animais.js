document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById("video-baleia");
  var iframe = videoContainer.querySelector("iframe");

  // Adiciona o evento de clique à imagem da baleia
  document.getElementById("baleia").addEventListener("click", function (event) {
    event.stopPropagation(); // Impede que o clique na imagem propague para o documento
    videoContainer.style.display = "block"; // Exibe o vídeo ao clicar na imagem da baleia
  });

  // Adiciona o evento de clique ao documento para fechar o vídeo quando clicar fora dele
  document.addEventListener("click", function (event) {
    // Verifica se o clique ocorreu fora do vídeo e fora da imagem da baleia
    if (
      event.target !== iframe &&
      !iframe.contains(event.target) &&
      event.target.id !== "baleia"
    ) {
      videoContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById("video-tartaruga");
  var iframe = videoContainer.querySelector("iframe");

  document
    .getElementById("tartaruga")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      videoContainer.style.display = "block";
    });

  document.addEventListener("click", function (event) {
    if (
      event.target !== iframe &&
      !iframe.contains(event.target) &&
      event.target.id !== "tartaruga"
    ) {
      videoContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById("video-tubarao");
  var iframe = videoContainer.querySelector("iframe");

  document
    .getElementById("tubarao")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      videoContainer.style.display = "block";
    });

  document.addEventListener("click", function (event) {
    if (
      event.target !== iframe &&
      !iframe.contains(event.target) &&
      event.target.id !== "tubarao"
    ) {
      videoContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById("video-golfinho");
  var iframe = videoContainer.querySelector("iframe");

  document
    .getElementById("golfinho")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      videoContainer.style.display = "block";
    });

  document.addEventListener("click", function (event) {
    if (
      event.target !== iframe &&
      !iframe.contains(event.target) &&
      event.target.id !== "golfinho"
    ) {
      videoContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById("video-peixinho");
  var iframe = videoContainer.querySelector("iframe");

  document
    .getElementById("peixinho")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      videoContainer.style.display = "block";
    });

  document.addEventListener("click", function (event) {
    if (
      event.target !== iframe &&
      !iframe.contains(event.target) &&
      event.target.id !== "peixinho"
    ) {
      videoContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById("video-pinguim");
  var iframe = videoContainer.querySelector("iframe");

  document
    .getElementById("pinguim")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      videoContainer.style.display = "block";
    });

  document.addEventListener("click", function (event) {
    if (
      event.target !== iframe &&
      !iframe.contains(event.target) &&
      event.target.id !== "pinguim"
    ) {
      videoContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById("video-corais");
  var iframe = videoContainer.querySelector("iframe");

  document.getElementById("corais").addEventListener("click", function (event) {
    event.stopPropagation();
    videoContainer.style.display = "block";
  });

  document.addEventListener("click", function (event) {
    if (
      event.target !== iframe &&
      !iframe.contains(event.target) &&
      event.target.id !== "corais"
    ) {
      videoContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoContainer = document.getElementById("video-estrela-do-mar");
  var iframe = videoContainer.querySelector("iframe");

  document
    .getElementById("estrela-do-mar")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      videoContainer.style.display = "block";
    });

  document.addEventListener("click", function (event) {
    if (
      event.target !== iframe &&
      !iframe.contains(event.target) &&
      event.target.id !== "estrela-do-mar"
    ) {
      videoContainer.style.display = "none";
    }
  });
});
