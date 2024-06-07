function appendNumber(number) {
    document.getElementById('inputDisplay').value += number;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('inputDisplay').value = '';
}

function deleteNumber() {
    let inputDisplay = document.getElementById('inputDisplay');
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

function calculate() {
    let inputDisplay = document.getElementById('inputDisplay');
    try {
        document.getElementById('display').value = eval(inputDisplay.value);
    } catch {
        document.getElementById('display').value = 'Erro';
    }
}

function calcular() {
    let inputDisplay = document.getElementById('inputDisplay').value;
    let resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    if (document.getElementById('checkMDC').checked) {
        // Cálculo do MDC
        resultados.innerHTML += `<p>MDC: ${mdc(inputDisplay)}</p>`;
    }
    if (document.getElementById('checkMMC').checked) {
        // Cálculo do MMC
        resultados.innerHTML += `<p>MMC: ${mmc(inputDisplay)}</p>`;
    }
    if (document.getElementById('checkDivisivel').checked) {
        // Verificação de divisibilidade
        resultados.innerHTML += `<p>Divisível: ${isDivisible(inputDisplay)}</p>`;
    }
    if (document.getElementById('checkPrimo').checked) {
        // Verificação de número primo
        resultados.innerHTML += `<p>Primo: ${isPrime(inputDisplay)}</p>`;
    }
    if (document.getElementById('checkPar').checked) {
        // Verificação de número par
        resultados.innerHTML += `<p>Par: ${isEven(inputDisplay)}</p>`;
    }
    if (document.getElementById('checkFatoracao').checked) {
        // Fatoração em primos
        resultados.innerHTML += `<p>Fatoração: ${primeFactors(inputDisplay)}</p>`;
    }
    if (document.getElementById('checkMultiplo').checked) {
        // Cálculo de múltiplos
        resultados.innerHTML += `<p>Múltiplo: ${multiples(inputDisplay)}</p>`;
    }
}

// Funções auxiliares para cálculos avançados (exemplos)
function mdc(numbers) {
    // Implementar cálculo de MDC
    return "Função MDC";
}

function mmc(numbers) {
    // Implementar cálculo de MMC
    return "Função MMC";
}

function isDivisible(number) {
    // Implementar verificação de divisibilidade
    return "Função Divisível";
}

function isPrime(number) {
    // Implementar verificação de número primo
    return "Função Primo";
}

function isEven(number) {
    // Implementar verificação de número par
    return "Função Par";
}

function primeFactors(number) {
    // Implementar fatoração em primos
    return "Função Fatoração";
}

function multiples(number) {
    // Implementar cálculo de múltiplos
    return "Função Múltiplos";
}
