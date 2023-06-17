function printColumns(data) {
  // Defina o tamanho fixo de cada coluna
  const columnWidth = 20;

  // Imprima os títulos das colunas
  console.log('Coluna 1'.padEnd(columnWidth), 'Coluna 2'.padEnd(columnWidth));

  // Imprima os dados em colunas
  data.forEach(row => {
    console.log(row.column1.toString().padEnd(columnWidth), row.column2.toString().padEnd(columnWidth));
  });
}

// Exemplo de dados
const data = [
  { column1: 'Valor 1', column2: 'Valor 2' },
  { column1: 'Valor 3', column2: 'Valor 4' }
];

// Chame a função para imprimir as colunas
printColumns(data);