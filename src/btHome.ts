import {adElement, AD_FLAGS, AD_COMPLETE_LOCAL_NAME, AD_SERVICE_DATA} from './bt';
import {append, Data, stringToData} from './data';

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

const BTHOME_PREAMBLE = BTHOME_SERVICE_UUID.concat(BTHOME_DEVICE_INFO);

const encodeAdvertisement = (preamble: Data, data: Data[]): Data => {
  const ad: Data = [];
  append(ad, preamble);

  const adData: Data = [];
  append(adData, BTHOME_PREAMBLE);
  data.forEach((datum) => append(adData, datum));

  append(ad, adElement(AD_SERVICE_DATA, adData));
  return ad;
};

export class BTHomeDevice {
  /**
   * Constant bytes that sent before each advertisement.
   */
  private adPreamble: Data;

  constructor(localName?: string) {
    this.adPreamble = adElement(AD_FLAGS, [BTHOME_FLAGS]);

    if (localName) {
      append(this.adPreamble, adElement(AD_COMPLETE_LOCAL_NAME, stringToData(localName)));
    }
  }

  encode = (data: Data[]): Data => {
    return encodeAdvertisement(this.adPreamble, data);
  };
}
