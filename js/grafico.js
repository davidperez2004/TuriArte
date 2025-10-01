// js/grafico.js

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('graficoEmprendimiento');

  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Playas', 'Hospedaje', 'Gastronomía', 'Artesanías', 'Turismo guiado'],
        datasets: [
          {
            label: 'Turbo',
            data: [12, 8, 15, 6, 10], // Valores de ejemplo
            backgroundColor: 'rgba(147, 51, 234, 0.7)'
          },
          {
            label: 'Necoclí',
            data: [10, 12, 9, 14, 7], // Valores de ejemplo
            backgroundColor: 'rgba(5, 150, 105, 0.7)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'Sectores con más emprendimientos en Turbo y Necoclí'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 2 }
          }
        }
      }
    });
  }
});
