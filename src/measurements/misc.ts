import {Data} from '../data';

const misc =
  (id: number) =>
  (value: number): Data => {
    return [id, value % 256];
  };

export const packetId = misc(0x00);
