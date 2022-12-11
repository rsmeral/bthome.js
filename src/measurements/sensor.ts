import {NumberType, Data, UInt16, UInt8, UInt32, Int16, UInt24} from '../data';

const sensor =
  (objectId: number, format: NumberType, factor: number) =>
  (value: number): Data => {
    const data = format(Math.round(value / factor));
    return [objectId].concat(data);
  };

export const battery = sensor(0x01, UInt8, 1);
export const co2 = sensor(0x12, UInt16, 1);
export const count = sensor(0x09, UInt8, 1);
export const count16 = sensor(0x3d, UInt16, 1);
export const count32 = sensor(0x3e, UInt32, 1);
export const current = sensor(0x43, UInt16, 0.001);
export const dewpoint = sensor(0x08, Int16, 0.01);
export const distanceMillimeters = sensor(0x40, UInt16, 1);
export const distanceMeters = sensor(0x41, UInt16, 0.1);
export const duration = sensor(0x42, UInt24, 0.001);
export const energy = sensor(0x0a, UInt24, 0.001);
export const humidity = sensor(0x2e, UInt8, 1);
export const humidity16 = sensor(0x03, UInt16, 0.01);
export const illuminance = sensor(0x05, UInt24, 0.01);
export const massKg = sensor(0x06, UInt16, 0.01);
export const massLb = sensor(0x07, UInt16, 0.01);
export const moisture = sensor(0x2f, UInt8, 1);
export const moisture16 = sensor(0x14, UInt16, 0.01);
export const pm25 = sensor(0x0d, UInt16, 1);
export const pm10 = sensor(0x0e, UInt16, 1);
export const power = sensor(0x0b, UInt24, 0.01);
export const pressure = sensor(0x04, UInt24, 0.01);
export const rotation = sensor(0x3f, Int16, 0.1);
export const speed = sensor(0x44, UInt16, 0.01);
export const temperature = sensor(0x02, Int16, 0.01);
export const temperature10 = sensor(0x45, Int16, 0.1);
export const tvoc = sensor(0x13, UInt16, 1);
export const voltage = sensor(0x0c, UInt16, 0.001);
export const uvIndex = sensor(0x46, UInt8, 0.1);
