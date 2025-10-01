let respuestas = JSON.parse(localStorage.getItem('respuestas')) || [];

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const edad = parseInt(document.getElementById('edad').value);
  const educacion = document.getElementById('educacion').value;
  const interes = document.getElementById('interes').value;
  const repetir = document.getElementById('repetir').value;

  respuestas.push({ edad, educacion, interes, repetir });
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
  const promedioEdad = Math.round(respuestas.reduce((acc, r) => acc + r.edad, 0) / total);
  const interesAlto = respuestas.filter(r => r.interes === 'Alto').length;
  const repetirSi = respuestas.filter(r => r.repetir === 'Sí').length;

  document.getElementById('estadisticas').innerHTML = `
    <strong>Total registrados:</strong> ${total}<br>
    <strong>Edad promedio:</strong> ${promedioEdad} años<br>
    <strong>Interés alto:</strong> ${interesAlto}<br>
    <strong>Repetirían sesión:</strong> ${repetirSi}
  `;
}

