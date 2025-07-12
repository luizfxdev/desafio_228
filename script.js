document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculate');
  const backBtn = document.getElementById('back');
  const claimsInput = document.getElementById('claims');
  const resultDiv = document.getElementById('result');

  calculateBtn.addEventListener('click', function () {
    const claimsText = claimsInput.value.trim();
    const claims = claimsText.split(',').map(item => parseInt(item.trim()));

    if (claims.some(isNaN)) {
      resultDiv.innerHTML = '<p class="error">Por favor, insira números válidos separados por vírgulas.</p>';
      return;
    }

    const solution = findMinLiars(claims);
    displayResult(claims, solution, resultDiv);
  });

  backBtn.addEventListener('click', function () {
    claimsInput.value = '';
    resultDiv.innerHTML = '';
  });
});

// Função corrigida para encontrar o número mínimo de mentirosos
function findMinLiars(claims) {
  const n = claims.length;

  // Verificar todas as possibilidades de número de mentirosos (de 0 a n)
  for (let liarsCount = 0; liarsCount <= n; liarsCount++) {
    let actualLiars = 0;

    // Contar quantos Pinóquios estão mentindo (aqueles cuja afirmação != liarsCount)
    for (const claim of claims) {
      if (claim !== liarsCount) {
        actualLiars++;
      }
    }

    // Se o número de mentirosos contados bate com o que estamos testando, encontramos a solução
    if (actualLiars === liarsCount) {
      return liarsCount;
    }
  }

  // Se nenhum número for consistente (teoricamente não deveria acontecer com entradas válidas)
  return -1;
}

function displayResult(claims, liarsCount, resultDiv) {
  if (liarsCount === -1) {
    resultDiv.innerHTML =
      '<p class="error">Não foi possível encontrar uma solução consistente para as afirmações fornecidas.</p>';
    return;
  }

  const liarsIndices = [];
  for (let i = 0; i < claims.length; i++) {
    if (claims[i] !== liarsCount) {
      liarsIndices.push(i + 1); // +1 para tornar base 1
    }
  }

  const numberWords = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
  const liarsWord = numberWords[liarsCount] || liarsCount.toString();

  let html = `
        <p><strong>Afirmações analisadas:</strong> [${claims.join(', ')}]</p>
        <p><strong>Menor número de mentirosos possível:</strong> ${liarsCount}</p>
        <p><strong>Por extenso:</strong> ${liarsWord}</p>
        <p><strong>Pinóquios mentirosos:</strong> ${liarsIndices.length > 0 ? liarsIndices.join(', ') : 'Nenhum'}</p>
        <p class="explanation">Explicação: ${liarsCount} Pinóquios estão mentindo porque suas afirmações (${liarsIndices
    .map(i => claims[i - 1])
    .join(', ')}) não correspondem ao número real de mentirosos (${liarsCount}). Os outros estão dizendo a verdade.</p>
    `;

  resultDiv.innerHTML = html;
}
