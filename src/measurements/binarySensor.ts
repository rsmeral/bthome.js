import {Data} from '../data';

const binarySensor =
  (objectId: number) =>
  (value: boolean): Data => {
    return [objectId, value ? 1 : 0];
  };

export const batteryHigh = binarySensor(0x15);
export const batteryCharging = binarySensor(0x16);
export const carbonMonoxideDetected = binarySensor(0x17);
export const coldDetected = binarySensor(0x18);
export const connectivityConnected = binarySensor(0x19);
export const doorOpen = binarySensor(0x1a);
export const garageDoor = binarySensor(0x1b);
export const gasDetected = binarySensor(0x1c);
export const genericBoolean = binarySensor(0x0f);
export const heatDetected = binarySensor(0x1d);
export const lightDetected = binarySensor(0x1e);
export const lockUnlocked = binarySensor(0x1f);
export const moistureWet = binarySensor(0x20);
export const motionDetected = binarySensor(0x21);
export const moving = binarySensor(0x22);
export const occupancyDetected = binarySensor(0x23);
export const openingOpen = binarySensor(0x11);
export const plugPlugged = binarySensor(0x24);
export const powerOn = binarySensor(0x10);
export const presenceDetected = binarySensor(0x25);
export const problem = binarySensor(0x26);
export const running = binarySensor(0x27);
export const safetySafe = binarySensor(0x28);
export const smokeDetected = binarySensor(0x29);
export const soundDetected = binarySensor(0x2a);
export const tamperDetected = binarySensor(0x2b);
export const vibrationDetected = binarySensor(0x2c);
export const windowClosed = binarySensor(0x2d);
