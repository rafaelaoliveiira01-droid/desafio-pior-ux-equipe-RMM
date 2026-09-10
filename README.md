# Desafio: Pior UX

## Sobre o Projeto

Este projeto foi desenvolvido para demonstrar, de forma prática,
como decisões ruins de UI e UX podem prejudicar a experiência do usuário.

A proposta consiste em criar um formulário propositalmente confuso,
com problemas de navegação, feedback, acessibilidade e consistência.

Apesar dos problemas, o fluxo continua funcional e permite que o usuário
chegue até a tela final.

## Tecnologias

- HTML5
- CSS3
- JavaScript


### Interações Propositalmente Ruins
1. Avisos desnecessários

Ao entrar no site, diversos avisos aparecem informando coisas que não ajudam o usuário.

Exemplo:

"Seu computador está funcionando normalmente."

Problema de UX

Essas mensagens não possuem informações relevantes e interrompem o fluxo principal.

Princípio violado

Estética e design minimalista, pois informações desnecessárias são apresentadas ao usuário.

Como corrigir

Em uma aplicação profissional, somente mensagens relevantes para a tarefa deveriam ser exibidas.

 2. Botões confusos

Alguns botões possuem nomes ou cores que não correspondem à ação realizada.

Por exemplo:

"AVANÇAR" com aparência de botão diferente;
"CANCELAR" aparecendo como uma ação de destaque;
botão importante pouco visível.
Princípio violado

Consistência e padrões.

O usuário espera que os botões tenham aparência e comportamento coerentes com suas funções.

Como corrigir

Os botões deveriam possuir:

nomes claros;
cores coerentes;
posição previsível;
comportamento correspondente ao texto apresentado.

3. Página de zoeira

Existe um botão propositalmente chamativo:

⚠️ NÃO CLIQUE AQUI

Quando o usuário clica, ele é levado para uma página que brinca com a situação.

A página apresenta mensagens como:

"VOCÊ CAIU NESSA. KKKKK"

Depois existe a opção:

🔙 VOLTAR PARA O CADASTRO

Objetivo

Demonstrar como uma ação inesperada pode interromper o fluxo do usuário.

Problema de UX

O usuário é levado para uma página que não estava esperando visitar.

Como corrigir

Em um sistema real, o botão deveria indicar claramente sua finalidade e não levar o usuário para uma página sem relação com a tarefa.

4. Validação de senha complicada

O usuário pode escolher qualquer senha, porém ela precisa seguir várias regras:

exatamente 8 caracteres;
pelo menos uma letra maiúscula;
pelo menos uma letra minúscula;
pelo menos um número;
pelo menos um caractere especial;
não pode começar com número;
não pode terminar com número.

A senha também precisa ser digitada novamente para confirmação.

Problema de UX

As regras são apresentadas de forma exagerada e podem causar dificuldade desnecessária.

Princípio violado

Prevenção de erros e facilidade de uso.

Como corrigir

Uma interface profissional poderia apresentar as regras de maneira clara, indicando em tempo real quais requisitos já foram atendidos.

 5. Botões que mudam de posição

Ao clicar em determinados botões, eles podem mudar de posição.

Problema de UX

O usuário perde a referência visual de onde determinada ação está localizada.

Princípio violado

Consistência e padrões e controle e liberdade do usuário.

Como corrigir

Os elementos importantes deveriam permanecer em posições previsíveis.

Carregamento falso

Depois que o usuário consegue criar uma senha válida, o sistema apresenta mensagens como:

Verificando servidor...
Autenticando usuário...
Problema inesperado...

Antes de levar o usuário para outra página.

Problema de UX

O sistema cria expectativa de que está realmente realizando uma operação, mesmo sendo apenas uma simulação.

Como corrigir

Em uma aplicação real, o carregamento deveria representar uma operação verdadeira e informar corretamente seu estado.

## Proposta de Correção

Em uma interface profissional:

- Os botões deveriam possuir nomes claros.
- As cores deveriam indicar corretamente cada ação.
- As mensagens de erro deveriam explicar o problema.
- Os campos deveriam informar claramente o que é obrigatório.
- O contraste deveria seguir boas práticas de acessibilidade.
- A navegação deveria ser previsível.

## Equipe

- Maria Eduarda S. Coelho; scmadu
- Mariana V. Schmitt; marianavschmitt-star
- Rafaela R. S. de Oliveira; rafaelaoliveiira01-droid

