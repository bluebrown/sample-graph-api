import {gql} from 'apollo-server';

export const typeDefs = gql`
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
`;


export default typeDefs;
