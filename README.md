- A nova convenção é colocar o `<template>` **após** a tag script
- Um dos princípios do Typescript é to let Type Inference take care of the typing and only step in when type inference is not enough

- O erro que não permite `any` como Type inference provém de `strict: true` no `tsconfig.json`
- Type Inference também funciona muito bem para funções que são criadas inline com um argumento
  - Ao extrair a lógica para outro método, por vezes, precisamos tipar manualmente os parâmetros
