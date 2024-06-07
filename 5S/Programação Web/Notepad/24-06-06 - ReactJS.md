# ReactJS

É uma biblioteca (pode ser usado por CDN) de JavaScript para frontend mantida pelo facebook. Pode ser usado para desenvolver para desktop, web e mobile.

Por que react?
- Reutilizável: Componentes reutilizados em diversas partes da aplicação
- Declarativo: Criar UIs de forma mais fácil e intuitiva
- Eficiente: Virtual DOM para atualizar apenas o que foi alterado
- Flexível: Pode ser utilizado com bibliotecas/frameworks
- Comunidade: Grande comunidade de devs e bibliotecas

Apesar de a maioria dos códigos React serem escritos em JSX, o React pode ser utilizado com JS nativo.

_MAS, utilizar o JSX faz muito sentido._

O JSX é uma extensão de sintaxe que permite escrever HTML dentro do JavaScript. Para que isso funcione, é necessário fazer uma configuração (que normalmente é feita por CLI em alguns frameworks). 

Como isso tudo acontece?
Através do **Virtual DOM** que é uma representação em memória da DOM, utilizada para otimizar a atualização da DOM. Toda vez que um componente é atualizado, o React renderiza, compara com a DOM real e faz os ajustes.

Os componentes são funções declaras com letra maiúscula e são informadas no JSX como uma tag orfã de html
```
function Componente(){
  return <h1>retorna h1</h1>
}

ReactDom.render(<Componente />, document.getElementById('root'));
```
OBS: como no exemplo acima o dado retornado é estático, faz mais sentido ser uma `const` em vez de `function`

### Props
`Props` são as propriedades passadas para um componentes e são usadas para passar dados de um componente pai para o filho. (Ou seja, são os parâmetros para as funções JS)

Podemos fazer um destruct dos objetos (em vez de props -> `props.name` | `{ name, exemple }`). Também é possível passar valor padrão ou operadores ternários: 
```
{ name = "nome padrão" }
{ name ? name : "default" }
```

### Hooks 
Funções que permitem adicionar funcionalidades aos componentes (estado, ciclo de vida).

Alguns hooks mais utilizados: `useState`, `useEffect`, `useContext`, `useReducer`, `useRef`, `useMemo`, `useCallback`

Controladores de estados: 
o Hook `useState` é usado para manipular o estado de um componente; retorna um array com a posição 0 sendo o estado e a posição 1 sendo a função que modifica o estado. 

Ciclo de vida: 
Adiciona efeitos a um componente, pode ser utilizado para executar código assíncrono e algo como um eventListener que reexecuta funções.
