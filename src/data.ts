export type Data = number[];

export type NumberType = (val: number) => Data;

export const UInt8: NumberType = (val) => [val];
export const UInt16: NumberType = (val) => [val & 0xff, (val >> 8) & 0xff];
export const UInt24: NumberType = (val) => [val & 0xff, (val >> 8) & 0xff, (val >> 16) & 0xff];
export const UInt32: NumberType = (val) => [val & 0xff, (val >> 8) & 0xff, (val >> 16) & 0xff, (val >> 24) & 0xff];
export const Int16: NumberType = (val) => [...new Uint8Array(new Int16Array([val]).buffer)]

export const stringToData = (text: string): Data => text.split('').map(c => c.charCodeAt(0));
