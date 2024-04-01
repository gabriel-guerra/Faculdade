# N-Layers
- src
   - domain/modules (Ex: produtos)
      - entity/schema (tabelas // relacionado com tabelas)
      - dto's
      - types
      - Repository (Abstrações substituindo implementações - [Solid](https://www.alura.com.br/artigos/solid?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=687448474447&hsa_src=g&hsa_tgt=dsa-2276348409543&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMIw_Hc0Y6EhQMVKWFIAB1YOgnuEAAYASAAEgLt2_D_BwE))
      - interfaces
      - controller (Recebe, delega e responde requisições HTTP)
      - service (Regra de negócio)
      - enums
   - rotas
 
Livro: [Engenharia de software moderna](https://engsoftmoderna.info/)


# Métodos HTTP usando CURL

### GET
```
curl http://localhost:3000/tarefa/pesquisar
```

```
curl http://localhost:3000/tarefa/pesquisar?associatedUser=gg
```

### POST
```
curl -X POST http://localhost:3000/tarefa/criar -H 'Content-Type: application/json' -d '{"title": "task1","description": "tarefa teste","creationDate": "01/04/2022","conclusionDate": "01/05/2022","category": "blue","status": "Criada","associatedUser": "gg"}'
```

### PUT
```
curl -X PUT http://localhost:3000/tarefa/atualizar?id=660ae7277533949b59bc352f -H 'Content-Type: application/json' -d '{"title": "task0","description": "tarefa teste","creationDate": "01/04/2023","conclusionDate": "01/05/2023","category": "blue","status": "Concluída","associatedUser": "Gabriel"}'
```

### DELETE

```
curl -X DELETE http://localhost:3000/tarefa/excluir?id=660ae7277533949b59bc352f
```