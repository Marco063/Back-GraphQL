const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./data/typeDefs");
const { resolvers } = require("./data/resolvers");
require("./drivers/conect-db");

const app = express();

async function start() {
    app.use(cors());
    app.use(express.json());
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.set("PORT", process.env.PORT || 4000);
    app.listen(app.get("PORT"), () => console.log(`Server listening on port ${app.get("PORT")}`));
}

start();