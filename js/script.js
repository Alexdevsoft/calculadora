// Função para adicionar valores ao display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Função para limpar o display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Função para deletar o último caractere
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Função para calcular o resultado
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Usando eval para calcular expressões matemáticas
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}