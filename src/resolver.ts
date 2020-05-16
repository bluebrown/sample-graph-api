import {IRoom, rooms} from './data';
import {compileExpression} from 'filtrex';

const getRoom = function(args: any): IRoom {
  const id = args.id;
  return rooms.filter((room) => room.id == id)[0];
};

const retrieveRooms = function(args: any): IRoom[] {
  if (!args.filter) return rooms;
  const filter = compileExpression(args.filter);
  return rooms.filter((room) => filter(room));
};

export const root = {
  room: getRoom,
  rooms: retrieveRooms,
};


export default root;
