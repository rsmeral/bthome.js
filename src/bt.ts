import {Data} from './data';

// Defined in Section "2.3 Common Data Types" of the "Assigned Numbers" document of the Bluetooth specification
// See https://www.bluetooth.com/specifications/assigned-numbers/
export const AD_FLAGS = 0x01;
export const AD_COMPLETE_LOCAL_NAME = 0x09;
export const AD_SERVICE_DATA = 0x16;

type AdType = typeof AD_FLAGS | typeof AD_COMPLETE_LOCAL_NAME | typeof AD_SERVICE_DATA;

/**
 * Advertising Data format
 * See 11. Advertising and Scan Response Data Format of https://www.bluetooth.com/specifications/specs/core-specification-5-3/
 */
export const adElement = (type: AdType, data: Data): Data => [data.length + 1, type].concat(data);
