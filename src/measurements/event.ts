import {Data} from '../data';

const event =
  (objectId: number, eventId: number) =>
  (value?: number): Data => {
    const result = [objectId, eventId];
    if (value !== undefined) {
      result.push(value);
    }
    return result;
  };

export const buttonNone = event(0x3a, 0x00);
export const buttonPress = event(0x3a, 0x01);
export const buttonDoublePress = event(0x3a, 0x02);
export const buttonTriplePress = event(0x3a, 0x03);
export const buttonLongPress = event(0x3a, 0x04);
export const buttonLongDoublePress = event(0x3a, 0x05);
export const buttonLongTriplePress = event(0x3a, 0x06);
export const dimmerNone = event(0x3c, 0x00);
export const dimmerRotateLeft = event(0x3c, 0x01);
export const dimmerRotateRight = event(0x3c, 0x02);
