import {BTHomeEncoder} from './encoder';

export const BTHOME_SERVICE_UUID = [0xd2, 0xfc];

export type BTHomeDeviceProps = {
  localName?: string;
};

export class BTHomeDevice {
  public localName: string | undefined;

  constructor(props?: BTHomeDeviceProps) {
    this.localName = props?.localName;
  }

  encode = () => {
    return new BTHomeEncoder(this);
  };
}
