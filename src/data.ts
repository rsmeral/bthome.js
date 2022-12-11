export type Data = number[];
export type NumberType = (val: number) => Data;

export const UInt8: NumberType = (val) => [val];
export const UInt16: NumberType = (val) => [val & 0xff, (val >> 8) & 0xff];
export const UInt24: NumberType = (val) => [val & 0xff, (val >> 8) & 0xff, (val >> 16) & 0xff];
export const UInt32: NumberType = (val) => [val & 0xff, (val >> 8) & 0xff, (val >> 16) & 0xff, (val >> 24) & 0xff];
export const Int16: NumberType = (val) => UInt16(val > 0x7fff ? val - 0x10000 : val);

/**
 * Convert string to ASCII char codes.
 */
export const stringToData = (text: string): Data => text.split('').map((c) => c.charCodeAt(0));

/**
 * Append an array to the end of an array.
 * A tradeoff between DX, code size, and Espruino compatibility.
 */
export const append = (data: Data, newData: Data) => {
  newData.forEach((b) => data.push(b));
};
