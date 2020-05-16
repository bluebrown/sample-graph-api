export interface IRoom {
    id: number
    name: string
    floor: number
    capacity: number
    phone: boolean
    printer: boolean
}


export const rooms: IRoom[] = [
  {
    id: 1,
    name: 'Satchel',
    floor: 0,
    capacity: 5,
    phone: true,
    printer: false,
  },
  {
    id: 2,
    name: 'Mazo',
    floor: 1,
    capacity: 7,
    phone: true,
    printer: true,
  },
];

export default rooms;
