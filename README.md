# Desafio Ruptiva

<h1 align="center">
    <br/>
   <a href="https://nodejs.org/en/" target="_blank" rel="noopener">NodeJS</a>
</h1>

## Sobre o projeto

O projeto é um desafio formulado pela equipe da Ruptiva, onde foi construída uma API com Node.js + Express.

## Tecnologias Utilizadas

- <a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>

- <a href="https://expressjs.com/pt-br/" target="_blank" rel="noopener">Express</a>

- <a href="https://typeorm.io/" target="_blank" rel="noopener">TypeORM</a>

### Utilização

Para a utilizar a API, basta seguir as instruções abaixo:

- Que você tenha instalado o **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>**
- Que você tenha instalado o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou o **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">YARN</a>**

### Passos para utilizar

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/HumbertoF98/desafio-ruptiva.git
  # Entre na pasta raiz da aplicação
  $ cd desafio-ruptiva
```

2. Instalando dependências

```sh
  # Instale as dependências da aplicação
  $ yarn # ou npm install
```

3. Configurando o banco de dados

```sh
# Configure seu banco de dados através do arquivo ormconfig.json;
# O banco de dados utilizado foi o Postgres, mas você pode configurar outro banco de dados, basta modificar o arquivo e instalar a dependência (por exemplo: para utilizar o mysql basta rodar um yarn add mysql e adicioná-lo no ormconfig.json);
$ Você também pode acessar o site https://typeorm.io/ para maiores informações.
```

4. Iniciando a aplicação

```sh
  # Rode os migrations
  $ yarn typeorm migration:run # ou npm typeorm migration:run
  # Inicie o servidor
  $ yarn dev:server # ou npm dev:server
```
