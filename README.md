# 🧙‍♂️ O Enigma dos Pinóquios Mentirosos

Uma aplicação web interativa que resolve o clássico problema lógico dos Pinóquios mentirosos, onde cada personagem faz uma afirmação sobre quantos do grupo estão mentindo.



## 🚀 Funcionalidades

- **Interface moderna** com efeitos visuais elegantes
- **Solução automática** do enigma dos Pinóquios mentirosos
- **Visualização detalhada** dos resultados:
  - Número mínimo de mentirosos
  - Lista de Pinóquios mentirosos
  - Explicação lógica da solução
- **Totalmente responsivo** para mobile e desktop
- **Animações interativas** nos botões

## 🧩 O Problema Lógico

Cada Pinóquio faz uma afirmação sobre quantos no grupo estão mentindo:
- Se um Pinóquio **diz a verdade**, sua afirmação deve ser igual ao número real de mentirosos
- Se um Pinóquio **mente**, sua afirmação deve ser diferente do número real de mentirosos

**Exemplo:**
- Entrada: `[2, 3, 1, 1]`
- Saída: `2` mentirosos (Pinóquios 2, 3 e 4, mas apenas 2 mentiras são consistentes)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e design responsivo)
- JavaScript (lógica do problema)

🧠 Lógica Implementada
O algoritmo testa todas as possibilidades de número de mentirosos (de 0 a N) e verifica a consistência:

javascript
for (let liarsCount = 0; liarsCount <= n; liarsCount++) {
    let actualLiars = 0;
    for (const claim of claims) {
        if (claim !== liarsCount) actualLiars++;
    }
    if (actualLiars === liarsCount) return liarsCount;
}
🌈 Estilo e Design
Cores temáticas: Vermelho (#ff0044) e Azul (#00ccff)

Efeitos visuais:

Botões com animação de borda

Container com vidro fosco (glassmorphism)

Transições suaves

Layout:

Posicionado à esquerda em desktop

Centralizado em mobile

📱 Responsividade
O design se adapta a diferentes tamanhos de tela:

css
@media (max-width: 768px) {
    .container {
        width: 95%;
        padding: 1.5rem;
    }
    .button-group {
        flex-direction: column;
    }
}
