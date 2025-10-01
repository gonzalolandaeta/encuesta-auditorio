let respuestas = JSON.parse(localStorage.getItem('respuestas')) || [];

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const sexo = document.getElementById('sexo').value;
  const ciudad = document.getElementById('ciudad').value;
  const utilidad = document.getElementById('utilidad').value;
  const recomendar = document.getElementById('recomendar').value;

  respuestas.push({ sexo, ciudad, utilidad, recomendar });
  localStorage.setItem('respuestas', JSON.stringify(respuestas));

  alert('Respuesta registrada');
  this.reset();
});

function mostrarEstadisticas() {
  if (respuestas.length === 0) {
    document.getElementById('estadisticas').innerText = 'No hay datos registrados.';
    return;
  }

  const total = respuestas.length;
  const recomendarSi = respuestas.filter(r => r.recomendar === 'Sí').length;

  document.getElementById('estadisticas').innerHTML = `
    <strong>Total registrados:</strong> ${total}<br>
    <strong>Recomiendan el evento:</strong> ${recomendarSi}
  `;
}
