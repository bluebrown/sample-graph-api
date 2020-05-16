const express = require('express');
const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');

// Initialize a GraphQL schema
const schema = buildSchema(`
  type Query {
    user(id: Int!): Person
    users(shark: String): [Person]
  },
  type Person {
    id: Int
    name: String
    age: Int
    shark: String
  }
`);

const users = [
  {
    id: 1,
    name: 'Brian',
    age: '21',
    shark: 'Great White Shark',
  },
  {
    id: 2,
    name: 'Kim',
    age: '22',
    shark: 'Whale Shark',
  },
  {
    id: 3,
    name: 'Faith',
    age: '23',
    shark: 'Hammerhead Shark',
  },
  {
    id: 4,
    name: 'Joseph',
    age: '23',
    shark: 'Tiger Shark',
  },
  {
    id: 5,
    name: 'Joy',
    age: '25',
    shark: 'Hammerhead Shark',
  },
];

// Return a single user (based on id)
const getUser = function(args: any) {
  const userID = args.id;
  return users.filter((user) => user.id == userID)[0];
};

// Return a list of users (takes an optional shark parameter)
const retrieveUsers = function(args: any) {
  if (args.shark) {
    const shark = args.shark;
    return users.filter((user) => user.shark === shark);
  } else {
    return users;
  }
};

// Root resolver
const root = {
  user: getUser, // Resolver function to return user with specific id
  users: retrieveUsers,
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema, // Must be provided
  rootValue: root,
  graphiql: true, // Enable GraphiQL when server endpoint is accessed in browser
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
