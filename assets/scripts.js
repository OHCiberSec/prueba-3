function calcular() {
    var total = Array.from(document.querySelectorAll('.cantidad'))
      .reduce(function(total, input) {
        return total + parseInt(input.value) || 0;
      }, 0);
  
    var resultadoParrafo = document.getElementById('resultado');
    resultadoParrafo.textContent = total <= 10
      ? `Llevas `+ total + ` stickers.`
      : 'Llevas demasiados stickers.';
  }
  
  document.addEventListener('input', calcular);
  