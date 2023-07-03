# Games ReviewBoard

Este é um pequeno projeto para fazer uso de teste da tipagem de TypeScript e de suas outras ferramentas.

O tema escolhido foi uma API para espécie de site de reviews para jogos, na qual você deve realizar o cadastro e pode fazer operações básica com CRUD. Você pode criar uma review para cada um dos jogos já existentes no banco de dados, dando uma nota e uma descrição opcional. Depois disso, você pode recuperar todas as reviews feitas para um jogo além de atualizar e deletar as de sua autoria.

### Endpoints

#### Review Endpoints

- GET /reviews/:gameId
   - Rota que recupera todas as reviews feitas de um jogo
    
- POST /reviews/:gameId **(Auth)**
    - Rota para adicionar sua própria review sobre um jogo 
     - Body: { "revDescripton": "Jogo bom demais esse!", "score": 100 }
- DELETE /reviews/:gameId **(Auth)**
    - Rota para deletar sua review feita para um jogo
- PATCH /reviews/:gameId **(Auth)**
    - Rota para trocar os valores de uma review já feita por você
     - Body: { "revDescripton": "Mudei de ideia, jogo mais ou menos...", "score": 60 }

#### Game Endpoints

- GET /games
 - Rota para recuperar lista de jogos

#### User Endpoints (rotas de login)

- POST /sign-up
   - Body: {
  "username": "fernando",
  "email": "testes@teste.com",
  "password":"senha_secreta"
}
- POST /sign-in 
   - Body: {
  "email": "testes@teste.com",
  "password":"senha_secreta"
}
