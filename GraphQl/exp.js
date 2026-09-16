// const express = require("express");
// const { createHandler } = require("graphql-http/lib/use/express");
// const { buildSchema } = require("graphql");
// const { ruruHTML } = require("ruru/server");

// const schema = buildSchema(` 
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//   }

//   type Query {
//     hello: String!
//     user(id: ID!): User
//   }
// `);

// const users = [
//   { id: "7", name: "ayz", email: "ayz@example.com" },
//   { id: "8", name: "abc", email: "abc@example.com" },
// ];

// const root = {
//   hello: () => "Hello, GraphQL!",
//   user: ({ id }) => users.find((user) => user.id === id),
// };

// const app = express();

// // GraphQL Endpoint
// app.all("/graphql", createHandler({ schema, rootValue: root }));

// // GraphQL Playground (Browser UI)
// app.get("/", (req, res) => {
//   res.type("html").send(ruruHTML({ endpoint: "/graphql" }));
// });

// app.listen(4000, () => {
//   console.log("GraphQL API running at http://localhost:4000");
// });


const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// GraphQL Schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String!
    user(id: ID!): User
  }
`);

// Dummy data
const users = [
  {
    id: "1",
    name: "Aman",
    email: "aman@gmail.com",
  },
  {
    id: "2",
    name: "Rahul",
    email: "rahul@gmail.com",
  },
];

// Resolvers
const root = {
  hello: () => {
    return "Hello GraphQL!";
  },

  user: ({ id }) => {
    return users.find((user) => user.id === id);
  },
};

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000/graphql");
});