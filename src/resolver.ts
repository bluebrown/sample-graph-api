import {rooms as roomsData} from './data';
import {compileExpression} from 'filtrex';
import {filter as _filter, find as _find} from 'lodash';

function room(_: any, args: any) {
  return _find(roomsData, (room) => room.id === args.id);
}

function rooms(_: any, args: any) {
  if (!args.filter) return roomsData;
  const filter = compileExpression(args.filter);
  return _filter(roomsData, (room) => {
    if (filter(room)) return true;
    return false;
  });
}

export const resolvers = {
  Query: {
    room,
    rooms,
  },
};

export default resolvers;
