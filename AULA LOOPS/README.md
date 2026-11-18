# 🔁 Aula de Loops em JavaScript

Material de uma aula particular para **um aluno que está começando a programar agora**. A ideia foi apresentar os laços de repetição (**loops**) com calma, partindo de uma revisão rápida do que ele já tinha visto e indo, passo a passo, até exercícios que juntam loops com `if/else`.

## 🎯 O que a aula cobre

| Parte | Conteúdo |
|---|---|
| **Revisão** | variáveis com `let`, `x = x + 1`, `+=`, `++`, `--`, comparações (`<=`, `>=`), o operador `%` (resto da divisão) e `if/else` |
| **Por que loops?** | imprimir de 1 a 7 "na mão" com vários `console.log`, para mostrar como isso fica repetitivo |
| **`for`** | contar de 1 a 5, pular de 2 em 2 e começar do 0 |
| **Exercícios com `for`** | contagem regressiva de 10 até 1 e a tabuada do 7 |
| **`while`** | juntar R$ 15 por semana até chegar em R$ 100 (repetir enquanto uma condição for verdadeira) |
| **Loops + `if/else`** | par ou ímpar, contar os múltiplos de 3 de 1 a 30 |
| **Desafio** | mostrar "TCHAMRAM" nos múltiplos de 5 e o número nos outros |

## 📁 Arquivos

```
AULA LOOPS/
├── loops.js     # todo o código da aula, na ordem em que foi visto
└── README.md
```

## ▶️ Como rodar

É preciso ter o [Node.js](https://nodejs.org) instalado. Dentro desta pasta, rode:

```bash
node loops.js
```

Todas as saídas aparecem no terminal, uma embaixo da outra, na mesma ordem do arquivo.

> Dica: para estudar uma parte de cada vez, comente (`//`) as partes que não quer ver, ou copie só o trecho para um arquivo novo.

## ⚠️ Cuidado com o loop infinito

No fim da parte do `while` tem um exemplo **comentado de propósito**:

```js
// let d = 0;
// while (d < 100){
//    console.log(d);
//}
```

Ele nunca termina, porque o `d` nunca aumenta, então a condição `d < 100` é sempre verdadeira. Se rodar sem querer, aperte **Ctrl+C** no terminal para parar.

## 👤 Autor

Aula preparada por **Isac Alves** ([@LHAMA-prog](https://github.com/LHAMA-prog)).
