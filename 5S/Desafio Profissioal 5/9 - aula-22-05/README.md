# Conceitos fundamentais sobre o ciclo de vida do JS

## STRICT MODE
Em 2015 uma nova diretiva foi adicionada ao JS com uma série de regras que têm como objetivo evitar erros semânticos silenciosos do JS.

## USE STRICT 
Já é usado como padrão em transpiladores como: TypeScript e Babel e é algo precioso para que evitemos erros em produção de forma inesperada.
- Pesquisar W3, MDN sobre

## Call Stack
É uma pilha de Operações onde é armazenado a sequência de ações que um programa vai executar linha por linha.\
Algo como um callback que chama outro callback que chama outro callback de forma ordenada. O callstack é usado para guardar as execuções futruas de execução do nosso programa, seguindo a estrutura de dados `pilha`: por padrão Fist In, Last Out (FILO).\
Assim ele adiciona a chamada da função no topo da pilha, a exetuca e então a remove logo depois que todo o código foi executado.

Já que as chamadas de JS acontecem de forma assíncrona, ela usa o callstack para entender sobre como executar essa quantidade de instruções de forma ordenada.\
É basicamente uma tabela onde a chave é o endereço de memória e o valor pode ser um tipo `primitivo` de dado ou um apontamento para outro `endereço de memória`.

Além disso, é o lugar onde todos os valores que são os tipos primitivos como: string, bigInt, boolean, number, undefined e symbol são armazenados. So que aí surge um problema, se só podemos armazenar tipos primitivos na callstack como é que executamos funções, manipulamos variáveis ou arrays que podem crescer dinamicamente? É aí que entra a memory heap.

## Memory Heap
A memory heap ou a pilha de memória é o lugar onde são armazenados os endereços de memória que podem ser apontados pelo callstack para trabalhar os `valores de variáveis`, `funções`, `objetos`, `arrays`, etc. \
A grande diferença entre callstack e memory heap do ponto de vista de `armazenamento` é que o callstack guarda dados de tipo de valor `primitivo` enquanto o memory heap guarda dados de `tipo de referência`, que podem crescer dinamicamente como funções, arrays e outros.

Resumindo: callstack é a pilha de execução de funções e o memory heap é a pilha de memória para guardar os dados de tipo de referência. Em JS temos 7 tipos de dados considerados primitivos. São eles:
- String
- Number
- Boolean
- BigInt
- Undefined
- Symbol
- Null
