import "reflect-metadata";
import {buildSchema } from 'type-graphql';
import { MotoResolver } from "./moto-resolver";

import { ApolloServer } from "apollo-server" 
import * as path from "path"

async function main() {
    const schema = await buildSchema({
        resolvers: [MotoResolver],

        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    //Graphql serveur
    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen(4000);
    console.log("server started on ", url, "/graphql");
    
}

main();