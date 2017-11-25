import { buildFederatedSchema } from "@apollo/federation";
import { ApolloServer } from "apollo-server";
import { PubSub } from "graphql-subscriptions";
// import mongoose from "mongoose";
import * as mongoose from "mongoose";
import { MongoDB } from "./config/config";
import { resolvers } from "./resolver/resolver";
import { typeDefs } from "./schema/graphql/schema";

mongoose.connect(MongoDB);

const pubsub = new PubSub();

const server = new ApolloServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers: resolvers as any,
        }
    ])
});

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
