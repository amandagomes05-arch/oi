function calcularSementes() {
    // Captura o elemento do input e o elemento onde exibiremos o resultado
    const areaInput = document.getElementById("area");
    const resultadoDiv = document.getElementById("resultado");
    
    // Converte o valor digitado para número
    const area = parseFloat(areaInput.value);
    
    // Validação: Verifica se o campo está vazio, se é menor ou igual a zero
    if (isNaN(area) || area <= 0) {
        resultadoDiv.className = "erro"; // Aplica estilo de erro do CSS
        resultadoDiv.innerText = "Por favor, insira um valor de área válido e maior que zero!";
        return; // Para a execução do código aqui
    }
    
    // Lógica do cálculo: Média de 20 sementes por metro quadrado
    const sementesPorMetro = 20;
    const totalSementes = area * sementesPorMetro;
    
    // Exibe o resultado limpando estilos anteriores e aplicando classe de sucesso
    resultadoDiv.className = "sucesso";
    resultadoDiv.innerHTML = `Para cultivar uma área de <strong>${area} m²</strong>, você precisará de aproximadamente <strong>${totalSementes} sementes</strong> de hortaliças.`;
}

// Limpa a resposta antiga assim que o usuário começa a digitar um novo valor
document.getElementById("area").addEventListener("input", function() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = "";
    resultadoDiv.className = ""; 
});
