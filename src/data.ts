export interface IRoom {
  id: number
  name: string
  floor: number
  capacity: number
  phone: boolean
  projector: boolean
}

export const rooms: IRoom[] = [
  {
    id: 1,
    name: 'Satchel',
    floor: 0,
    capacity: 5,
    phone: true,
    projector: false,
  },
  {
    id: 2,
    name: 'Mazo',
    floor: 1,
    capacity: 7,
    phone: true,
    projector: true,
  },
  {
    id: 3,
    name: 'Tollimore',
    floor: 1,
    capacity: 4,
    phone: false,
    projector: false,
  },
  {
    id: 4,
    name: 'dopel',
    floor: 3,
    capacity: 12,
    phone: false,
    projector: true,
  },
];

export default rooms;
