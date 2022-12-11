import {adElement, AD_FLAGS, AD_COMPLETE_LOCAL_NAME, AD_SERVICE_DATA} from './bt';
import {Data, stringToData} from './data';

/**
 * * LE General Discoverable Mode
 * * BR/EDR Not Supported
 *
 * See section 1.3.2 of https://www.bluetooth.com/specifications/specs/core-specification-supplement-10/
 */
const BTHOME_FLAGS = 0b00000110;

const BTHOME_SERVICE_UUID = [0xd2, 0xfc];

/**
 * BTHome Device Information. LSB-first order.
 *
 * * 0:   Encryption Flag: no encryption
 * * 1-4: Reserved for future use
 * * 5-7: BTHome Version (2)
 */
const BTHOME_DEVICE_INFO = 0b010_0000_0;

export class BTHomeDevice {
  constructor(public localName?: string) {}

  private encodeAdvertisement = (data: Data[]) => [
    ...adElement(AD_FLAGS, [BTHOME_FLAGS]),
    ...(this.localName ? adElement(AD_COMPLETE_LOCAL_NAME, stringToData(this.localName)) : []),
    ...adElement(AD_SERVICE_DATA, [...BTHOME_SERVICE_UUID, BTHOME_DEVICE_INFO, ...data.flat()])
  ];

  encode = (data: Data[]): Data => {
    return this.encodeAdvertisement(data);
  };
}
