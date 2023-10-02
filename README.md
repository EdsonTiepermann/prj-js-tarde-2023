# prj-js-tarde-2023
Repostório do projeto de JavaScript 2023

Realizar o fork e o clone do repositório  prj-js-tarde-2023

-Primeira parte

Criar uma tela de login com campos para inserir o login e senha, tabmém um botão para realizar o evento e ação de logar.

Realizar a buscar do login e senha no arquivo json disponível em seu repositório através de uma requisição Ajax.

Se o retorno do arquivo for positivo deverá conter no começo da página "Seja bem vindo ....." contendo o nome disponível no arquivo.


-Segunda parte

Streaming de filmes:
Após o login a próxma tela o usuário irá realizar a busca de um filme através do nome do filme, a lista com os filmes deverá aparecer
através do consumo da api imdb.

Dicas:
- Parâmetro 'S' é para uma busca geral, tudo que conter o nome do filme digitado
http://www.omdbapi.com/?s=${search}&apikey= 

- Parâmetro 'T' é para busca única, somente o que foi digitado 
http://www.omdbapi.com/?t=${search}&apikey=

- Na primeira página, mostrar os filmes relacionado à busca, com a capa dos filmes. Quando clicar no filme específico, mostrar na próxima tela:
  
- Mostrar a capa do filme.
- Mostrar o nome do filme.
- Mostrar a nota do filme.
- Mostrar a sinopse do filme.
- Mostrar o gênero do filme.
- Mostrar a classifição do Filme:

A classificação deve ser mostrada como abaixo:

Se a Classificação do retorno da API for G - Classificação livre.

Se a Classificação do retorno da API for PG - Orientação dos Responsáveis

Se a Classificação do retorno da API for PG-13 - classificação 14 anos

Se a Classificação do retorno da API for R - classificação 16 anos

Se a Classificação do retorno da API for NC – 17 - classificação 18 anos

----------- Endereço da API para documentação e solicitar uma chave (key) ------------------------

http://www.omdbapi.com/

-------------------------------------------------------------------------------


-Links para serem usados como inspiração e exemplo para a busca dos filmes:

https://ohmydb.netlify.app/

https://www.adorocinema.com/vod/
