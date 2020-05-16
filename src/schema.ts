const {buildSchema} = require('graphql');

// Initialize a GraphQL schema
export const schema = buildSchema(`
  type Query {
    room(id: Int!): Room
    rooms(filter: String): [Room]
  },
  type Room {
    id: Int
    name: String
    floor: Int
    capacity: Int
    phone: Boolean
    projector: Boolean
}
`);

export default schema;
