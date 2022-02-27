- A nova convenção é colocar o `<template>` **após** a tag script
- Um dos princípios do Typescript é to let Type Inference take care of the typing and only step in when type inference is not enough

- O erro que não permite `any` como Type inference provém de `strict: true` no `tsconfig.json`
- Type Inference também funciona muito bem para funções que são criadas inline com um argumento
  - Ao extrair a lógica para outro método, por vezes, precisamos tipar manualmente os parâmetros

- defineProps is a type of function called **Compiler Macro**
  - _Compiler macros_ are functions that only get executed in compile-time
  - Also, no need to be imported
  - And, the most important thing: the compiler macro can be used only within the script setup block
- Para fazer uma prop como opcional, this will be a two step process:
  - Use question mark
  - Use `withDefaults`
