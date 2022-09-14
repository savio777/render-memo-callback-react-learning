# hook-callback-js

## memo

- Componentes funcionais puros
- Componentes que serão renderizados várias vezes
- Renderizaçõies com os mesmos props
- Componentes de tamanho médio para grande

## useMemo

- Evitar re-cálculos complexos sem necessidade
- Igualdade referencial

## useCallback

- Resolver problemas de igualdade referencial

### onde são utilizados geralmente

- caso do state for array ou objeto
- caso do componente ter várias renderizações e você não quer que determinadas funções e componentes sejam renderizados novamente


[video](https://www.youtube.com/watch?v=NmU2nNehNNY)
