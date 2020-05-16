import {IRoom, rooms} from './data';
import {compileExpression} from 'filtrex';
import {filter as _filter} from 'lodash';

const getRoom = function(args: any): IRoom {
  const id = args.id;
  return rooms.filter((room) => room.id == id)[0];
};

const retrieveRooms = function(args: any): IRoom[] {
  if (!args.filter) return rooms;
  const filter = compileExpression(args.filter);
  return _filter(rooms, (room: IRoom) => {
    if (filter(room)) return true;
    return false;
  });
};

export const root = {
  room: getRoom,
  rooms: retrieveRooms,
};


export default root;
