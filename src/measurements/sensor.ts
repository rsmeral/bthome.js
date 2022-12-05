import {Int16, UInt16, UInt24, UInt32, UInt8} from "../data";
import {NumberType} from "../data";

export type Sensor = {
  objectId: number;
  format: NumberType;
  factor: number;
}

export const Battery: Sensor = {objectId: 0x01, format: UInt16, factor: 1};
export const Co2: Sensor = {objectId: 0x12, format: UInt16, factor: 1};
export const Count: Sensor = {objectId: 0x09, format: UInt8, factor: 1};
export const Count16: Sensor = {objectId: 0x3D, format: UInt16, factor: 1};
export const Count32: Sensor = {objectId: 0x3E, format: UInt32, factor: 1};
export const Current: Sensor = {objectId: 0x43, format: UInt16, factor: 0.001};
export const Dewpoint: Sensor = {objectId: 0x08, format: Int16, factor: 0.01};
export const DistanceMillimeters: Sensor = {objectId: 0x40, format: UInt16, factor: 1};
export const DistanceMeters: Sensor = {objectId: 0x41, format: UInt16, factor: 0.1};
export const Duration: Sensor = {objectId: 0x42, format: UInt24, factor: 0.001};
export const Energy: Sensor = {objectId: 0X0A, format: UInt24, factor: 0.001};
export const Humidity: Sensor = {objectId: 0x2E, format: UInt8, factor: 1};
export const Humidity16: Sensor = {objectId: 0x03, format: UInt16, factor: 0.01}
export const Illuminance: Sensor = {objectId: 0x05, format: UInt24, factor: 0.01};
export const MassKg: Sensor = {objectId: 0x06, format: UInt16, factor: 0.01};
export const MassLb: Sensor = {objectId: 0x07, format: UInt16, factor: 0.01};
export const Moisture: Sensor = {objectId: 0x2F, format: UInt8, factor: 1};
export const Moisture16: Sensor = {objectId: 0x14, format: UInt16, factor: 0.01};
export const Pm25: Sensor = {objectId: 0x0D, format: UInt16, factor: 1};
export const Pm10: Sensor = {objectId: 0x0E, format: UInt16, factor: 1};
export const Power: Sensor = {objectId: 0x0B, format: UInt24, factor: 0.01};
export const Pressure: Sensor = {objectId: 0x04, format: UInt24, factor: 0.01};
export const Rotation: Sensor = {objectId: 0x3F, format: Int16, factor: 0.1};
export const Speed: Sensor = {objectId: 0x44, format: UInt16, factor: 0.01};
export const Temperature: Sensor = {objectId: 0x02, format: Int16, factor: 0.01};
export const Temperature10: Sensor = {objectId: 0x45, format: Int16, factor: 0.1};
export const Tvoc: Sensor = {objectId: 0x13, format: UInt16, factor: 1};
export const Voltage: Sensor = {objectId: 0x0C, format: UInt16, factor: 0.001};
export const UVIndex: Sensor = {objectId: 0x46, format: UInt8, factor: 0.1};
