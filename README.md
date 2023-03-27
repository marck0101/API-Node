- ```npm init -y``` 
comando para iniciar o projeto com dependências sem ter que ficar respondendo perguntas

- ```npm install express nodemon mongoose ```
instalando as primeiras dependencias necessárias para criar uma API

- Em <strong>package.json</strong> vamos em <strong>script</strong> e adicionamos
```"start": "nodemon ./index.js localhost 3333"```

<p>Aqui estou dizendo para inicializar o meu projeto na porta 3333

Essa aplicação é de desenvolvimento, se fosse uma aplicação real, colocaria separado em SaveDev
</p>

- criamos nosso index.js

- ```npm start```

- importa o express e logo em seguida inicializa ele 
- middlewares para ler para poder receber e enviar json
- Disponibilizar uma porta para o navegador receber nossa aplicação
- criar endpoint
- criando minha data base no mongo db 
- cria model do mongoose
- no Postman começa a criar primeiros endpoints
- get, post, read & update"# NodeJs" 

- Ajusta a questão de boas práticas colocando o CRUD dentro de uma pasta de routers