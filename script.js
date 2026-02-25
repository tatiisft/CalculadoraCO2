// Script da Calculadora de Emissões por Trajeto

// ===========================
// Banco de Dados de Distâncias (km)
// ===========================
const distancias = {
    'Recife-Salvador': 800,
    'Recife-Maceió': 200,
    'Recife-Fortaleza': 780,
    'Recife-Natal': 300,
    'Salvador-Maceió': 620,
    'Salvador-Fortaleza': 1050,
    'Salvador-Natal': 1100,
    'Maceió-Fortaleza': 1000,
    'Maceió-Natal': 500,
    'Fortaleza-Natal': 480
};

// ===========================
// Fatores de Emissão (kg CO2 por km)
// ===========================
const FATORES_EMISSAO = {
    moto: 0.08,
    carro: 0.12,
    onibus: 0.03,
    aviao: 0.15
};

// Fator de compensação de árvores (kg CO2 por ano)
const CO2_POR_ARVORE_ANO = 15;

// ===========================
// Variáveis Globais
// ===========================
let veiculo_selecionado = null;
let meuGrafico = null;

// ===========================
// Inicialização
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const pontoPartida = document.getElementById('pontoPartida');
    const pontoDestino = document.getElementById('pontoDestino');
    const distanciaInput = document.getElementById('distancia');
    const transporteButtons = document.querySelectorAll('.icon-transporte');
    const transporteInput = document.getElementById('transporte');
    const formCalculadora = document.getElementById('formCalculadora');

    // ===========================
    // Preenchimento Automático de Distância
    // ===========================
    function preencherDistancia() {
        const partida = pontoPartida.value;
        const destino = pontoDestino.value;

        // Limpa o campo de distância se houver erro
        if (!partida || !destino) {
            distanciaInput.value = '';
            return;
        }

        // Verifica se as cidades são iguais
        if (partida === destino) {
            distanciaInput.value = '';
            return;
        }

        // Procura pela chave em ambas as ordens
        const chave1 = `${partida}-${destino}`;
        const chave2 = `${destino}-${partida}`;

        let distancia = distancias[chave1] || distancias[chave2];

        if (distancia) {
            distanciaInput.value = distancia;
        } else {
            distanciaInput.value = '';
        }
    }

    // Adiciona eventos de mudança nos selects
    pontoPartida.addEventListener('change', preencherDistancia);
    pontoDestino.addEventListener('change', preencherDistancia);

    // ===========================
    // Seleção de Transporte via Ícones
    // ===========================
    transporteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove classe 'active' de todos os botões
            transporteButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona classe 'active' ao botão clicado
            this.classList.add('active');

            // Armazena o veículo selecionado
            veiculo_selecionado = this.getAttribute('data-value');
            transporteInput.value = veiculo_selecionado;
        });
    });

    // ===========================
    // Cálculo de Emissões de CO2
    // ===========================
    formCalculadora.addEventListener('submit', function(e) {
        e.preventDefault();

        // Captura os valores do formulário
        const partida = pontoPartida.value.trim();
        const destino = pontoDestino.value.trim();
        const distancia = parseFloat(distanciaInput.value);
        const tipoTransporte = transporteInput.value;

        // Validação: cidades iguais
        if (partida === destino) {
            alert('❌ Erro: O ponto de partida e o ponto de destino não podem ser a mesma cidade.');
            return;
        }

        // Validação: partida selecionada
        if (!partida) {
            alert('Por favor, selecione um Ponto de Partida.');
            return;
        }

        // Validação: destino selecionado
        if (!destino) {
            alert('Por favor, selecione um Ponto de Destino.');
            return;
        }

        // Validação: distância preenchida
        if (isNaN(distancia) || distancia <= 0) {
            alert('Por favor, insira uma distância válida maior que zero.');
            return;
        }

        // Validação: transporte selecionado
        if (!tipoTransporte) {
            alert('Por favor, selecione um meio de transporte.');
            return;
        }

        // Calcula o CO2 emitido
        const fatorEmissao = FATORES_EMISSAO[tipoTransporte];
        const totalCO2 = (distancia * fatorEmissao).toFixed(2);

        // Calcula número de árvores necessárias
        const numArvores = Math.ceil(totalCO2 / CO2_POR_ARVORE_ANO);

        // Exibe os resultados
        exibirResultados(partida, destino, distancia, tipoTransporte, totalCO2, numArvores);
    });
});

// ===========================
// Função para Exibir Resultados
// ===========================
function exibirResultados(pontoPartida, pontoDestino, distancia, tipoTransporte, co2Total, numArvores) {
    const resultadoConteudo = document.getElementById('resultado-conteudo');

    // Mapeia ícone e nome do transporte
    const transporteIcones = {
        moto: { icone: '🏍️', nome: 'Moto' },
        carro: { icone: '🚗', nome: 'Carro' },
        onibus: { icone: '🚌', nome: 'Ônibus' },
        aviao: { icone: '✈️', nome: 'Avião' }
    };

    const transporte = transporteIcones[tipoTransporte];

    // HTML dos cards de resultado
    const html = `
        <div class="resumo-trajeto">
            <p><strong>Trajeto:</strong> ${pontoPartida} → ${pontoDestino}</p>
            <p><strong>Distância:</strong> ${parseFloat(distancia).toFixed(2)} km | <strong>Transporte:</strong> ${transporte.icone} ${transporte.nome}</p>
        </div>

        <div class="resultado-cards">
            <div class="card-resultado">
                <h3>💨 Total de CO2</h3>
                <div class="valor">${co2Total}</div>
                <div class="unidade">kg de CO2</div>
            </div>

            <div class="card-resultado">
                <h3>🌳 Equivalência em Árvores</h3>
                <div class="valor">${numArvores}</div>
                <div class="unidade">árvore${numArvores !== 1 ? 's' : ''} por 1 ano</div>
            </div>
        </div>

        <div class="mensagem-compensacao">
            <p>Para compensar este trajeto, você precisaria de <strong>${numArvores} árvore${numArvores !== 1 ? 's' : ''}</strong> crescendo por um ano.</p>
        </div>
    `;

    resultadoConteudo.innerHTML = html;

    // ===========================
    // Cálcula CO2 para todos os transportes
    // ===========================
    const co2Comparativo = {
        moto: (distancia * FATORES_EMISSAO.moto).toFixed(2),
        carro: (distancia * FATORES_EMISSAO.carro).toFixed(2),
        onibus: (distancia * FATORES_EMISSAO.onibus).toFixed(2),
        aviao: (distancia * FATORES_EMISSAO.aviao).toFixed(2)
    };

    // Renderizar gráfico comparativo
    renderizarGraficoComparativo(co2Comparativo, tipoTransporte, distancia);

    // Rola para a seção de resultados
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
}

// ===========================
// Função para Renderizar Gráfico Comparativo
// ===========================
function renderizarGraficoComparativo(co2Comparativo, tipoTransporte, distancia) {
    // Destrói o gráfico anterior se existir
    if (meuGrafico) {
        meuGrafico.destroy();
    }

    // Cores para as barras
    const cores = {
        moto: tipoTransporte === 'moto' ? '#2d5a27' : '#c5d9c1',
        carro: tipoTransporte === 'carro' ? '#2d5a27' : '#c5d9c1',
        onibus: tipoTransporte === 'onibus' ? '#2d5a27' : '#c5d9c1',
        aviao: tipoTransporte === 'aviao' ? '#2d5a27' : '#c5d9c1'
    };

    const dados = {
        labels: ['🏍️ Moto', '🚗 Carro', '🚌 Ônibus', '✈️ Avião'],
        datasets: [
            {
                label: `Emissão de CO2 (${distancia.toFixed(2)} km)`,
                data: [
                    parseFloat(co2Comparativo.moto),
                    parseFloat(co2Comparativo.carro),
                    parseFloat(co2Comparativo.onibus),
                    parseFloat(co2Comparativo.aviao)
                ],
                backgroundColor: [
                    cores.moto,
                    cores.carro,
                    cores.onibus,
                    cores.aviao
                ],
                borderColor: '#2d5a27',
                borderWidth: 1,
                borderRadius: 6
            }
        ]
    };

    const ctx = document.getElementById('graficoComparativo').getContext('2d');
    
    meuGrafico = new Chart(ctx, {
        type: 'bar',
        data: dados,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#2d5a27',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                },
                title: {
                    display: true,
                    text: 'Comparativo de Emissões de CO2 por Modal de Transporte',
                    color: '#2d5a27',
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    padding: 20
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kg de CO2',
                        color: '#2d5a27',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        color: '#5a5a5a',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(45, 90, 39, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#5a5a5a',
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}
