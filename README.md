## Instalar packages
De dentro da pasta do projeto execute o comando para instalar os packages necessários
```
npm install
```

## Altere a URL da API de notícias
Para fins de testes, enquanto estiver executando o servidor [WebAPI](https://github.com/leonh4rd/provaws-webapi),
altere no arquivo *App.js* a propriedade *source* do component <News/> com o endereço da API

```
<News source='https://localhost:44332/api/noticias'/>
```

## Execute
```
npm start
```
