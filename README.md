# Games ReviewBoard

Este é um pequeno projeto para fazer uso de teste da tipagem de TypeScript e de suas outras ferramentas.

O tema escolhido foi uma API para espécie de site de reviews para jogos, na qual você deve realizar o cadastro e pode fazer operações básica com CRUD. Você pode criar uma review para cada um dos jogos já existentes no banco de dados, dando uma nota e uma descrição opcional. Depois disso, você pode recuperar todas as reviews feitas para um jogo além de atualizar e deletar as de sua autoria.

### Endpoints

- GET /reviews/:gameId
    
- POST /reviews/:gameId (Rota com Auth)
     - Body: { "revDescripton": "Jogo bom demais esse!", "score": 100 }
- DELETE /reviews/:gameId (Rota com Auth), 
- PATCH /reviews/:gameId
     - Body: { "revDescripton": "Mudei de ideia, jogo mais ou menos...", "score": 60 }

