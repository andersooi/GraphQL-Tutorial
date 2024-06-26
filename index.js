import { ApolloServer } from "@apollo/server";
import { startStandAloneServer } from "@apollo/server/standalone";

// import types
import { typeDefs } from "./schema.js";

// server setup
const server = new ApolloServer({
    // typeDefs - definitions of types of data
    typeDefs,
    // resolvers
});

// destructuring the url from the startStandAloneServer function
const { url } = await startStandAloneServer(server, {
    listen: { port: 4000 }
});

console.log('Server ready at', 4000);