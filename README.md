# moto-api_test_smt-performance

API developed with Graphql and TypeScript for a company test

## Framework :

[TypeGraphQL](https://typegraphql.com/)

## Server

[Apollo Server](https://www.apollographql.com/docs/apollo-server/)

## Setup

### With npm

    npm i
    npm start

### With yarn

    npm install --global yarn
    yarn start

## Example request

### List of all motorcycles

    query Motos {
        motos {
            id
            marque
            modele
        }
    }

### Select one brand

    query{
        moto(marque: "honda") {
            marque
            modele
            cylindree
        }
    }
