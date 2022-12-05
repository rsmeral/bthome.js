export type Event = {
  objectId: number;
  eventId: number;
};

export const ButtonNone: Event = {objectId: 0x3A, eventId: 0x00};
export const ButtonPress: Event = {objectId: 0x3A, eventId: 0x01};
export const ButtonDoublePress: Event = {objectId: 0x3A, eventId: 0x02};
export const ButtonTriplePress: Event = {objectId: 0x3A, eventId: 0x03};
export const ButtonLongPress: Event = {objectId: 0x3A, eventId: 0x04};
export const ButtonLongDoublePress: Event = {objectId: 0x3A, eventId: 0x05};
export const ButtonLongTriplePress: Event = {objectId: 0x3A, eventId: 0x06};
export const DimmerNone: Event = {objectId: 0x3C, eventId: 0x00};
export const DimmerRotateLeft: Event = {objectId: 0x3C, eventId: 0x01};
export const DimmerRotateRight: Event = {objectId: 0x3C, eventId: 0x02};
