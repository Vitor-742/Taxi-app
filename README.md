
# Taxi-App com Typescript, Node.js, Express, Google Cloud Plataform, Sequelize e React

Este é um aplicativo de serviço de táxi que permite o usuário calcular o valor de uma corrida, obter informações detalhadas sobre a viagem por meio da Routes API do Google Cloud e escolher um motorista com base no preço e avaliação.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

1. **Backend**:
   - Construído em Typescript e Node.js utilizando o framework Express.
   - Faz integração com o Google Maps API para calcular as informações da viagem.
   - Gerencia os dados dos usuários, motoristas e corridas em um banco de dados MySQL com Sequelize.

2. **Frontend**:
   - Construído em React.
   - Permite ao usuário visualizar motoristas disponíveis e informações detalhadas da corrida.
   - Oferece uma interface intuitiva para realizar requisições ao backend.

## Funcionalidades

- Calcular o valor de uma corrida com base na origem e destino.
- Exibir uma lista de motoristas disponíveis, com avaliação e preço.
- Selecionar o motorista desejado.
- Consultar detalhes da viagem utilizando o Google Maps API.

## Configuração - Projeto completamente dockerizado

- Faça o clone do projeto
- Rode o comando ´docker-compose up´ para iniciar o projeto
- O Backend estará ativo na porta 8080
- O Frontend estará ativo na porta 80

## Tecnologias Utilizadas

### Backend
- Typescript / Node.js
- Express
- Sequelize
- Routes API, Google Cloud

### Frontend
- React / SPA
