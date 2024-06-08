const ctx = document.getElementById("sharkRayChart").getContext("2d");
const data = {
  labels: [
    "Criticamente Ameaçadas",
    "Ameaçadas de Extinção",
    "Vulneráveis",
    "Quase Ameaçadas",
    "Menos Preocupantes",
    "Dados Deficientes",
  ],
  datasets: [
    {
      data: [2, 4, 11, 13, 23, 47],
      backgroundColor: [
        "#FF0000",
        "#FFA500",
        "#FFFF00",
        "#ADFF2F",
        "#00FF00",
        "#808080",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value, context) => {
          return value + "%";
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 16,
        },
        anchor: "center",
        align: "center",
      },
    },
  },
  plugins: [ChartDataLabels],
};

const sharkRayChart = new Chart(ctx, config);

var swiper = new Swiper(".slide-container", {
  slidesPerView: 2, // Mostra 2 slides por vez
  slidesPerGroup: 1, // Passa 1 slide por vez
  spaceBetween: 30, // Espaço entre os slides
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 2,
    },
  },
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("oceanPollutionChart").getContext("2d");

  const data = {
    labels: ["Plástico", "Metal", "Vidro", "Papel", "Outros"],
    datasets: [
      {
        label: "Quantidade de Poluição (toneladas)",
        data: [8000, 3000, 2000, 1000, 1500],
        backgroundColor: ["red", "yellow", "green", "blue", "aquamarine"],
        borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            boxWidth: 0, // Remove a caixa colorida
          },
        },
      },
    },
  };

  const oceanPollutionChart = new Chart(ctx, config);
});
