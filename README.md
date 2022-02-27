<h1 align="center">
  <img src="./my-app/src/assets/code_typing.svg" alt="Logo do projeto" title="Logo do projeto" />

  <p align="center">
    <img src="https://img.shields.io/badge/license-MIT-%23536DFE" alt="License">
    <img src="https://img.shields.io/badge/Vue-3-%23536DFE" alt="Vue 3" />
    <img src="https://img.shields.io/badge/Setup-Syntax-%23536DFE" alt="Setup Syntax" />
  </p>
</h1>

<br>

## 📚 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

Esse simples repositório foi criado a partir da [Free Weekend - TypeScript with Vue 3 Friendly](https://www.vuemastery.com/typescript-free-weekend/), seguindo as dicas e instruções do professor ao longo das 6 aulas exibidas.

## 🌟 Objetivo

O principal objetivo deste curso é demonstrar a nova `setup syntax` e as facilidades que ela traz com relação ao uso de **TypeScript** em projetos **Vue.js**.

## 🚀 Como executar

- Clone o repositório
- Instale as dependências com `npm i`
- Execute o servidor com `npm run dev`

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.

## ✏️ Anotações

### Aula 1

- A nova convenção é colocar o `<template>` **após** a tag `<script></script>`
- Um dos princípios do Typescript é deixar o _Type Inference_ tomar conta da tipagem e somente "interferir" quando ele não for suficiente

### Aulas 2 e 3

- O erro que não permite `any` como Type inference provém de `strict: true` no `tsconfig.json`
- Type Inference também funciona muito bem para funções que são criadas inline com um argumento
  - Ao extrair a lógica para outro método, por vezes, precisamos tipar manualmente os parâmetros

### Aulas 4 e 5

- `defineProps` é um tipo de função chamada **Compiler Macro**
  - _Compiler macros_ são funções que somente serão executadas em tempo de compilação
  - Também, não precisam ser importadas
  - E, o mais importante: o `compiler macro` só pode ser usado em um bloco `<script setup>`
- Para fazer uma prop como opcional, precisaremos passar por um processo de dois passos:
  - Usar o ponto de interrogação na declaração da prop
  - Usar `withDefaults`
- Compiler macros:
  - `defineProps`
  - `withDefaults`
  - `defineEmits`

### Aula 6 - Bõnus

- As principais diferenças de Vue.js e React.js no suporte para TS são:
  - Filosofia: **React.js** => Máximo de Funcionalidades Nativas da Linguagem | **Vue.js** => Framework-Level Compilers
  - Força: **React.js** => API menor e mais enxuta | **Vue.js** => API mais amigável para o desenvolvedor

---

<p align="center">Feito com :dart: por <a href="https://www.linkedin.com/in/joaodos3v/" target="_blank" rel="noopener noreferrer">João Vitor Veronese Vieira</a> :boy:</p>
