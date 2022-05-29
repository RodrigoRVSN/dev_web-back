# Miakhats API

<!--- https://shields.io --->

![GitHub repo size](https://img.shields.io/github/repo-size/rodrigorvsn/dev_web-back?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/rodrigorvsn/dev_web-back?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/rodrigorvsn/dev_web-back?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/rodrigorvsn/dev_web-back?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/rodrigorvsn/dev_web-back?style=for-the-badge)

<!--- #################### mudar badges #################### --->

![image](https://user-images.githubusercontent.com/75763403/165654110-a2de08fb-b536-49bf-b6e9-fa9001465d7f.png)

<!--- #################### mudar imagem exemplo #################### --->
___
> This is a api project to a adoption website
___
## 💻 Prerequisites

- Install LTS Node version.
- Install Docker
- Install docker-compose

<!--- #################### mudar pré-requisitos  ####################--->
___
## 🛠 Tools used

Technologies:

- Typescript (superset of javascript with typing)
- Node (to run javascript on server side)
- express (minimalist nodejs framework)
- PostgreSQL (database sql)
- Docker (to create database and server images)
- swagger-ui (to make a documentation of the endpoints)
- aws-sdk (to make image upload to S3 of AWS cloud services)
- Heroku (to deploy the database and the server)
- pino (to make logs)
- eslint (linter to keep a pattern between files)
 
<!--- #################### mudar ferramentas #################### --->
___
## 🚀 Installing dev_web-back

To use, follow the steps:

```bash
git clone https://github.com/rodrigorvsn/dev_web-back.git
```

```bash
yarn install
```

```bash
yarn live-reload:docker
```

```bash
yarn database:docker
```

- Insert your schema (schema.sql) in the postgreSQL, using bash in interactive mode

```bash
docker exec -it database_miakhats bash
```

- Enter in the database with his password

```bash
psql -U mia
```

- Create the database in PostgreSQL image

```bash
\c miakhats
```

- Connect the tables of the schema in the database (copy after line 3 in schema.sql).

## 📫 Contribuiting with dev_web-back

To contribue with dev_web-back, follow the steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <name_branch>`.
3. Make the changes and confirm: `git commit -m '<message_commit>'`
4. Send to original repository: `git push origin <main_branch> / <local>`
5. Send the pull request.

Alternatively, see the GitHub documentation at [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
___
## 🤝 Contributors

Made with ❤️ by:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/rodrigorvsn.png" width="100px;" alt="Foto do Rodrigo Victor no GitHub"/><br>
        <sub>
          <b>Rodrigo Victor</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
