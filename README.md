# 🌱 Calculadora de Emissões por Trajeto

<div align="center">

![Status](https://img.shields.io/badge/Status-Completo-success)
![Bootcamp](https://img.shields.io/badge/Bootcamp-DIO-blue)
![GitHub%20Copilot](https://img.shields.io/badge/GitHub%20Copilot-Powered-orange)

**Desafio de Projeto do Bootcamp "GitHub Copilot - Código na Prática" da DIO**

</div>

---

## 📋 Sobre o Projeto

Este projeto é um **desafio prático do bootcamp da DIO** focado em demonstrar como utilizar **GitHub Copilot para accelerar o desenvolvimento** de aplicações web modernas. A **Calculadora de Emissões por Trajeto** é uma ferramenta interativa que calcula o impacto ambiental de diferentes modos de transporte.

### 🎯 Objetivo

Demonstrar os benefícios do GitHub Copilot na criação de um projeto completo, desde a estrutura HTML5 semântica até a integração de gráficos dinâmicos com Chart.js, usando **prompts bem estruturados** como norte para autonomia e eficiência no desenvolvimento.

### 🚀 Como Acessar o Projeto

Você pode utilizar a calculadora agora mesmo, diretamente pelo seu navegador, sem a necessidade de baixar arquivos ou instalar nada em seu computador.
👉 **[Acesse a Calculadora Online Aqui](https://tatiisft.github.io/CalculadoraCO2/)**

---

## ⚙️ Funcionalidades

✅ **Seleção de Cidades** - Escolha entre 5 cidades do Nordeste Brasileiro
  - Recife, Salvador, Maceió, Fortaleza e Natal

✅ **Preenchimento Automático** - Distância preenchida automaticamente ao selecionar cidades

✅ **Seleção Visual de Transporte** - Ícones clicáveis em vez de selects tradicionais
  - 🏍️ Moto | 🚗 Carro | 🚌 Ônibus | ✈️ Avião

✅ **Cálculo Inteligente** - Baseado em fatores de emissão reais:
  - Moto: 0.08 kg CO2/km
  - Carro: 0.12 kg CO2/km
  - Ônibus: 0.03 kg CO2/km
  - Avião: 0.15 kg CO2/km

✅ **Visualização Comparativa** - Gráfico interativo comparando todos os modais

✅ **Equivalência em Árvores** - Mostra quantas árvores seriam necessárias para compensar a emissão

✅ **Design Responsivo** - Otimizado para Mobile, Tablet e Desktop

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno com Grid/Flexbox
- **JavaScript** - Lógica e interatividade
- **Chart.js** - Gráficos interativos
- **GitHub Copilot** - Assistência IA para desenvolvimento

---

## 📁 Estrutura do Projeto

```
CalculadoraCO2/
├── index.html          # Estrutura HTML5 semântica
├── style.css           # Estilos CSS3 responsivos
├── script.js           # Lógica JavaScript e Chart.js
└── README.md           # Este arquivo
```

---

## 📝 Prompts Utilizados para o GitHub Copilot

Este projeto foi desenvolvido utilizando prompts bem estruturados ao GitHub Copilot. Abaixo estão os principais comandos usados para criar cada seção do projeto:

### 1️⃣ **Estrutura HTML5**
```
"Crie a estrutura HTML5 para uma 'Calculadora de Emissões por Trajeto'. 
O layout deve incluir:
- Um header com título e uma frase curta sobre sustentabilidade.
- Um formulário com os campos: Ponto de Partida (texto), Ponto de Destino (texto), 
  Distância do Trajeto em km (número) e um select para Meio de Transporte 
  (Opções: Moto, Carro, Ônibus, Avião).
- Um botão de submissão 'Calcular Impacto'.
- Uma seção de resultados (#resultado) que conterá cards para: 
  Total de CO2 (kg) e Equivalência em Árvores.
- Importação de style.css e script.js. 
- Use tags semânticas (header, main, section, footer)."
```

### 2️⃣ **Design Dashboard Moderno**
```
"Para o style.css, crie um design moderno estilo 'Dashboard' para a calculadora de CO2. 
Use uma paleta de cores focada em Verde Floresta (#2d5a27), Branco Neve e Cinza Gelo.
- O formulário deve ter um layout de coluna única em mobile e duas colunas em desktop 
  (Grid ou Flexbox).
- Estilize os inputs com border-radius: 8px e um foco suave.
- O card de resultado deve aparecer com uma animação suave de fade-in e ter um 
  destaque visual (ex: borda colorida ou fundo levemente diferente).
- Adicione ícones genéricos (ou placeholders para FontAwesome) ao lado dos 
  campos de texto."
```

### 3️⃣ **Seleção Visual de Transporte**
```
"Coloque o meio de transporte como ícones clicáveis, podendo o usuário 
escolher de forma visual."
```

### 4️⃣ **Cálculo de Emissões**
```
"Para o script.js, implemente a lógica de cálculo baseada em fatores de 
emissão médios (kg CO2 por km).
- Capture a distância e o tipo de veículo do formulário.
- Use a seguinte tabela de referência para o cálculo (Distância * Fator):
  * Moto: 0.080 kg/km
  * Carro: 0.120 kg/km (média gasolina/flex)
  * Ônibus: 0.030 kg/km (por passageiro)
  * Avião: 0.150 kg/km (voos domésticos/curtos)
- Ao clicar em calcular, valide se a distância é maior que zero.
- Calcule o total de kg de CO2 e exiba no HTML.
- Adicione uma frase dinâmica: 'Para compensar este trajeto, você precisaria 
  de [X] árvores crescendo por um ano' (Considere 1 árvore = 15kg CO2/ano).
- Formate os números para duas casas decimais."
```

### 5️⃣ **Cidades e Distâncias Automáticas**
```
"Substitua os inputs de texto por dois campos select (Partida e Destino). 
Adicione as opções: Recife, Salvador, Maceió, Fortaleza e Natal. 
Logo abaixo, mantenha um campo numérico para 'Distância (km)', que será 
preenchido automaticamente ao selecionar as cidades, mas que permita edição manual.

Crie o script para a calculadora com as seguintes funcionalidades:
- Banco de Dados: Crie um objeto chamado distancias que armazene a quilometragem 
  entre as cidades (ex: 'Recife-Salvador': 800, 'Recife-Maceio': 200, etc. 
  Adicione pelo menos 5 combinações).
- Preenchimento Automático: Adicione um evento de mudança (change) nos 
  seletores de Partida e Destino. Quando ambos forem selecionados, o script 
  deve buscar a distância no objeto e preencher automaticamente o input de 
  'Distância (km)'.
- Seleção de Veículo: Implemente a lógica de clique nos cards de veículos, 
  adicionando a classe 'active' e armazenando o fator de emissão: 
  Moto (0.08), Carro (0.12), Ônibus (0.03), Avião (0.15).
- Cálculo Final: Ao clicar em calcular, multiplique a distância pelo fator 
  do veículo. Exiba o resultado em kg de CO2 e a quantidade de árvores (Total / 15).
- Validação: Se o usuário escolher a mesma cidade para partida e destino, 
  exiba um aviso de erro."
```

### 6️⃣ **Gráfico Comparativo com Chart.js**
```
"Adicione ao index.html:
- No <head>, inclua o script da CDN do Chart.js: 
  <script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>
- Na seção de resultados, abaixo dos cards de texto, adicione um container 
  para o gráfico: <div class=\"chart-container\"><canvas id=\"graficoComparativo\"></canvas></div>

No style.css, adicione estilos para o .chart-container:
- Defina um max-width: 100% e uma margin-top: 30px.
- Adicione um fundo branco leve, padding e bordas arredondadas para o 
  gráfico se destacar como um card de relatório.
- Garanta que o canvas seja responsivo para não quebrar o layout no celular.

No script.js, atualize a função de cálculo para:
- Criar um objeto de fatores de emissão: moto: 0.08, carro: 0.12, onibus: 0.03, 
  aviao: 0.15.
- Ao clicar em calcular, pegue a distância (preenchida automaticamente ou manual).
- Calcule o CO2 para cada um dos 4 tipos de transporte.
- Exiba o resultado do veículo selecionado em destaque nos cards de texto.
- Renderizar Gráfico: Use o Chart.js para criar um gráfico de barras verticais 
  (Bar Chart) comparando os 4 modais.
- O veículo selecionado pelo usuário deve ter uma cor diferente 
  (ex: Verde Escuro) das outras barras (ex: Cinza).
- O eixo Y deve representar 'kg de CO2'.
- Destrua o gráfico anterior antes de criar um novo para evitar sobreposição 
  (if (meuGrafico) meuGrafico.destroy())."
```

---

## 💡 Benefícios do GitHub Copilot Utilizados

✨ **Produtividade** - Códigos gerados automaticamente a partir de descrições claras

✨ **Qualidade** - Sugestões de boas práticas e padrões de código

✨ **Velocidade** - Desenvolvimento rápido de funcionalidades complexas

✨ **Aprendizado** - Compreensão de como implementar padrões modernos

✨ **Autonomia** - Grande parte do projeto criada com prompts estruturados

---

## 🎓 Sobre o Bootcamp

Este projeto é parte do bootcamp **"GitHub Copilot - Código na Prática"** da **DIO (Digital Innovation One)**, que demonstra como utilizar assistentes IA para:

- Criar projetos web completos com eficiência
- Implementar design moderno e responsivo
- Integrar bibliotecas JavaScript (Chart.js)
- Aplicar boas práticas de desenvolvimento
- Aproveitar a IA como ferramenta colaborativa

---

## 📊 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Floresta | `#2d5a27` | Primária (header, botões, destaque) |
| Branco Neve | `#f8f9fa` | Fundo claro |
| Cinza Gelo | `#e8eef0` | Fundo secundário |
| Verde Claro | `#4a7c3f` | Hover, gradientes |
| Verde Muito Claro | `#e8f3e6` | Fundo destacado |


---

## 🔧 Aprimoramentos Futuros

- [ ] Integrar banco de dados com rotas reais
- [ ] Adicionar histórico de cálculos
- [ ] Categoria de emissão por tipo de veículo
- [ ] Comparação com outras cidades
- [ ] Exportar resultado em PDF

---

## 📄 Licença

Este projeto é fornecido como parte do bootcamp da DIO e pode ser utilizado livremente para fins de aprendizado.

---

## 👨‍💻 Desenvolvido com GitHub Copilot

<div align="center">

**GitHub Copilot transformando a forma como desenvolvemos!** 🚀

</div>

